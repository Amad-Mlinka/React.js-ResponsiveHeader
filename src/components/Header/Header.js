import React, {useState} from 'react'
import './Header.css'

export const Header = () => {
    const[hamburger, setHamburger] = useState(false)
    const onClickHamburger = () => {
        setHamburger(!hamburger);
    }
    const onClick = () => {
        setHamburger(!hamburger);
    }
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <a href="#" className="nav-logo">Test</a>
                    <ul className ={`nav-menu ${hamburger && "active"}`}>
                        <li className="nav-item" onClick={onClick}>
                            <a href="#" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item" onClick={onClick}>
                            <a href="#" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item" onClick={onClick}>
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item" onClick={onClick}>
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className={`hamburger ${hamburger && "active"}`} onClick={onClickHamburger}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div>
            

        </header>
    )
}
