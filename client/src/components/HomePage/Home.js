import React from 'react';
import { IoRocket } from 'react-icons/io5'; // Import the rocket icon
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToPs = () => {
    navigate('/ps');
  };

  return (
    <>
      <div className="full_page_home">
        <div className="home_div">
          <span className='heading_home'>Intra IETE Hackathon</span>
        </div>
        <br />
        <button className='arrow' onClick={navigateToPs}>
          <IoRocket className='iconrocket' />
        </button>
      </div>
    </>
  );
};

export default Home;
