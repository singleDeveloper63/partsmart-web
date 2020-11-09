import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart , AiOutlineHeart } from 'react-icons/ai'
import { MdLayers } from 'react-icons/md'
import {  Counter } from '../../components';
import p1 from '../../assets/images/p1.jpg';
import Stars from 'react-rating-stars-component';
import './productActions.scss';


function ProductActions(props){
    return(
        <div className="productActions">
            <div className="breadcrumb">
                <Link to='/' className='breadcrumb-item'> Bosh sahifa </Link>
                <Link to='/products' className='breadcrumb-item'>Mahsulotlar</Link>
                <Link to='/products/item' className='breadcrumb-item'>Motor uchun extiyot qism</Link>
            </div>

            <div className="productActions_details">
                <div className="row">
                    <div className="p-0 col-12 col-md-6 col-lg-5 col-xl-4">
                        <img src={p1} alt="Product"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 col-xl-8 p-0 pl-md-4">
                        <div className="productActions_actions my-5 my-md-0">
                            <h1 className="title">Bu yerda maxsulotning to'liq nomi bo'ladi</h1>
                            <h4>Bu yerda maxsulot kategoriyasi bo'ladi</h4>
                            <div className="price-rating">
                                <h4>310,000USZ / <small>350,000</small></h4>
                                <Stars color="#aaa" classNames="no-outline" value={4} activeColor="rgb(248, 190, 0)" size={25}/>
                            </div>
                            <Counter initial={1} onChange={ count => console.log(count)}/> <br/>
                            <div className="actions_btn">
                                <button>Sotib olish</button>
                                <button> <AiOutlineShoppingCart/> </button>
                                <button> <AiOutlineHeart/> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#parts" className="opener" data-toggle="collapse" data-target="#parts"><MdLayers/>  Kerakli qismlarini tanlash</a>
            <div className="collapse" id="parts">
                <div>
                    <div className="part-details">
                        <ul>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, asperiores. Optio debitis voluptas nisi laborum exercitationem! Repellendus repellat quibusdam in quam sunt tenetur pariatur vitae ab minima recusandae? Nam, id!</li>
                        </ul>
                    </div>
                    <img src={p1} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default ProductActions;