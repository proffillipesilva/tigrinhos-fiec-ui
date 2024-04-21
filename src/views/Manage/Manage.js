import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import GameService from '../../services/GameService';

function Manage() {

    const [form, setForm] = React.useState({title: '', bonus: '', image: ''})
    const params = useParams()

    React.useEffect(() => {
    if(params.id){
    GameService.getGameById(params.id)
    .then(game => setForm({title: game.title, bonus: game.bonus, image: game.image}))
    
    }

    }, [])

    const handleInput = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value })
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        await GameService.deleteGame(params.id, form)
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       if(params.id){
        await GameService.updateGame(params.id, form)
       } else {
        await GameService.createGame(form);
       }
       
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} >
                        <Form>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name='title' placeholder="Enter title"
                                 onChange={handleInput} value={form.title} />
                                <Form.Text className="text-muted">
                                    Game Title
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Image</Form.Label>
                                <Form.Control  value={form.image} onChange={handleInput} name='image' type="text" placeholder="Enter Image Url" />
                                <Form.Text className="text-muted">
                                    Image
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Bonus</Form.Label>
                                <Form.Control  value={form.bonus} onChange={handleInput} name='bonus' type="number" placeholder="Enter Bonus" />
                                <Form.Text className="text-muted">
                                    Bonus
                                </Form.Text>
                            </Form.Group>
                            <Button onClick={handleSubmit} variant="primary" type="submit">
                                Submit
                            </Button>
                            {params.id &&
                            <Button onClick={handleDelete} variant="primary" type="submit">
                                Delete Game
                            </Button>}
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Manage