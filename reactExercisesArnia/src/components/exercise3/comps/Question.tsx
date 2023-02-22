const Question = (props) => {
    const { question, response, handleClick, show, index } = props

    return(
        <div className="faqList">
            <div className="questionLine">
                <p><strong>{question}</strong></p><button onClick={() => handleClick(index)}>Ver a resposta</button>
            </div>
            <div className={`responseLine ${show === index? 'block' : ''}`}>
                <p>{response}</p>
            </div>
        </div>
    )
}

export default Question