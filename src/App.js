import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoginForm from './Login/Login';
import SignupForm from './SignUp/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' exact element={<LoginForm/>} />
        <Route path='/signup' exact element={<SignupForm/>} />
      </Routes>
    </Router>    
    </>
  );
}

export default App;