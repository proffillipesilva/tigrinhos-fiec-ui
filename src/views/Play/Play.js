import React from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import MyFade from '../../components/MyFade'
import MyEffect from '../../hooks/MyEffect'
import Roulete from './components/Roulete'
import GameEffect from '../../hooks/GameEffect'
import MyBackdrop from '../../components/MyBackdrop'

function Play() {
    const [carregado, setCarregado] = React.useState(false)
    const [feedback, setfeedback] = React.useState(0)
    
    return (
        <div>
            <Container>

                <MyEffect>
                    <div >
                        <img src='https://assets.sitecontents.net/slots/133/desktopImage-desktopImage-fortune_tiger_lq-1696509642241.gif' />
                    </div>
                </MyEffect>

                { carregado && <GameEffect feedback={setfeedback} in={carregado} duration={1000 + Math.random() * 1000} >
               
                <button onClick={() => setCarregado(true)} >Jogar!</button>
                </GameEffect>}
                {feedback == 1 && 
                <MyBackdrop cancelShow={() => setfeedback(0)} feed={true} image={'https://assets.sitecontents.net/slots/133/desktopImage-desktopImage-fortune_tiger_lq-1696509642241.gif'} /> }
                
        
            </Container>
            <Row>
            {carregado ? <Button variant='primary' onClick={() => setCarregado(false)} >Tentar novamente!</Button> :
            <Button variant='primary' onClick={() => setCarregado(true)} >Jogar!</Button> }
            </Row>
        </div>
    )
}

export default Play