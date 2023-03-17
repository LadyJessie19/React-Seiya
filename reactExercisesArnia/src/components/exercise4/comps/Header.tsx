import logo from '../assets/logo.svg'

const Header = () => {
    return(
        <div>
        <header className="header">
            <img src={logo} className="logo"/>
            <h2 className="title">Virtual Store</h2>
        </header>
        </div>
    )
}

export default Header