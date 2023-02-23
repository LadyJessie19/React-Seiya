import logo from '../assets/logo.svg'

const Header = () => {
    return(
        <div>
        <header className="header">
            <img src={logo} className="logo"/>
            <div className="title">Loja Virtual</div>
        </header>
        </div>
    )
}

export default Header