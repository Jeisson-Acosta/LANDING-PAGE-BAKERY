import { BaguetteIcon } from "./Icons.jsx"
import '../styles/HeaderApp.css'
export function HeaderApp() {
    return (
        <header className='header-app'>
            <div className="logo-container">
                <div className='icon-container'>
                    <BaguetteIcon />
                </div>
                <h2>Bakery</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#our-bread">Our bread</a></li>
                    <li><a href="#pastries">Pastries</a></li>
                    <li><a href="#our-philosophy">Our philosophy</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
      </header>
    )
}