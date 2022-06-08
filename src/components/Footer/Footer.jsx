import "./styles.css"
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";

export default function Footer() {
    return (
        <div className="footer">
            <div className="signUp">
                <span className="the">The</span><span className="shop">Shop</span>
                <input className="input"/>
                <button className="signUpBtn">Sign Up</button>
            </div>
            <div className="category">
                <h3 className="title">Categories</h3>
                <nav className="navBar">
                    <li className="navElement">Electronics</li>
                    <li className="navElement">Jewelery</li>
                    <li className="navElement">Men's Clothing</li>
                </nav>
            </div>
            <div className="category">
                <h3 className="title">My account</h3>
                <nav className="navBar">
                    <li className="navElement">My account</li>
                    <li className="navElement">Discount</li>
                    <li className="navElement">Returns</li>
                    <li className="navElement">Orders History</li>
                    <li className="navElement">Order Tracking</li>
                </nav>
            </div>
            <div className="shareBox">
                <h3>Follow us</h3>
                <div className="share-buttons">
                    <BsFacebook className="share"/>
                    <BsInstagram className="share"/>
                    <AiFillTwitterCircle className="share"/>
                </div>
            </div>
        </div>
    )
}