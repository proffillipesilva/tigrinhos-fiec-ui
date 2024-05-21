import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { efetuarLogin, LOGAR } from '../../store/actions';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../../utils/axios';
import { isExpired, decodeToken } from "react-jwt";
import ReactFacebookLogin from 'react-facebook-login';

function Login(props) {

  const [cred, setcred] = React.useState({ email: '', password: '' })
  const [cad, setcad] = React.useState({ cpf: '', idade: '', name: '', email: '' })
  const [id, setId] = React.useState('')

  const [isCadastro, setIsCadastro] = React.useState(false)

  const responseFacebook = (response) => {
    console.log(response);
  }


  const dispatch = useDispatch();

  const logar = async (e) => {
    e.preventDefault();
    dispatch(efetuarLogin(cred.email, cred.password))
  }

  const cadastrar = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put('/usuarios/' + id, cad);
      dispatch(efetuarLogin(cad.email, ''))
    } catch (err) {
      console.log(err);
    }
  }

  const handleForm = e => {
    const { name, value } = e.target;
    setcred({ ...cred, [name]: value })
  }

  const handleCadForm = e => {
    const { name, value } = e.target;
    setcad({ ...cad, [name]: value })
  }

  const ResponseGoogle = async (response) => {
    try {
      const res = await axiosInstance.post('/auth/login/google', { gtoken: response.credential });
      console.log(res.data.token)
      const myDecodedToken = decodeToken(res.data.token);
      dispatch(efetuarLogin(myDecodedToken.sub, ''))
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.usuario) {
        const serverResponse = err.response.data;
        console.log(serverResponse.usuario)
        setIsCadastro(true);
        localStorage.setItem('token', serverResponse.token)
        setcad({ ...cad, name: serverResponse.usuario.name, email:serverResponse.usuario.email })
        setId(serverResponse.usuario.id)
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
                <Form.Control onChange={handleCadForm} name='text' type="text" disabled={true} value={cad.name} />
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
      <GoogleLogin onSuccess={ResponseGoogle} onError={ResponseGoogle} />

 
 

  <ReactFacebookLogin
    appId=""
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />

    </Container>
  )
}


export default Login
