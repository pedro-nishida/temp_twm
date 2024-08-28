import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar'
import Professores from './components/Professores'
import Alunos from './components/Alunos'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alunos' element={<Alunos/>}/>
        <Route path='/professores' element={<Professores/>}/>
      </Routes>
    </>
  );
}

export default App;
