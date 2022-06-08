import React, {useState, useEffect} from 'react';
import { json } from 'stream/consumers';
import './App.css';
import TestimonialItem from './components/TestimonialItem';

const App = () => {
  const [Joke, setJoke] = useState(null);
  const [ShownJoke, setShownJoke] = useState(null);
  useEffect(() => setShownJoke(Joke), [Joke])


  const updateJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(json => setJoke(json.value))
  }
  
  return <div className='block items-center'>
    <div className='px-2.5 py-2.5 mx-auto'>
      <TestimonialItem texto={ShownJoke || 'Chuck Norris would take 1 second to code this app'}/>
      </div>
      <span className='flex justify-center px-1.5 py-1.5'>
        <button className='text-sky-100 hover:text-black border border-sky-300 hover:bg-sky-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ' onClick={updateJoke}>Next Joke</button>
      </span>
  </div>
}

export default App;
