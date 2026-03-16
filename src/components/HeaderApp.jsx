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
                    <li>Our bread</li>
                    <li>Pastries</li>
                    <li>Our history</li>
                    <li>Contact</li>
                </ul>
            </nav>
      </header>
    )
}