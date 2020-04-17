// Write your Character component here
import React from 'react'
import CContainer from './CContainer';
import CIContainer from './CIContainer';

export default function Character(props) {
    const {image, name, status, species, gender, origin } = props
    console.log(name, status, species, gender, origin);

return(
    <CContainer>
        <div className='img-container'>
            <img src={image} alt='character headshot'></img>
        </div>
        <CIContainer>
          <h2>{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
        
        </CIContainer>
    </CContainer>
)
}