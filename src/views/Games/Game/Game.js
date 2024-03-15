import React from 'react'
import PropTypes from 'prop-types'
import {useParams, useSearchParams, useLocation} from 'react-router-dom'

function Game(props) {
  const params = useParams()
  const [game, setgame] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:38000/games/' + params.id)
    .then(res => res.json())
    .then(game => setgame(game))
    
  }, [])

  //let searchParams = new URLSearchParams(useLocation().search).get('aluno');
  //let searchParams = new URLSearchParams(useLocation().search).get('aluno');
  return (
    <div>
        {game && <div>
                <h2>{game.title}</h2>
                <br />
                <p> Premiação de {game.bonus}</p>
            </div>}    
     </div>
    
  )
}


export default Game
