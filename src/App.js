import { useState } from 'react';
import './App.css';
import Axios from 'axios';
function App() 
{

  const [joke, setJoke] = useState('');

  const getJoke = () => {
    Axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(
      response => {
        console.log(response);
        setJoke(response.data.setup + ' ... ' + response.data.punchline);
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-blue-50 shadow-md p-2">
      <section className='border p-5 rounded-md bg-blue-300 text-center h-96 w-96 flex flex-col justify-center items-center gap-10'>
            <div>
              <h1 className="font-semibold text-white text-xl">Joke Generator Using React And Joke API</h1>
            </div>
            <div className="flex items-center justify-center max-h-40 max-w-90 rounded-md p-1 bg-white">
              <p>{joke}</p>
            </div>
            <button className='border border-black rounded-md px-5 py-1  bg-blue-500 text-white hover:bg-blue-600 transition 0.5s' onClick={getJoke}>Click To Generate Joke</button>
      </section>
      
    </div>
  );
}

export default App;
