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
import Uploadwomen from './pages/Uploadwomen';
import Updatewomen from './pages/Updatewomen';
import Editwomen from './pages/Editwomen';
import Uploadsmart from './pages/Uploadsmart';
import Updatesmart from './pages/Updatesmart';
import Editsmart from './pages/Editsmart';
import Myupload from './pages/Myupload';
import LoginAuth from './component/LoginAuth';
import Register from './component/Register';
import Fetchfile from './pages/Singlecrud';

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
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/uploadwomen" element={<Uploadwomen/>}/>
        <Route path="/updatewomen" element={<Updatewomen/>}/>
        <Route path="/editwomen/:id" element={<Editwomen />} />
        <Route path="/uploadsmart" element={<Uploadsmart/>}/>
        <Route path="/updatesmart" element={<Updatesmart/>}/>
        <Route path="/editsmart/:id" element={<Editsmart/>} />
        <Route path="/myupload" element={<Myupload/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<LoginAuth/>}/>
        <Route path='/singlecrud' element={<Fetchfile/>}/>
       
        {/* <Route path="/edit" element={<Edit/>} loader={({params})=>fetch(`http://localhost:7003/updatebyid/${params.id}`)}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
