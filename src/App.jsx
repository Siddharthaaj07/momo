import Home from "./assets/Components/Pages/Home"
import About from "./assets/Components/Pages/About"
import Menu from "./assets/Components/Pages/Menu"
import Services from "./assets/Components/Pages/Services"
import AllergyAdvice from "./assets/Components/Pages/AllergyAdvice"
import Login from "./assets/Components/Auth/Login"
import SingUp from "./assets/Components/Auth/SingUp"
import Contact from "./assets/Components/Pages/Contact"
import ProductDescription from "./assets/Components/Pages/ProductDescription"
import CartPage from "./assets/Components/Pages/CartPage"
import Payment from "./assets/Components/Pages/Payment"
import Success from "./assets/Components/Pages/Success"
import Failed from "./assets/Components/Pages/Failed"
// import ProtectedRoute from "./assets/Components/Auth/ProtectedRoute"
import { Routes, Route } from "react-router-dom"

import Navigation from "./assets/Components/NavBar/Navigation"
import Profile from "./assets/Components/Pages/Profile"
import Footer from "./assets/Components/NavBar/Footer"
import { ImOpt } from "react-icons/im"
function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allergyadvice" element={<AllergyAdvice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="*" element={<Home />} />


      </Routes>
      
      <div className="mt-5">
        
          <Footer />
     
      </div>




    </div>
  )
}

export default App;
