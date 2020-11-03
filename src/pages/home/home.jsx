import './home.scss';
import { createRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import a1 from '../../assets/images/adv1.jpg'
import a3 from '../../assets/images/adv3.jpg'
import a2 from '../../assets/images/adv2.jpg'
import { AiOutlineArrowLeft ,AiOutlineArrowRight} from 'react-icons/ai'
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
                <button onClick={()=>slider.current.slickPrev()}> <AiOutlineArrowLeft/> </button>
                <Slider initialSlide={0} ref={slider}  slidesToShow={1} slidesToScroll={1} className="slider">
                    <div className="item">
                        <img src={a1} alt=""/>
                    </div>
                    <div className="item">
                        <img src={a2} alt=""/>
                    </div>
                    <div className="item">
                        <img src={a3} alt=""/>
                    </div>
                </Slider>
                <button onClick={()=>slider.current.slickNext()}> <AiOutlineArrowRight/> </button>
            </div>
            <Related/>
        </div>
    )
}


function Related(){

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
                <h1>Yangi ehtiyot qismlari</h1>
                <div>
                    <button onClick={()=>relatedProducts.current.slickPrev()}> <AiOutlineArrowLeft/> </button>
                    <button onClick={()=>relatedProducts.current.slickNext()}> <AiOutlineArrowRight/> </button>
                </div>
            </div>
            <div className="relatedProducts_list">
                <Slider infinite ref={relatedProducts} slidesToShow={4} autoplay autoplaySpeed={3000} slidesToScroll={1} responsive={
                    [
                        {
                            breakpoint: 1024,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              dots: true
                            }
                          },
                          {
                            breakpoint: 600,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 2,
                              initialSlide: 2
                            }
                          },
                          {
                            breakpoint: 480,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                            }
                          }
                    ]
                }>
                    {
                        data.map( (item,index)=>{
                            return(
                                <ProductCard data={item} key={`${index}${item.title}`}/>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}


export default Home;