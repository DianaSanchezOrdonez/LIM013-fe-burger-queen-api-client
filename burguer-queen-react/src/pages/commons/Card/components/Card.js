import '../components/Card.css';

const Card = ({status, props}) => {
    console.log('props.products', props.products);
    return(
        <div className='card'>
            <div className='card-title flex'>
                <span>N°001</span>
                <span className='chip-estado'>{status}</span>
            </div>
            <hr></hr>
            <div className='card-body'>
                <div className='row flex'>
                    <span className='product bold'>PRODUCTO</span>
                    <span className='bold'>CANTIDAD</span>
                </div>
               
                {props.products.map(product => <li className='row flex'><span className='product'> • {product.product.name}</span><span className='qty'>{product.qty}</span></li>)}
                
                <button className='btn-send'>Enviar</button>
            </div>
        </div>
    )
}

export default Card;