import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navmenu from './components/Navmenu/Navmenu';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Navmenu></Navmenu>
      {/* <Home></Home> */}     

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/about' element={<Home></Home>}></Route> */}
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
