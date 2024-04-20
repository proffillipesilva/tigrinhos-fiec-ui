import { Transition } from 'react-transition-group';
import React, { Children, useRef } from 'react';




function MyEffect(props) {
  const defaultStyle = {
    transition: `opacity ${props.duration || 500}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 1 },
    exited:  { opacity: 0 },
  };
  const nodeRef = useRef(null);
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setShow(false), props.duration || 500);
  }, [])
  

  return (
    <Transition nodeRef={nodeRef} in={show} timeout={props.duration || 500}>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {Children.only(props.children)}
        </div>
      )}
    </Transition>
  );
}

export default MyEffect