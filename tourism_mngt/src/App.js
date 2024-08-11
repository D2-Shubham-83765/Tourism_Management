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


function App() {
  return (
    <div>
      <Routes>


        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/city' element={<City/>}/>  */}
        <Route path='/packages/:id' element={<CityPage/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/AddPackages' element={<AddPackages/>}/>
      </Routes>
       <ToastContainer/> 
    </div>
  );
}

export default App;
