// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Added from './components/Added/Added'
import Home from './components/Home/Home'
import Wishlist from './components/Wishlist/Wishlist'
import Footer from './components/Footer/Footer'
import Detail from './components/Detail/Detail'
function App() {


  return (
    <>
    <Navbar/>


<Routes>

<Route element={<Home/>}  path="/home" />

<Route element={<Added/>}  path="/added" />
<Route element={<Wishlist/>}  path="/wishlist" />
<Route element={<Detail/>} path='/:id'/> 
</Routes>
<Footer/>
    </>
  )
}

export default App
