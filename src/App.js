import {Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
          <NavBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/details/:id' element={<DetailsPage/>}/>
                    <Route path='/shop' element={<ProductList/>}/>
                </Routes>

        </div>
    );
}

export default App;
