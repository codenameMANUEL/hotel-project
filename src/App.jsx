import { Route, Routes } from 'react-router-dom'
import FrontPage from "./pages/Homepage/FrontPage.jsx";
import Register from './pages/AuthForm/Register.jsx';
import Login from './pages/AuthForm/Login.jsx';
import BookingFooter from './pages/Homepage/BookinFooter.jsx';
import UserProfile from './pages/UserAccount/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/booking" element={<BookingFooter/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
    </Routes>
  )
}

export default App;