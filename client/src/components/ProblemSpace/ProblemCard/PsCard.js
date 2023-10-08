import React, { useState } from 'react'
import './PsCard.css';

const PsCard = ({psname}) => {

    const [isAdd,setIsAdd] = useState(false);

    const closeBox =()=>{
        setIsAdd(false);
    }
    const openBox=()=>{
        setIsAdd(true);
    }

  return (
    <>
       {isAdd && (
                <div className='box'>
                    <h2 align="center">Enter Details : </h2><br />
                     <label htmlFor="">Team Name</label>
                     <input type="text" placeholder='Dhanka team name' />
                     <br />
                     <label htmlFor="">Team Members</label>
                     <textarea id="" cols="2" rows="0"></textarea>
                     <br />
                     <span><button className='submit_btn'>Submit</button> &nbsp;&nbsp;<button className='cancel_btn' onClick={closeBox}>Cancel</button></span>
                </div>
            )}
    <div className='card_container'>
      <span>{psname}</span>
      <span>Teams Applied : </span>
      <button className='apply_btn' onClick={openBox}>Apply</button>
    </div>
    </>
  )
}

export default PsCard
