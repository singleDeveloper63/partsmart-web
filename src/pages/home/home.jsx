import './home.scss';
import { createRef, useEffect, useState } from 'react';
import a1 from '../../assets/images/auto1.jpg'
import a3 from '../../assets/images/auto3.jpg'
import a2 from '../../assets/images/auto2.jpg'
import { AiOutlineArrowLeft ,AiOutlineArrowRight , AiOutlineSend} from 'react-icons/ai'
import credit from '../../assets/images/credit.svg';
import delivery from '../../assets/images/delivery.svg';
import support from '../../assets/images/support.svg';
import baner1 from '../../assets/images/img1.png';
import baner2 from '../../assets/images/img2.webp';
import AliceCarousel from 'react-alice-carousel';
import { BestSeller } from '../../components';
import 'react-alice-carousel/lib/alice-carousel.css'

function Home(){

    const slider = createRef();

    return(
        <div className="home">
            <div className="related">
                <button onClick={()=>slider.current.slidePrev()}> <AiOutlineArrowLeft/> </button>
                    <AliceCarousel items={1} mouseTracking infinite autoPlay autoPlayInterval={2000}
                        disableDotsControls disableButtonsControls disableSlideInfo ref={slider}>
                        <div className="item">
                            <img src={a1} alt="autopart1"/>
                        </div>
                        <div className="item">
                            <img src={a2} alt="autopart2"/>
                        </div>
                        <div className="item">
                            <img src={a3} alt="autopart3"/>
                        </div>
                    </AliceCarousel>
                <button onClick={()=>slider.current.slideNext()}> <AiOutlineArrowRight/> </button>
            </div>
            <BestSeller title="Yangi ehtiyot qismlar"/>
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