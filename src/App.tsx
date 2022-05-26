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
  
  return <div className='block items-center'>
    <div className='px-2.5 py-2.5 mx-auto'>
      <TestimonialItem texto={Dados}/>
      </div>
      <span className='flex justify-center px-1.5 py-1.5'>
        <button className='text-sky-100 hover:text-black border border-sky-300 hover:bg-sky-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={()=> {
setNjoke(Njoke + 1)
   }}>Next Joke</button>
      </span>
  </div>
}

export default App;
