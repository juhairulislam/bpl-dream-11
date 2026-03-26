
import { Suspense, useState } from 'react';
import './App.css'
import Players from './components/Homepage/players/Players';
import Navbar from './components/Navbar/Navbar'
import { DiVim } from 'react-icons/di';


const fetchPlayer = async() =>{
  const res = await fetch('/player.json') ;

  return res.json();
}

function App() {

  const playersPromise = fetchPlayer()
  const [coin, setCoin] = useState(50000)
 

  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Suspense fallback={ <div className='min-h-screen flex items-center justify-center '>
      <span className="loading loading-spinner loading-xl"></span>
    </div>
    }>
    <Players playersPromise={ playersPromise} setCoin={setCoin} coin={coin}></Players>

    </Suspense>

    

    </>
  )
}

export default App
