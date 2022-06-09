import {Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import AddForm from "./components/AddForm/AddForm";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/details/:id' element={<DetailsPage/>}/>
                <Route path='/shop' element={<ProductList/>}/>
                <Route path='/add-review' element={<AddForm/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
