import './App.css';
import MovieDetails from './Components/MovieDetails';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';



function App() {

  return (
    <div className="App">
      <HomePage/>
      {/* <Routes>
        <Route path='/MovieDetails' element={<MovieDetails/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
