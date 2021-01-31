import React from 'react';
import './adv.scss';
import credit from '../../assets/images/credit.svg';
import delivery from '../../assets/images/delivery.svg';
import support from '../../assets/images/support.svg';

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

export default Advantages;