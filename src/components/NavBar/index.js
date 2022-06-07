import './styles.css'
import {NavLink} from "react-router-dom";
import {BsCartDash} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'

export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="mainBox">
                    <div className="greenBox">
                        <div className="logo">
                       <span>The</span><span className='logoShop'>Shop</span>
                        </div>
                        <nav className="navbar">
                            <NavLink
                                to='/'
                                className="navbar-link"
                                style={({isActive}) =>
                                    isActive ? {color: "white"} : undefined}> Home</NavLink>
                            <NavLink
                                to='/shop'
                                className="navbar-link"
                                style={({isActive}) =>
                                    isActive ? {color: "white"} : undefined}> Products</NavLink>
                            <NavLink
                                to='/details/1'
                                className="navbar-link"
                                style={({isActive}) =>
                                    isActive ? {color: "white"} : undefined}>Detail </NavLink>
                        </nav>
                        <input className='search'/><AiOutlineSearch className='iconSearch'/>
                    </div>
                    <div className="oliveBox">
                        <NavLink  to='/'><AiOutlineUser/></NavLink>
                        <NavLink to='/'><BsCartDash/></NavLink>
                        <NavLink to='/'><AiOutlineHeart/></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}