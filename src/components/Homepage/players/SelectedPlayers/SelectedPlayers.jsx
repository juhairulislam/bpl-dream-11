import React from 'react';
import { MdDelete } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,setCoin, coin}) => {

    const handleDeletSelectedPlayer = (player) => {


        const fillteredPlayers = selectedPlayers.filter(selectedPlayers => selectedPlayers.playerName != player.playerName)

            setSelectedPlayers(fillteredPlayers) ;
            setCoin(coin + player.price)
        
    }
    return (
        <div>
           { selectedPlayers.length === 0 ? <div className='p-30 text-center bg-gray-50 rounded-xl mt-2'>
            <p className='text-[15px] md:text-2xl text-gray-600 font-semibold '>No player selected yet</p>
            <p className='text-[12px] md:text-xl'>Go to available tab to select players</p>

           </div> :
            selectedPlayers.map((player, index) => {
                return <div key={index} className='flex justify-between items-center mt-4 border border-gray-500 rounded-md shadow p-3'>

                    <div className='flex'>

                        <img className='h-20 w-30 mr-6 rounded-md' src={player.img} alt={player.playerName} />
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