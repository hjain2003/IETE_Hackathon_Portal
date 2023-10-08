import React, { useState } from 'react'
import './PsCard.css';

const PsCard = ({psname,pscount,psId}) => {

    const [isAdd,setIsAdd] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState('');
    const [procc,setProcc] = useState('Submit');

    const closeBox =()=>{
        setIsAdd(false);
    }
    const openBox=()=>{
        setIsAdd(true);
    }

    const handleSubmit = async () => {
      setProcc('Processing...');
      try {
        // Send a POST request to your backend to create a team
        const response = await fetch(`http://localhost:5000/hack/team/${psId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            teamName,
            teamMembers,
          }),
        });
  
        if (response.status===400) {
          window.alert("Empty fields/Already registered");
          throw new Error('Failed to create team');
        }
        setProcc('Submit');
        // Close the input box and handle success (e.g., display a message)
        closeBox();
        window.alert('Registration successfull! Please Reload the page');
        // You can also update the UI to reflect the increased pscount
  
      } catch (error) {
        setProcc('Submit');
        console.error('Error creating team:', error);
        // Handle the error (e.g., display an error message)
      }
    };
  return (
    <>
       {isAdd && (
                <div className='box'>
                    <h2 align="center">Enter Details : </h2><br />
                     <label htmlFor="">Team Name</label>
                     <input type="text" placeholder='Dhanka team name' onChange={(e) => setTeamName(e.target.value)} />
                     <br />
                     <label htmlFor="">Team Members</label>
                     <textarea id="" cols="2" rows="0" onChange={(e) => setTeamMembers(e.target.value)}></textarea>
                     <br />
                     <span><button className='submit_btn' onClick={handleSubmit}>{procc}</button> &nbsp;&nbsp;<button className='cancel_btn' onClick={closeBox}>Cancel</button></span>
                </div>
            )}
    <div className='card_container'>
      <span><b>{psname}</b></span>
      <span><b>Teams Applied : </b>{pscount} </span>
      <button className='apply_btn' onClick={openBox}>Apply</button>
    </div>
    </>
  )
}

export default PsCard
