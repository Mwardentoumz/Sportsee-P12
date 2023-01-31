import './header.css'
import logo from '../../assets/logo.png'

export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo-sportsee" border="0" />
            </div>
            <nav className='menu'>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </div>
    )
}