import React from 'react';
import './order.scss';
import { AiOutlineSend } from 'react-icons/ai';

function Order(){
    return(
        <div className="order">
            <h1>Izlagan tovaringizni topa olmadingizmi?</h1>
            <p>Unda hoziroq buyurtma qiling</p>
            <div className="order-give">
                <input type="text" className="form-control" placeholder="Tovar nomi"/>
                <input type="tel" placeholder="Telefon raqamingiz" className="form-control"/>
                <button><AiOutlineSend/> <span className="d-inline d-md-none">Buyurtma berish</span></button>
            </div>
        </div>
    )
}

export default Order;