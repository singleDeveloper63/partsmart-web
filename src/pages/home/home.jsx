import './home.scss';
import { createRef, useEffect, useState } from 'react';
import Owl from 'react-owl-carousel';
import a1 from '../../assets/images/auto1.jpg'
import a3 from '../../assets/images/auto3.jpg'
import a2 from '../../assets/images/auto2.jpg'
import { AiOutlineArrowLeft ,AiOutlineArrowRight , AiOutlineSend} from 'react-icons/ai'
import { ProductCard } from '../../components';
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import p4 from '../../assets/images/p4.jpg';
import p5 from '../../assets/images/p5.jpg';
import p6 from '../../assets/images/p6.jpg';
import credit from '../../assets/images/credit.svg';
import delivery from '../../assets/images/delivery.svg';
import support from '../../assets/images/support.svg';
import baner1 from '../../assets/images/img1.png';
import baner2 from '../../assets/images/img2.webp';

function Home(){

    const slider = createRef();

    return(
        <div className="home">
            <div className="related">
                <button onClick={()=>slider.current.prev(500)}> <AiOutlineArrowLeft/> </button>
                <Owl items={1} dots={false}  ref={slider} className="owl-theme slider" loop={true}  margin={10} nav>
                    <div className="item">
                        <img src={a1} alt="autopart1"/>
                    </div>
                    <div className="item">
                        <img src={a2} alt="autopart2"/>
                    </div>
                    <div className="item">
                        <img src={a3} alt="autopart3"/>
                    </div>
                </Owl>
                <button onClick={()=>slider.current.next(500)}> <AiOutlineArrowRight/> </button>
            </div>
            <div className="row">
                <div className="col-12 col-md-7 col-lg-8 col-xl-9">
                    <BestSeller withOrder={true} title="Yangi ehtiyot qismlar"/>
                </div>
                <div className="col-12 col-md-5 col-lg-4 col-xl-3">
                    <div className="checking">
                        <h4>Buyurtmani tekshirish</h4>
                        <div className="checking-form">
                            <div className="form-group">
                                <label htmlFor="ordernumber">Buyurtma raqami</label>
                                <input type="text" className="form-control" id="ordernumber"/>
                            </div>
                            <button> Tekshirish </button>
                        </div>
                    </div>
                </div>
            </div>
            <BestSeller title="Eng ko'p sotilgan"/>
            <Order/>
            <BestSeller title="Ko'p izlanadigan"/>
            <div className="banner">
                <img src={baner1} alt="Would you like"/>
            </div>
            <BestSeller title="Buyurtma asosida keltirilgan"/>
            <Subscribe/>
            <div className="banner">
                <img src={baner2} alt="Would you like"/>
            </div>
            <Advantages/>
        </div>
    )
}


function BestSeller({title,withOrder}){
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
                <Owl loop dots={false} title="Avtomobil ehtiyot qismlari" ref={relatedProducts}  responsive={
                    !withOrder ? {
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
                    } : {
                        0:{
                            items : 2
                        },
                        800:{
                            items : 2
                        },
                        1101 : {
                            items : 3
                        },
                        1300 : {
                            items : 4
                        }
                    }
                }>
                    {
                        data.map( (item,index)=>{
                            return(
                                <div key={`${index}${item.title}`}>
                                    <ProductCard withOrder={withOrder} data={item}/>
                                </div>
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


function Advantages(){
    return(
        <div className="advantages">
            <h1>Bizning afzalliklarimiz</h1>
            <section>
                <img src={support} alt="Support"/>
                <div>
                    <h1>24/7 qo'llab quvvatlash tizimi</h1>
                    <p>
                        Biz mijozlarimizni bir kunda 24 soat va haftasiga 7 kun qo'llab quvvatlaymiz . Siz xohlagan savol , taklif va shikoyatlar bo'yicha bizga murojaat qilishingiz mumkun .
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h1>Onlayn to'lovlar</h1>
                    <p>
                        Xarid qilgan maxsulotingiz uchun to'lovni to'g'ridan - to'g'ri saytimiz orqali qilishingiz imkoniyati . 
                        Bizda to'lovlar 100% havfsiz , ishonchli va hech qanday foizlarsiz Click va Payme orqali amalga oshiriladi .
                    </p>
                </div>
                <img src={credit} alt=""/>
            </section>
            <section>
                <img src={delivery} alt="Delivery"/>
                <div>
                    <h1>Butun O'zbekston bo'ylab yetkazib berish</h1>
                    <p>
                        Siz O'zbekstonning qaysi xududidan bo'lishingizdan qati'y nazar saytimizdan maxsulot xarid qilishingiz mumkun .
                        Sababi bizda butun O'zbekston Respublikasi bo'ylab bepul yetkazib berish xizmati mavjud .
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;