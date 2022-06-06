import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
