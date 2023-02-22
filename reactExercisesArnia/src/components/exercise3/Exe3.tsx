import { useState } from 'react'
import './assets/style.css'
import FaqList from './comps/FaqList'
import faqList from './assets/faq'


const Exe3 = () => {

    const [show, setShow] = useState(undefined)

    const handleClick = (index) => {
        return setShow(show === index ? undefined : index) 
    }

    return(
        <>
        <h1>This is the third exercise</h1>
        <FaqList faqList={faqList} show={show} handleClick={handleClick}/>
        </>
    )
}

export default Exe3