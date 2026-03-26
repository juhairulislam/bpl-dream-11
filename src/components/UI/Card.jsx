import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


const Card = ({player,setCoin,coin, setSelectedPlayers, selectedPlayers}) => {

    const [selected, setSelected] = useState(false) ;

    const handleChoosePlayer = ()=>{

        let newCoin = coin - player.price ;
        if(newCoin >= 0 ){
            setCoin(newCoin)
            toast(`${player.playerName} Choose Success`); 
        } else{
           alert ('Not enough Money') ;
           return
        }
        setSelected(true);
        setCoin(coin - player.price) ;
        setSelectedPlayers([...selectedPlayers, player])
    }
    return (
         <div className="card bg-base-100 shadow-md p-5">
            <figure>
                <img className='h-60 w-90 md:h-70'
                    src={player.img}
                    alt="Player Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>

                <div className='flex items-center gap-2'>
                    <FaFlag />
                    <p>{player.playerCountry}</p>

                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className="divider"></div>

                <h2 className='font-bold'>Rating: {player.rating}</h2>

                <div className='flex justify-between gap-10 font-bold'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Price: {player.price}</p>
                    <button disabled={selected? true: false} onClick={handleChoosePlayer} className='btn'>{ selected=== true? "Selected" : "Choose Players"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;