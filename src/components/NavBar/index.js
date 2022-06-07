import './styles.css'
import {NavLink} from "react-router-dom";

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
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </>
    )
}