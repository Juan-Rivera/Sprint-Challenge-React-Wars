import React, { useState, useEffect} from 'react';
import Character from './Character';
import { getCharacter } from 'rickmortyapi' //getCharacter() which gets all characters as a promise (axios)
import CLContainer from './CLContainer';


export default function CharacterList(){
    //console.log(characters);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacter()
        .then((res) => {
        setCharacters(res.results)
        })
      }, []) 
   return(
    <CLContainer>
            {  
                characters.map(ch => {
                    return <Character  image={ch.image} name={ch.name} status={ch.status} species={ch.species} gender={ch.gender} origin={ch.origin.name} />
                })
             }
        </CLContainer>
   )
}

/*
{"id":1,
"name":"Rick Sanchez",
"status":"Alive",
"species":"Human","type":"",
"gender":"Male",
"origin":{"name":"Earth (C-137)",
"url":"https://rickandmortyapi.com/api/location/1"},
"location":{"name":"Earth (Replacement Dimension)",
"url":"https://rickandmortyapi.com/api/location/20"},
"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
}
*/