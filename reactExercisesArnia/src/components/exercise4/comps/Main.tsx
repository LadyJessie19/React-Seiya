import { catalog } from '../assets/data'

const converted = (number) => {
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

const Main = () => {
    return(
        <main>
            <div className="box-title">
                <h1>Products</h1>
                <div className="box">{catalog.length}</div>
            </div>
            <div className="grid">
                {catalog.map((game) => 
                (<div className='product' key={`game-${game.id}`}>
                    <div className="image">
                        <img src={game.img} alt={game.name} />
                    </div>
                    <div className="info">
                        <div className='checkbox'>&nbsp;</div>
                        <div className='price'>Value: R${converted(game.price)}</div>
                    </div>
                </div>))}
            </div>
            <div className="button-footer">
                <button className="btn">Ir para o carrinho</button>
            </div>
            
        </main>
    )
}

export default Main