import AliceCarousel from 'react-alice-carousel';
import { ProductCard } from '../';
import { createRef } from 'react';
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import p4 from '../../assets/images/p4.jpg';
import p5 from '../../assets/images/p5.jpg';
import p6 from '../../assets/images/p6.jpg';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from 'react-icons/ai';
import './bestseller.scss';

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

    let items = data.map( (item,index)=>(<ProductCard key={`${index}${item.title}`} data={item}/>));

    return(
        <div className="relatedProducts">
            <div className="relatedProducts_head">
                <h1> {title} </h1>
                <div>
                    <button onClick={()=>relatedProducts.current.slidePrev()}> <AiOutlineArrowLeft/> </button>
                    <button onClick={()=>relatedProducts.current.slideNext()}> <AiOutlineArrowRight/> </button>
                </div>
            </div>
            <div className="relatedProducts_list">
                <AliceCarousel ref={relatedProducts} autoPlay autoPlayInterval={3000} disableButtonsControls disableDotsControls disableSlideInfo
                items={items} infinite mouseTracking responsive={
                    !withOrder ? {
                        0:{items : 2},
                        610 : {items : 3},
                        940 : {items : 4},
                        1330 : {items : 5}
                    } : {
                        0 : {items : 2},
                        768 : { items : 2 },
                        1050 : { items : 3},
                        1300 : {items : 4}
                    }
                }/>
            </div>
        </div>
    )
}

export default BestSeller;