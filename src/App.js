import logo from './logo.svg';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Navbar/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Purchase from './Components/Home/Purchase';
import RequireAuth from './Components/Login/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';
import MyOrder from './Components/Dashboard/MyOrder';
import CancelModal from './Components/Dashboard/CancelModal';
import Payment from './Components/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
        <Route index element={<MyProfile/>}></Route>
        <Route path='review' element={<AddReview/>}></Route>
        <Route path='order' element={<MyOrder>
        </MyOrder>}></Route>
        <Route path='modal' element={<CancelModal/>}></Route>

        </Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
