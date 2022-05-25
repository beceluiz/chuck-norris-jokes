import React, {useState, useEffect} from 'react';
import { json } from 'stream/consumers';
import './App.css';
import TestimonialItem from './components/TestimonialItem';

function App() {
  const [Njoke, setNjoke] = useState(0)
  const [Dados, setDados] = useState(null)
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => setDados(json.value))
  }, [Njoke])
  
  return <div className='p-10 '>
   <TestimonialItem texto={Dados}/>
   <button onClick={()=> {
setNjoke(Njoke + 1)
   }}>Next</button>
   <p></p>
  </div>
}

export default App;
