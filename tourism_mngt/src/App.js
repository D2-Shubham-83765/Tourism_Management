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
        <Route path='/add-packages' element={<AddPackages/>}/>
        <Route path='/add-city' element={<AddCity/>}/>
        <Route path='/cities/:cityId' element={<CityDetails/>}/>
        <Route path='/update-city/:cityId' element={<UpdateCity/>} />
      </Routes>
       <ToastContainer/> 
    </div>
  );
}

export default App;
