import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoginForm from './Login/Login';
import SignupForm from './SignUp/SignUp';
import ArtForm from './Artist/art';
import BookEventForm from './Artist/bookevent';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' exact element={<LoginForm/>} />
        <Route path='/signup' exact element={<SignupForm/>} />
        <Route path='/art' exact element={<ArtForm/>} />
        <Route path='/bookevent' exact element={<BookEventForm/>} />
      </Routes>
    </Router>    
    </>
  );
}

export default App;