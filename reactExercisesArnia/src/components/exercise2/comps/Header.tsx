import '../assets/style.css'
import logo from '../assets/logo.svg'

const Header = () => {
    return(
    <div className="header">
        <div className="logoArnia">
            <img src={logo} alt="Logo Arnia" />
        </div>
        <div className="title">
            <h1>MOVIES</h1>
        </div>
    </div>
    )
}

export default Header