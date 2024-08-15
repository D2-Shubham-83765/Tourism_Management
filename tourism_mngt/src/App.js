import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import AboutUs from './pages/aboutus';
import AdminDashboard from './AdminPages/AdminDashboard';
import AddPackages from './AdminPages/AddPackages';
import PackagesList from './AdminPages/PackagesList';
import 'react-toastify/dist/ReactToastify.css';
import CityPage from './pages/cities';
import CityCards from './components/CityCards';
import AddCity from './AdminPages/AddCity';
import CityDetails from './pages/citydetails';
import UpdateCity from './AdminPages/UpdateCity';
import PassengerPage from './pages/PassengerPage';
import ForgotPassword from './pages/forgetPassword';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);






function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/city' element={<City/>}/>  */}
        <Route path='/packages/:id' element={<CityPage/>}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route path='/update-packages' element={<PackagesList/>}/>
        <Route path='/add-packages' element={<AddPackages/>}/>
        <Route path='/add-city' element={<AddCity/>}/>
        <Route path='/cities/:cityId' element={<CityDetails/>}/>
        <Route path='/update-city/:cityId' element={<UpdateCity/>} />
        <Route path='/PassengerPage' element={<PassengerPage/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
      <Footer/>
       <ToastContainer/> 
    </div>
  );
}

export default App;
