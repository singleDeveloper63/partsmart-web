import React , { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './additional.scss';
import { v4 } from 'uuid';
import { Counter } from '../../../components';
import { GiShoppingCart } from 'react-icons/gi';

function Additional(){

    const dispatch = useDispatch();
    const { data } = useSelector(({ui})=>(ui.currentProd));
    console.log(data);

    return(
        <div className="additional">
            <h1>Qismlardan tanlash : </h1>
            <p>
                O'zingizga kerakli qismlarni tanlash uchun rasmdagi sonlar ustiga bosing yoki jadvaldan
                kerakli extiyot qismini belgilang..
            </p>
            <div className="additional-parts">
                <div className="selects">
                    <Table data={data.product}/>
                </div>
                <div className="image">
                    <div className="img-container">
                        <img src={`http://app.partsmart.uz/files/${data.product.image}`} alt=""/>
                        <Coords coordList={data.product.parts}/>
                    </div>
                </div>
            </div>
            <div className="additional-actions">
                <button> Savatchaga  <GiShoppingCart/> </button>
            </div>
        </div>
    )
}

function Coords({coordList}){
    return(
        <>
            {
                coordList.map((part) => {
                    return(
                        <>
                            {
                                part.coord.map((subCoords)=>(<span key={v4()} style={{left : `${subCoords.x-7}px` , top : `${subCoords.y-7}px` }} key={v4()}> {part.value} </span>))
                            }
                        </>
                    )
                })
            }
        </>
    )
}

function Table({data}){
    return(
        <div className="additionaldata">
            <div className="additionaldata-header">
                <div></div>
                <div> Rasmdagi raqami </div>
                <div> Nomi </div>
                <div> Partiya raqami </div>
                <div> Komplektdagi soni </div>
                <div> Hozirda mavjud </div>
                <div> Narxi </div>
                <div> Savatchaga </div>
            </div>
            {
                data.parts.map((part)=>{
                    const { count , part_number , price , qt , title } = part.info;
                    return(
                        <div key={v4()}>
                            <div> <input type="checkbox"/> </div>
                            <div> { part.value } </div>
                            <div> { title.uz } </div>
                            <div> { part_number } </div>
                            <div> { qt } </div>
                            <div> { count } </div>
                            <div> { price } </div>
                            <div> <Counter onChange={val => console.log()} initial={1}/> </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Additional;