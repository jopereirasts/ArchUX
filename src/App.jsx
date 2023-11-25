import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import UX from './components/UX/UX';
import AI from './components/AI/AI';
import Garrett from './components/Garrett/Garrett';
import Navbar from './components/Navbar/Navbar';
import Heuristicas from './components/Heuristicas/Heuristicas';
import Tecnicas from './components/Tecnicas/Tecnicas';
import About from './components/About/About';


export default function App() {
 return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/ux' element={<UX />}/>
      <Route path='/ai' element={<AI />}/>
      <Route path='/garrett' element={<Garrett />}/>
      <Route path='/heuristicas' element={<Heuristicas />}/>
      <Route path='/tecnicas' element={<Tecnicas />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </BrowserRouter>
 ) 
}