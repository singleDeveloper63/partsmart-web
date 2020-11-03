import './productCard.scss';
import { VscHeart } from 'react-icons/vsc';
import {  AiOutlineShoppingCart ,AiOutlineEye} from 'react-icons/ai';

function ProductCard({data}){
    return(
        <div className="product_card">
            <img src={data.image} alt=""/>
            <div className="product_card_body">
                <p> {data.title} </p>
                <h4> {data.price}UZS </h4>
                <div className="actions">
                    <button> <AiOutlineShoppingCart/> <span className="d-none d-md-inline">Savatchaga</span></button>
                    <button> <AiOutlineEye/> <span className="d-none d-md-inline">Ko'rish</span></button>
                </div>
            </div>
            <button className="product_card_wish"> <VscHeart/> </button>
        </div>
    )
}

export default ProductCard;