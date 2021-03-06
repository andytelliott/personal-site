import React from 'react'

const Activity = ({title, description, image}) => {
    const BASE_URL = '/ActivityImages/';
    const imageStyles = {
        backgroundImage: `url("${BASE_URL + image}")`,
        height: '40vw',
        maxHeight:'10em',
        width: '40vw',
        maxWidth: '15em',
        marginTop:'2em',
        marginRight:'1em',
        backgroundPosition: 'center center',
        backgroundSize: '65%',
        backgroundRepeat: 'no-repeat',
        boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
    }


    return (
        <li className="row center-xs start-sm">
           <div style={imageStyles}></div>
            <div className="col-xs-12 col-sm-6">
            <h3 className="col-xs-12 projectTitle">{title}</h3>
            <p >{description}</p>
            </div>
        </li>
    )
}



export default Activity
