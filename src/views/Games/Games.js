import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GameService from '../../services/GameService'
import { Container, Row, Col } from 'react-bootstrap'
import GameCard from '../../components/GameCard'
import MyLoading from '../../components/MyLoading'
import { useSelector } from 'react-redux'


function Games(props) {

  const logado = useSelector((state) => state.logado)

  const [loading, setloading] = React.useState(false)

  const [games, setgames] = React.useState([])

  React.useEffect(() => {
    setloading(true);
    setTimeout(() => 
    GameService.getAllGames()
      .then(allGames => {
        setgames(allGames)
        setloading(false)
      })
      .catch(err => setloading(false))
    , 2000)
    //.then(setgames)
  },[])

  return (
    <div>
      {logado ?
      <Container>
      <div style={{height: "600px"}}>
        {loading ? <MyLoading  /> :
        
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
        
      }
      </div>
      </Container>
    : <h1>Favor logar</h1> 
    }
    </div>
  )
}


export default Games
