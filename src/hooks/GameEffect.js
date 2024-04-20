import { Transition } from 'react-transition-group';
import React, { Children, useRef } from 'react';
import Roulete from '../views/Play/components/Roulete';




function GameEffect(props) {
  const transitionStyles = {
    entering:  {animationPlayState: "running" },
    entered:  {animationPlayState: "running" },
    exiting:  { animationPlayState: "paused" },
    exited:  {animationPlayState: "paused" },
  };
  const defaultStyle = {
    
   
  }
  
  const nodeRef = useRef(null);
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
       props.feedback(1);
    }, props.duration || 500);
  }, [])
  

  return (
    <Transition nodeRef={nodeRef} in={show} timeout={props.duration || 500}>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <div>
            <Roulete animState={transitionStyles[state]} />
          </div>
          <div>{JSON.stringify(transitionStyles[state])}</div>
          
          
        </div>
      )}
    </Transition>
  );
}

export default GameEffect