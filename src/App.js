import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Profile from './Pages/Dashboard/Profile/Profile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';
import Services from './Pages/Services/Services';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/purchase" element={<Purchase></Purchase>} />

        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/addProduct" element={<AddProduct></AddProduct>} />
        <Route path="/manageAllOder" element={<ManageAllOrders></ManageAllOrders>} />
        <Route path="/makeAdmin" element={<MakeAdmin></MakeAdmin>} />
        <Route path="/manageProduct" element={<ManageProducts></ManageProducts>} />
        <Route path="/profile" element={<Profile></ Profile>} />

        <Route path="login" element={<Login></Login>} />
        <Route path="sign" element={<Register></Register>} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
