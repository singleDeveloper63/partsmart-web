import React from 'react';
import './productList.scss';
import { v4 } from 'uuid';
import { ProductCard } from '../../components';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    return(
        <div className="productList">
            <h1 className="productList-title"> Oxirgi qo'shilgan extiyot qismlar </h1>
            <div className="productList-items">
                {
                    products.map((product)=>{
                        const { price , image , title , id } = product;
                        const data = { image : image , title : title.uz , price : price , id : id };

                        return(
                            <ProductCard key={v4()} data={data}/>
                        )
                    })
                }
            </div>
            <Link to="/products" className="seeAll"> Barchasini ko'rish </Link>
        </div>
    )
}

export default ProductList;