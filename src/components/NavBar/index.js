import './styles.css'
import {NavLink} from "react-router-dom";
import {BsCartDash} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'

export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <div className="mainBox">
                    <div className="greenBox">
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
                        <input className='search'/>
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