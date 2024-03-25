import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GameService from '../../services/GameService'
import { Container, Row, Col } from 'react-bootstrap'
import GameCard from '../../components/GameCard'

function Games(props) {

  const [games, setgames] = React.useState([])

  React.useEffect(() => {
    GameService.getAllGames()
      .then(allGames => setgames(allGames))
    //.then(setgames)
  },[])

  return (
    <div>

      <Container>
      <Row>
        {games && games.map((game, idx) => (
          <Col xl={4} xs={12}>
            <GameCard
              title={game.title}
              image={game.image}
              idx={game.id}
              key={idx}

            />
            </Col>
          
        ))}
        </Row>
      </Container>
    </div>
  )
}


export default Games
