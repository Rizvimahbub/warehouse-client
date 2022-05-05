import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/CommonPages/Header/Header';
import Footer from './Pages/CommonPages/Footer/Footer';
import Home from './Pages/Home/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import Bikes from './Pages/Home/Bikes/Bikes';
import Services from './Pages/Home/Services/Services';
import Quote from './Pages/Home/Quote/Quote';
import Login from './Pages/Shared/Login/Login';
import Registration from './Pages/Shared/Registration/Registration';
import GoogleSignIn from './Pages/Shared/GoogleSignIn/GoogleSignIn';
import BikeInfo from './Pages/Home/BikeInfo/BikeInfo';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Form from './Pages/Form/Form';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/bikes' element={<Bikes></Bikes>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/quote' element={<Quote></Quote>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/googleSignIn' element={<GoogleSignIn></GoogleSignIn>}></Route>
        <Route path='/bike/:id' element={<BikeInfo></BikeInfo>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
