import React from 'react';
import OkImage from './icons8-ok.gif'
import CancelImage from './icons8-cancelar.gif'

const backdrop = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: 100,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
}

const imageStyle = {
    width: "30vw",
    height: "30vh",
    
}

const imagePos = {
    top: '35%',
    left: '35%',
    position: 'relative'
}

const MyBackdrop = ({feed, image, cancelShow}) => {
    React.useEffect(() => {
        setTimeout(() => cancelShow() ,3000)
    }, [])
    return (
    <div style={backdrop}>
        <div style={imagePos}>
        {feed ? <img style={imageStyle} src={image || OkImage} alt='ok' /> : <img style={imageStyle} src={CancelImage} alt='cancel'/>}
        </div>
    </div> 
    );
}

export default MyBackdrop;