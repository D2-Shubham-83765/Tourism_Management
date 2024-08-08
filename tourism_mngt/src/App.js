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
import CityPage from './pages/cities';


function App() {
  return (
    <div>
      <Routes>


        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Register' element={<Register/>}/>
<<<<<<< HEAD
        <Route path='/packages/:packageId' element={<CityPage/>}/>
        
 
      
=======
        <Route path='/City' element={<City/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/AddPackages' element={<AddPackages/>}/>
>>>>>>> 73419441388e464beba1946ebb20b9f6f9cb0c75
      </Routes>
       <ToastContainer/> 
    </div>
  );
}

export default App;
