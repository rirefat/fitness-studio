import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navmenu from './components/Navmenu/Navmenu';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navmenu></Navmenu>
      {/* <Home></Home> */}     

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<Aboutme></Aboutme>}></Route>
        <Route path='/gallery' element={<PhotoGallery></PhotoGallery>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:name' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/payment-confirm' element={
          <RequireAuth>
            <Confirmation></Confirmation>
          </RequireAuth>
        }></Route>
        <Route path='/profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
