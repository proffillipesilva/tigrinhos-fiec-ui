import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { efetuarLogin, LOGAR } from '../../store/actions';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../../utils/axios';


function Login(props) {

  const [cred, setcred] = React.useState({email: '', password: ''})
  const [cad, setcad] = React.useState({cpf: '', idade: '', name: '', email: ''})
  const [id, setId] = React.useState('')

  const [isCadastro, setIsCadastro] = React.useState(false)


  const dispatch = useDispatch();

  const logar = async (e) => {
    e.preventDefault();
    dispatch(efetuarLogin(cred.email, cred.password))
  }

  const cadastrar = async (e) => {
    e.preventDefault();
    await axiosInstance.put('/usuarios/'+id, cad);
    dispatch(efetuarLogin(cad.email, ''))
  }

  const handleForm = e => {
    const {name, value} = e.target;
    setcred({...cred, [name]: value})
  }

  const handleCadForm = e => {
    const {name, value} = e.target;
    setcred({...cad, [name]: value})
  }

  const responseGoogle = async (response) => {
    try{
      const res = await axiosInstance.post('/auth/login/google', {gtoken: response.credential});
      console.log(res);
    } catch(err){
      console.log(err);
      if(err.response && err.response.usuario) {
        setIsCadastro(true);
        localStorage.setItem('token', err.response.token)
        setcad({...cad, name: err.response.usuario.name, email: err.response.usuario.email})
        setId(err.response.usuario.id)
      }
    }
  }


  return (
    <Container>
      {isCadastro ?  
      <Row>
      <Col md={{ span: 4, offset: 4 }} >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleCadForm} name='text' type="text" disabled={true} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CPF</Form.Label>
            <Form.Control onChange={handleCadForm} name='cpf' type="text" placeholder="Enter CPF" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Idade</Form.Label>
            <Form.Control onChange={handleCadForm} name='idade' type="number" placeholder="Enter Idade" />
          </Form.Group>

          <Button onClick={cadastrar} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
      :
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
      }
      <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />

    </Container>
  )
}


export default Login
