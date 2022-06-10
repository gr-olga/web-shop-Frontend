import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ProductList from "./pages/ProductList/ProductList";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import AddForm from "./components/AddForm/AddForm";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signup/Signup";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  console.log(token);

  return (
    <div className="App">
      <NavBar />
      <p>{token}</p>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<ProductList />} />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/add-review/:productId" element={<AddForm />} />
      </Routes>
      <Footer />

      {/* <Login setToken={setToken} token={token} /> */}
    </div>
  );
}

export default App;
