import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import UX from './components/UX/UX';
import AI from './components/AI/AI';
import Garrett from './components/Garrett/Garrett';

export default function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/ux' element={<UX />}/>
      <Route path='/ai' element={<AI />}/>
      <Route path='/garrett' element={<Garrett />}/>
    </Routes>
  </BrowserRouter>
 ) 
}