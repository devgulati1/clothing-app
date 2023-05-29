import {  Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import DirectoryComponent from './components/directory/directory.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signIn/signIn.component';




 const Shop=()=>{
  return (
    <div>
    <h1>SHOP NOWWW</h1>
    <Outlet/>
    </div>
  )
 } 


const App=()=> {


  return (
  <Routes>
    <Route  path='/' element={<Navigation/>}>
    <Route index element={<Home/>}></Route>
    <Route path='shop' element={<Shop/>}></Route>
    <Route path='sign-in' element={<SignIn/>}></Route>

  
    </Route>
  </Routes>
   
     );
}

export default App;
