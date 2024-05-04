import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import ProductsList from "./components/ProductsList"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Details from "./components/Details"
import { Routes , Route } from "react-router-dom"
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



function App() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Routes>
        <Route path='/' element= { <ProductsList/> }></Route>
        <Route path="/products" element= { <ProductsList/>}></Route>
        <Route path="/about" element= { <About/>}></Route>
        <Route path="/contact" element= { <Contact/>}></Route>
        <Route path='/details/:id' element= { <Details/> }></Route>
        <Route path='/cart' element= { <Cart/> }></Route>
        <Route path='/checkout' element= { <Checkout/> }></Route>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App