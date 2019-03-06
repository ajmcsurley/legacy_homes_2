import React from 'react';
import maryland1 from '../images/2600_Maryland_Avenue/Maryland1.jpg';
const Slide = ({ image }) => {
    const styles = {
        //backgroundImage: `url(${import(`${image}`)})`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    return <div className="slide" style={styles}></div>
}

export default Slide;