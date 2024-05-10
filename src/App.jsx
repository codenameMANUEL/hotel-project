import { Route, Routes } from 'react-router-dom'
import Banner from "./pages/Banner.jsx";
import Register from './pages/auth/Register.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Banner/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
  )
}

export default App;