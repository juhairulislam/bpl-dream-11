import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    console.log(playersPromise);
    const players = use(playersPromise);
    // console.log(data)


    const [selectedType, setSelectedType] = useState('Available');
    // console.log(selectedType)

    return (
        <div className='container w-[90%] mx-auto my-[60px]'>

            <div className='flex justify-between gap-2'>
               { selectedType==='Available' ? <p className='font-bold text-2xl'>Available Players</p> : <p className='font-bold text-2xl'>Selected Players (2/6)</p>}

                <div>
                    <button onClick={()=> setSelectedType('Available')} className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" :'btn'} rounded-r-none`}>Available</button>
                    <button onClick={() => setSelectedType('Selected')} className={` btn ${selectedType === "Selected" ? "bg-[#E7FE29]" :'btn' }  rounded-l-none`}>Selected</button>
                </div>

            </div>


           {selectedType==='Available' ? <AvailablePlayers players={players}></AvailablePlayers>: <SelectedPlayers></SelectedPlayers>}

        </div>
    );
};

export default Players;