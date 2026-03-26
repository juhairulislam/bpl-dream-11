import React from 'react';

import Card from '../../../UI/Card'

const AvailablePlayers = ({ players,setCoin,coin,setSelectedPlayers, selectedPlayers }) => {
    // console.log(players)
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                players.map((player, index) =>{

                    return (
                        <Card key={index} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></Card>
                    )
                   
                }
                  
                    
                )
            }
           
        </div>
    );
};

export default AvailablePlayers;