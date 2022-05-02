import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/CommonPages/Header/Header';
import Footer from './Pages/CommonPages/Footer/Footer';
import Home from './Pages/Home/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import Bikes from './Pages/Home/Bikes/Bikes';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/bikes' element={<Bikes></Bikes>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
