import { Route, Routes } from 'react-router-dom'
import Banner from "./pages/Banner.jsx";
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Banner/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App;