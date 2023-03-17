import {useState} from 'react'
import Header from './Header'
import '../assets/style.css'
import Footer from './Footer'
import Main from './Main'

const Ecommerce = () => {
    const [cart, setCart] = useState(0)

    /* {cart}<br/>
        {games.map(x => x.name)}
        <button onClick={() => setCart(games.map(x => x.price ))}></button> */
    return(
        <>
        <h2>Ecommerce</h2>
        <Header />
        <Main />
        <Footer/>
        </>
    )
}

export default Ecommerce