import iconMenu from '../assets/icon-menu.png'
import '../styles/Menu.css'
import { Link } from 'react-router-dom'
//import { useState } from 'react'

function Menu() {
    //const [ isOpen, setIsOpen ] = useState(false)

    return (
        <nav className="nav">
            <img src={iconMenu} alt="Ouvrir le menu" className="iconMenu" />

            <ul className="menu">
                <li><Link to="/">À propos</Link></li>    
                <li><Link to="/">Compétences</Link></li>   
                <li><Link to="/">Projets</Link></li>   
                <li><Link to="/">Contacts</Link></li>   
            </ul>

            <div className="about-anim">À propos</div>
            <div className="skills-anim">Compétences</div>
            <div className="projects-anim">Projets</div>
            <div className="contact-anim">Contact</div>
        </nav>
        
    )
}

export default Menu