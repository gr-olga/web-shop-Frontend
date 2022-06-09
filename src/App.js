import {Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import {useState} from "react";

function App() {
//Hello
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/details/:id' element={<DetailsPage/>}/>
                <Route path='/shop' element={<ProductList/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
