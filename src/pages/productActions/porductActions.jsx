import { createRef, useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart , AiOutlineHeart } from 'react-icons/ai'
import { MdLayers } from 'react-icons/md'
import {  Counter } from '../../components';
import p1 from '../../assets/images/p1.jpg';
import Stars from 'react-rating-stars-component';
import './productActions.scss';
import { mock as data } from './mockData';

function ProductActions(props){
    return(
        <div className="productActions">
            <div className="breadcrumb">
                <Link to='/' className='breadcrumb-item'> Bosh sahifa </Link>
                <Link to='/products' className='breadcrumb-item'>Mahsulotlar</Link>
                <Link to='/products/item' className='breadcrumb-item'>Motor uchun extiyot qism</Link>
            </div>
            <Details/>
            <a href="#parts" className="opener" data-toggle="collapse" data-target="#parts"><MdLayers/>  Kerakli qismlarini tanlash</a>
            <div className="collapse" id="parts">
                <PartDetails data={data}/>
            </div>
        </div>
    )
}

function Details(){
    return(
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
    )
}

function PartDetails({data}){

    const [coords , setCoords] = useState(data.parts)
    const [selected , setSelected] = useState([]);
    const coordsContainer = createRef();

    function handleChange(val , id){
        if(selected.indexOf(id)!== (-1)){
            let nA = [];
            setSelected(nA.concat(selected.filter(item => item !== id)))
        }else{
            let nA = selected;
            nA.push(id)
            setSelected([].concat(nA))
        }
    }

    useEffect(()=>{
        console.log(console.log(selected))
    },[selected])

    return(
        <div className="partDetails">
            <div className="detailList">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Tanlash</th>
                            <th>Rasmdagi raqami</th>
                            <th>Nomi</th>
                            <th>Narxi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coords.map((part,index)=>{
                                return(
                                    <CreateDetailsList data={part} selected={selected.indexOf(part.id) !== -1 ? true : false} tr={index+1} onChange={val => handleChange(val,part.id)} key={`${index}${index*5}${part.title}${part.num}`}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="imageContent">
                <img src={data.image.default} alt={data.title}/>
                <div className="partCoords" ref={coordsContainer}>
                    {
                        coords.map((part,index)=>{
                            return(
                                <CreateCord active={selected.indexOf(part.id)!== -1 ? true : false} onChange={ id => handleChange("",id)} key={`${index}${part.title}${index*2}`} cord={part.coords} id={part.id} num={part.num} title={part.title}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function CreateCord({cord,id,num,title ,active , onChange}){

    return(
        <div className="coord" title={title}>
            {
                cord.map((cordItem , cordIndex)=>{
                    return(
                        <Cord active={active} key={`${cordIndex}${id}`} cord={cordItem} id={id} num={num} onClick={ id => onChange(id)}/>
                    )
                })
            }
        </div>
    )
}

function Cord({cord , id , num , onClick , active}){
    return(
        <span className={`cordSpan ${active && "active"}`} style={{top : `${cord.y}px` , left : `${cord.x}px`}} onClick={()=>{
            onClick(id)
        }}>
            { num }
        </span>
    )
}

function CreateDetailsList({data,selected,tr , onChange}){
    return(
        <tr>
            <td>{tr}</td>
            <td>
                <input type="checkbox" checked={selected} onChange={ e => onChange(e.target.checked)}/>
            </td>
            <td>
                {data.num}
            </td>
            <td>
                {data.title}
            </td>
            <td>
                ${data.price}
            </td>
        </tr>
    )
}

export default ProductActions;