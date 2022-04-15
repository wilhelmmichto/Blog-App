import Home from "./pages/home/Home";
import {  Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const { user } = useContext(Context)

  return (
<div className="app">
   <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/register' element={user ? <Home/> :<Register/>}/>
      <Route  path='/login' element={user ? <Home/> : <Login/>}/>
      <Route  path='/write' element={user ? <Write/>  : <Register/>}/>
      <Route  path='/settings' element={user ? <Settings/> : <Register/>}/>
      <Route  path='/post/:postId' element={<Single/>}/>
      <Route path='/categories' element={<Sidebar/>}/>
    </Routes>
  </div>

  );
}

export default App;
