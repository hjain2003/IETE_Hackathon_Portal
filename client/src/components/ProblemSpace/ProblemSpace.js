import React, { useState } from 'react'
import './ProblemSpace.css';
import PsCard from './ProblemCard/PsCard';

const ProblemSpace = () => {
   
  return (
    <>
        <div className='ps_full_page'>
            <br />
        <h1 className='psHeading' align="center">Problem Statements</h1>
        <br />
        <div className='ps_card_space'>
            <div className="search">
                <input type="text" placeholder='Enter PS' className='input_search'/> &nbsp;&nbsp;&nbsp;
                <button className='search_btn'>Search</button>
            </div>
            <br />
            <PsCard psname="Harsh"/>
            <br />
            <PsCard psname="Smart Vehicle Automation"/>
        </div>
        </div>

    </>
  )
}

export default ProblemSpace
