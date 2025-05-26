import './App.css';
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Smartwatch from './pages/Smartwatch'
import Cartpage from './pages/Cartpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Loginform from './pages/Loginform';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Wishlist from './pages/Wishlist';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/smartwatch" element={<Smartwatch/>}/>
        <Route path="/cartpage" element={<Cartpage/>}/>
        <Route path="/loginform" element={<Loginform/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>

        {/* <Route path="/edit" element={<Edit/>} loader={({params})=>fetch(`http://localhost:7003/updatebyid/${params.id}`)}/> */}
 <Route path="/edit/:id" element={<Edit />} />



      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
