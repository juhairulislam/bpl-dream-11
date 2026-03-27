import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise,setCoin,coin }) => {

    console.log(playersPromise);
    const players = use(playersPromise);


    const [selectedType, setSelectedType] = useState('Available');
    const [selectedPlayers, setSelectedPlayers] = useState([]) ;

    return (
        <div className='container w-[90%] mx-auto my-[61px]'>

            <div className='flex justify-between gap-2'>
               { selectedType==='Available' ? <p className='font-bold text-xl md:text-2xl'>Available Players</p> : <p className='font-bold text-2xl'>Selected Players ({selectedPlayers.length}/{players.length})</p>}

                <div className='flex'>
                    <button onClick={()=> setSelectedType('Available')} className={`btn  ${selectedType === "Available" ? "bg-[#E7FE29]" :'btn'} rounded-r-none`}>Available</button>
                    <button onClick={() => setSelectedType('Selected')} className={` btn ${selectedType === "Selected" ? "bg-[#E7FE29]" :'btn' }  rounded-l-none`}>Selected ({selectedPlayers.length})</button>
                </div>

            </div>


           {selectedType==='Available' ?<AvailablePlayers players={players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} setCoin={setCoin} coin={coin}></AvailablePlayers>: <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}></SelectedPlayers>}

        </div>
    );
};

export default Players;