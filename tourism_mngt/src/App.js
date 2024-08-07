import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import AboutUs from './pages/aboutus';
import City from './pages/cities';
import AdminDashboard from './AdminPages/AdminDashboard';
import AddPackages from './AdminPages/AddPackages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/City' element={<City/>}/>
<<<<<<< HEAD
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/AddPackages' element={<AddPackages/>}/>
=======
>>>>>>> 2a7064ec2c5d6bb1461573f9136912ca5727939f
      </Routes>
       <ToastContainer/> 
    </div>
  );
}

export default App;
