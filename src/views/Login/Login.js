import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { efetuarLogin, LOGAR } from '../../store/actions';

function Login(props) {

  const [cred, setcred] = React.useState({email: '', password: ''})

  const dispatch = useDispatch();

  const logar = async (e) => {
    e.preventDefault();
    dispatch(efetuarLogin(cred.email, cred.password))
  }

  const handleForm = e => {
    const {name, value} = e.target;
    setcred({...cred, [name]: value})
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleForm} name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleForm} name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={logar} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


export default Login
