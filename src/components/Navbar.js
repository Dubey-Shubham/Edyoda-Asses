import React, {useState} from 'react'
import Edyoda from '../photos/EdYoda.png'
import Searchicon from '../photos/Searchicon.png'
import menu from '../photos/menu.svg'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <>
            <nav className='nav'>
                <div className='leftcont'>
                    <img style={{ height: "36.5px", margin: "2px 2px" }} src={Edyoda} alt="EDYODA" />
                    <select style={{ border: "1px solid white", width: "82px",fontWeight:"bold" }} name="cars" id="cars">
                        <option value="fer">Courses</option>
                        <option value="vgg">Maths</option>
                        <option value="hhh">English</option>

                    </select>
                    <select style={{ border: "1px solid white", width: "91px", margin: "0px 3px",fontWeight:"bold" }} name="cars" id="cars">
                        <option value="fer">Programs</option>
                        <option value="vgg">Learning</option>
                        <option value="hhh">Skills</option>

                    </select>
                </div>
                <div className='rightcont'>
                    <img style={{ height: "20px", }} src={Searchicon} alt="SEARCH" />
                    <p style={{ color: "black", margin: "1px 2px", fontSize: "13px", fontWeight: "bold" }}>Log in</p>
                    <button className='but'>JOIN NOW</button>

                </div>
            </nav>
            {/* for small devices */}
            <nav className='navba'>
                <img style={{ height: "36px", margin: "2px 20px" }} src={Edyoda} alt="EDYODA" />
                <div className='menu' onClick={ ()=>{ setMenuOpen (!menuOpen)}}>
                    <img style={{ height: "1.5rem" }} src={menu} alt="Hamburger" />
                </div>
                <div className={menuOpen? "left" : "left yes"}>
                    <select style={{ border: "1px solid white", width: "135px", margin:"4px 4px",fontWeight:"bold" }} name="cars" id="cars">
                        <option value="fer" >Courses</option>
                        <option value="vgg">Maths</option>
                        <option value="hhh">English</option>

                    </select>
                    <select style={{ border: "1px solid white", width: "135px", margin: "4px 4px",fontWeight:"bold" }} name="cars" id="cars">
                        <option value="fer">Programs</option>
                        <option value="vgg">Learning</option>
                        <option value="hhh">Skills</option>

                    </select>
                    <img style={{ height: "20px",marginLeft:"65px" }} src={Searchicon} alt="SEARCH" />
                    <p style={{ color: "black", margin: "1px 52px", fontSize: "13px", fontWeight: "bold" }}>Log in</p>
                    <button className='buton'>JOIN NOW</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar