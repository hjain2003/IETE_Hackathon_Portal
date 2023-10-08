import React, { useEffect, useState } from 'react';
import './ProblemSpace.css';
import PsCard from './ProblemCard/PsCard';

const ProblemSpace = () => {
  const [problemStatements, setProblemStatements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch problem statements from your backend API
        const response = await fetch('https://iete-hack-back.vercel.app/hack/problems', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setProblemStatements(data); // Set the fetched data in state
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching problem statements:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter problemStatements based on the searchTerm
  const filteredProblemStatements = problemStatements.filter((problem) =>
    problem.psname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='ps_full_page'>
        <br />
        <h1 className='psHeading' align="center">Problem Statements</h1>
        <br />
        <div className='ps_card_space'>
          <div className="search">
            <input
              type="text"
              placeholder='Search PS'
              className='input_search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            &nbsp;&nbsp;&nbsp;
            {/* <button className='search_btn'>Search</button> */}
          </div>
          <br />
          {isLoading ? ( // Conditional rendering based on isLoading
            <div className="loading-spinner">Loading...</div>
          ) : (
            filteredProblemStatements.map((problem, index) => (
              <div key={index}>
                <PsCard psId={problem._id} psname={problem.psname} pscount={problem.pscount} />
                <br />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProblemSpace;
