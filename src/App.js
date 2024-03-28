import './App.css';
import DashBoard from './Components/DashBoard';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import {BrowserRouter  as Router , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Router>
      <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/dashboard' element={<DashBoard/>}/>

      </Routes>
      </Router>
         
    </div>
  );
}

export default App;
