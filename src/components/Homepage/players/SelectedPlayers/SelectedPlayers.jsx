import React from 'react';
import { MdDelete } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,setCoin, coin}) => {

    const handleDeletSelectedPlayer = (player) => {


        const fillteredPlayers = selectedPlayers.filter(selectedPlayers => selectedPlayers.playerName != player.playerName)

            // console.log(fillteredPlayers)
            setSelectedPlayers(fillteredPlayers) ;
            setCoin(coin + player.price)
        
    }
    return (
        <div>
           {
            selectedPlayers.map((player, index) => {
                return <div key={index} className='flex justify-between items-center mt-4 border border-gray-500 rounded-md shadow p-3'>

                    <div className='flex'>

                        <img className='h-20 w-30 mr-6 rounded' src={player.img} alt={player.playerName} />
                        <div className=''>
                          
                             <p className='font-bold text-2xl flex justify-center items-center'><CiUser />{player.playerName}</p>
                            <p className='font-semibold text-xl'>{player.playerType}</p>
                        </div>

                    </div>
                    <button onClick={() => handleDeletSelectedPlayer(player)} className='text-red-400'>
                        <MdDelete />
                    </button>


                </div>
            })
           }
            
        </div>
    );
};

export default SelectedPlayers;