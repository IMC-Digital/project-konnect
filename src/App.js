import React from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/nav-pages/About";
import HomeCollection from "./pages/nav-pages/HomeCollection";
import Services from "./pages/nav-pages/Services";
import SingleProduct from "./components/requiredPages/SingleProduct";
import Packages from "./pages/nav-pages/Packages";
import LocateClinic from "./pages/nav-pages/LocateClinic";
import Tests from "./pages/nav-pages/Tests";
import HealthConditions from "./pages/nav-pages/HealthConditions ";
import RadiologyServices from "./pages/nav-pages/RadiologyServices";
import PartnerWithUs from "./pages/nav-pages/PartnerWithUs";
import { CartProvider } from "react-use-cart";
import Footer from "./pages/Footer";
import Details from "./components/services/Details";
import { Account } from "./login/Account";
import { Login } from "./login/Login";
import { Register } from "./login/Register";
import FetalMedicineUnit from "./pages/nav-pages/FetalMedicineUnit";
import Cart from "./pages/Cart";

const theme = {
  colors: {
    primary: "#005BAB",
    pink: "#d12e88",
    primary90: "#00aeef90",
    secondary: "#00aeef",
    white: "#fff",
    dark: "#000F1C",
    text: "#0b141c",
    bg_light: "#f8f8f9",
  },
  fonts: {
    heading1: "2rem",
    heading2: "1.75rem",
    heading3: "1.25rem",
    heading4: "1.125rem",
    text: "1rem",
  },
};

function App() {
	const [cart , setCart] = useState([]);

	const handleClick = (item)=>{
    if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	}

	// const handleChange = (item, d) =>{
	// 	let ind = -1;
	// 	cart.forEach((data, index)=>{
	// 		if (data.id === item.id)
	// 			ind = index;
	// 	});
	// 	const tempArr = cart;
	// 	tempArr[ind].amount += d;
		
	// 	if (tempArr[ind].amount === 0)
	// 		tempArr[ind].amount = 1;
	// 	setCart([...tempArr])
	// }
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App ">
        <CartProvider>
          <Router basename="/project-konnect">
            <Header cartSize={cart.length} />
            <Routes>
              <Route path="/" element={<Home handleClick={handleClick} />} />
              <Route path="*" element={<ErrorPage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/home-collection" element={<HomeCollection />} />
              <Route path="/services" element={<Services />} />
              <Route path="/health-conditions" element={<HealthConditions />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/radiology-services" element={<RadiologyServices />}/>
              <Route path="/packages" element={<Packages handleClick={handleClick} />} />
              <Route path="/locate-clinic" element={<LocateClinic />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/fetal-medicine-unit" element={<FetalMedicineUnit />} />
              <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
