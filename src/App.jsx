
import { Suspense } from 'react';
import './App.css'
import Players from './components/Homepage/players/Players';
import Navbar from './components/Navbar/Navbar'


const fetchPlayer = async() =>{
  const res = await fetch('/player.json') ;

  return res.json();
}

function App() {

  const playersPromise = fetchPlayer()
 

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Players playersPromise={ playersPromise}></Players>

    </Suspense>

    

    </>
  )
}

export default App
