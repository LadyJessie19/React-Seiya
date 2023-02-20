import { useState } from 'react'
import array from './array'

const Exe1 = () => {

    const [phrase, setPhrase] = useState(array[0])
    
    const ramdom = () => {
        const ramdomNum = (Math.random() * array.length).toFixed(0)
        console.log(array[ramdomNum])
        return ramdomNum
    }

    return(
        <>
        <h1>This is the first exercise</h1>
        <p>{phrase}</p>
        <button onClick={()=>setPhrase(array[ramdom()])}>Next Phrase</button>
        </>
    )
}

export default Exe1