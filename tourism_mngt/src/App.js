import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import AboutUs from './pages/aboutus';
import AdminDashboard from './AdminPages/AdminDashboard';
import AddPackages from './AdminPages/AddPackages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CityPage from './pages/cities';
import CityCards from './components/CityCards';
import AddCity from './AdminPages/AddCity';
import CityDetails from './pages/citydetails';
import UpdateCity from './AdminPages/UpdateCity';
import PassengerPage from './pages/PassengerPage';
import ForgotPassword from './pages/forgetPassword';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Bookings from './pages/Bookings';

library.add(faStar);






function App() {
  return (
    <div>
      <Routes>


        <Route path='/' element={<Home/>}/> 
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/city' element={<City/>}/>  */}
        <Route path='/packages/:id' element={<CityPage/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/add-packages' element={<AddPackages/>}/>
        <Route path='/add-city' element={<AddCity/>}/>
        <Route path='/cities/:cityId' element={<CityDetails/>}/>
        <Route path='/update-city/:cityId' element={<UpdateCity/>} />
        <Route path='/PassengerPage' element={<PassengerPage/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/bookings' element={<Bookings/>} />

      </Routes>
       <ToastContainer/> 
    </div>
  );
}

export default App;
