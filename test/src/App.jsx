import { Route, Routes } from 'react-router-dom';
import Register from './page/register';
import Login from './page/login';
import Loginn from './page/loginn';
export default function App(){
return(
<div className="App">
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Loginn" element={<Loginn />} />
  </Routes>
</div>
)}