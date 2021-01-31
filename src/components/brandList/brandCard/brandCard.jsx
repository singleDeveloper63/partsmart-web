import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './brandCard.scss';
import { AiOutlineArrowRight } from 'react-icons/ai'

function BrandCard({data}){
    return(
        <div className="brandCard">
            <p>
                {data.name}
            </p>
            <img src={data.image} alt=""/>
        </div>
    )
}

export default BrandCard;