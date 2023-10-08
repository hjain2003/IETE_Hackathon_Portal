import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();

    const navigateToPs=()=>{
        navigate('/ps');
    }
  return (
    <>
        <div className="full_page_home">
            <div className="home_div">
            <span className='heading_home'>Intra IETE Hackathon</span>
            </div>
            <br />
            <button className='arrow' onClick={navigateToPs}><FaArrowRight className='iconarrow'/></button>
        </div>
    </>
  )
}

export default Home
