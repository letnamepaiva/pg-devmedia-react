import './style.css'

const Card = ({imagem,nome,categoria,descricao,preco}) =>{
    return (
        <div className='card'>
            <img src={imagem} alt={nome} className='card-imagem'/>
            <div className='card-info'>
                <h2 className='card-nome'>{nome}</h2>
                <p className='card-categoria'>{categoria}</p>
                <p className="card-descricao">{descricao}</p>
                <p className='card-preco'>R${preco}</p>
            </div>
        </div>
    );
};

export default Card;
