import './App.css';
import Home from './components/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import ProblemSpace from './components/ProblemSpace/ProblemSpace';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ps' element={<ProblemSpace/>}/>
      </Routes>
    </>
  );
}

export default App;
