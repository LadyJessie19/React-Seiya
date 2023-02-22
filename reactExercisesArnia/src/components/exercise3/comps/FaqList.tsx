import React from "react";
import Question from "./Question";

const FaqList = (props) => {
    const { faqList, show, handleClick } = props

    return(
        <>
            <h2>Perguntas Mais Frequentes</h2>
            {faqList.map((item, index) => <Question key={item.id} question={item.question} response={item.answer} show={show} handleClick={handleClick} index={index}/>)}
        </>
    )
}

export default FaqList