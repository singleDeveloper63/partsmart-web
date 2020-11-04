import './home.scss';
import { createRef, useEffect, useState } from 'react';
import Owl from 'react-owl-carousel';
import a1 from '../../assets/images/adv1.jpg'
import a3 from '../../assets/images/adv3.jpg'
import a2 from '../../assets/images/adv2.jpg'
import { AiOutlineArrowLeft ,AiOutlineArrowRight , AiOutlineSend} from 'react-icons/ai'
import { ProductCard } from '../../components';
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import p4 from '../../assets/images/p4.jpg';
import p5 from '../../assets/images/p5.jpg';
import p6 from '../../assets/images/p6.jpg';


function Home(){

    const slider = createRef();

    return(
        <div className="home">
            <div className="related">
                <button onClick={()=>slider.current.prev(500)}> <AiOutlineArrowLeft/> </button>
                <Owl items={1} dots={false}  ref={slider} className="owl-theme slider" loop={true}  margin={10} nav>
                    <div className="item">
                        <img src={a1} alt=""/>
                    </div>
                    <div className="item">
                        <img src={a2} alt=""/>
                    </div>
                    <div className="item">
                        <img src={a3} alt=""/>
                    </div>
                </Owl>
                <button onClick={()=>slider.current.next(500)}> <AiOutlineArrowRight/> </button>
            </div>
            <BestSeller title="Yangi ehtiyot qismlar"/>
            <BestSeller title="Eng ko'p sotilgan"/>
            <Order/>
            <BestSeller title="Ko'p izlanadigan"/>
            <BestSeller title="Buyurtma asosida keltirilgan"/>
            <Subscribe/>
        </div>
    )
}


function BestSeller({title}){
    const relatedProducts = createRef()

    const data = [
        {
            image : p1 , 
            title : "Lorem consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.",
            price : "300 000"
        },
        {
            image : p2 , 
            title : "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
            price : "300 000"
        },
        {
            image : p3 , 
            title : "Lorem consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit.",
            price : "300 000"
        },
        {
            image : p4 , 
            title : "Lorem ipsum dolor sit consectetur adipisicing elit amet consectetur adipisicing elit.",
            price : "300 000"
        },
        {
            image : p5 , 
            title : "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
            price : "300 000"
        },
        {
            image : p6 , 
            title : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            price : "300 000"
        },


    ]

    return(
        <div className="relatedProducts">
            <div className="relatedProducts_head">
                <h1> {title} </h1>
                <div>
                    <button onClick={()=>relatedProducts.current.prev()}> <AiOutlineArrowLeft/> </button>
                    <button onClick={()=>relatedProducts.current.next()}> <AiOutlineArrowRight/> </button>
                </div>
            </div>
            <div className="relatedProducts_list">
                <Owl ref={relatedProducts} loop={true} items={4} responsive={{
                    0:{
                        items : 2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items : 4
                    },
                    1101 : {
                        items : 5
                    }
                }}>
                    {
                        data.map( (item,index)=>{
                            return(
                                <ProductCard data={item} key={`${index}${item.title}`}/>
                            )
                        })
                    }
                </Owl>
            </div>
        </div>
    )
}

function Subscribe(){
    return(
        <div className="subscribe">
            <h1>Yangiliklarimizdan birinchilardan xabardor bo'lishni istaysizmi ?</h1>
            <p>Unda obuna bo'ling</p>
            <div className="input-group">
                <input type="email" className="form-control" placeholder="Elektron pochta"/>
                <div className="input-group-append">
                    <button className="input-group-btn">Yozilish</button>
                </div>
            </div>
        </div>
    )
}

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


export default Home;