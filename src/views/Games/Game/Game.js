import React from 'react'
import PropTypes from 'prop-types'
import {useParams, useSearchParams, useLocation, Link} from 'react-router-dom'
import axiosInstance from '../../../utils/axios'
import GameService from '../../../services/GameService'

import { Image, Container, Table, Row, Col, Button } from 'react-bootstrap'
import MyBackdrop from '../../../components/MyBackdrop'

function Game(props) {
  const params = useParams()
  const [game, setgame] = React.useState(null)

  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [showFeed, setShowFeed] = React.useState(false);

  React.useEffect(() => {
    GameService.getGameById(params.id)
    .then(gameById => setgame(gameById))
    
  }, [])

  //let searchParams = new URLSearchParams(useLocation().search).get('aluno');
  //let searchParams = new URLSearchParams(useLocation().search).get('aluno');
  return (
    <div>
        {game && <Container>
              <Row>
                <Col md={6} xs={12}>
          <Image height={"300px"} src={game.image} roundedCircle  />
          </Col>
          <Col md={6} xs={12}>
          <br />
          <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Features</th>
          <th>Values</th>
          
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Title</td>
          <td>{game.title}</td>
        </tr>
        <tr>
          <td>Bonus</td>
          <td>{game.bonus}</td>
        </tr>
        </tbody>
        </Table>
        </Col>
        </Row>
            <Row>
              <Link to={"/manage/" + game.id}>Edit Game</Link>
              <Button onClick={() => setShowFeed(true)}>Test</Button>
            </Row>
             {showFeed && <MyBackdrop feed={true} show={showFeed} cancelShow={() => setShowFeed(false)}  />}
      {/*<MyFade in={showFeed} cancelShow={() => setShowFeed(false)}/>*/}
            </Container>}    
     </div>
    
  )
}


export default Game
