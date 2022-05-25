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
  
  return <div className=' p-10'>
    <div>
      <TestimonialItem texto={Dados}/>
   <button className='text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"' onClick={()=> {
setNjoke(Njoke + 1)
   }}>Next Joke</button>
   <p></p>
    </div>
   
  </div>
}

export default App;
