import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character' //imports the Character.js file
import { getCharacter } from 'rickmortyapi' //getCharacter() which gets all characters as a promise (axios)


const url = 'https://rickandmortyapi.com/api/character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null);

  const characterData = useEffect(() => {
    getCharacter()
    .then((res) =>
    //console.log(res.results)
    setCharacters(res.results)
    )
  }, []) 
//commit
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}

export default App;
