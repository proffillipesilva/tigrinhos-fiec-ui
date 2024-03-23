import React from 'react'
import PropTypes from 'prop-types'
import {useParams, useSearchParams, useLocation} from 'react-router-dom'
import axiosInstance from '../../../utils/axios'
import GameService from '../../../services/GameService'

import { Image, Container, Table, Row, Col } from 'react-bootstrap'

function Game(props) {
  const params = useParams()
  const [game, setgame] = React.useState(null)

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
          
          <th>Caracteristica</th>
          <th>Valores</th>
          
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
            </Container>}    
     </div>
    
  )
}


export default Game
