import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navmenu from './components/Navmenu/Navmenu';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Navmenu></Navmenu>
      {/* <Home></Home> */}     

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Aboutme></Aboutme>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
