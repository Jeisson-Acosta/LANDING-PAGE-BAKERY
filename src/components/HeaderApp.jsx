import { useState } from "react"
import { BaguetteIcon } from "./Icons.jsx"
import '../styles/HeaderApp.css'

export function HeaderApp() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className='header-app'>
            <div className="logo-container">
                <div className='icon-container'>
                    <BaguetteIcon />
                </div>
                <h2>Bakery</h2>
            </div>
            <button
                className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={menuOpen ? 'nav-open' : ''}>
                <ul>
                    <li><a href="#our-bread" onClick={closeMenu}>Our bread</a></li>
                    <li><a href="#pastries" onClick={closeMenu}>Pastries</a></li>
                    <li><a href="#our-philosophy" onClick={closeMenu}>Our philosophy</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
            {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </header>
    )
}