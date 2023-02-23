import {useState} from 'react'
import games from '../assets/data'
import Header from './Header'
import '../assets/style.css'

const Ecommerce = () => {
    const [cart, setCart] = useState(0)

    /* {cart}<br/>
        {games.map(x => x.name)}
        <button onClick={() => setCart(games.map(x => x.price ))}></button> */
    return(
        <>
        <h2>Ecommerce</h2>
        <Header />
        </>
    )
}

export default Ecommerce