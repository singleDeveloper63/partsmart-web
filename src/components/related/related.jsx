import React , { createRef } from 'react';
import './related.scss';
import { AiOutlineArrowLeft,  AiOutlineArrowRight } from 'react-icons/ai';
import AliceCarousel from 'react-alice-carousel';
import { v4 } from 'uuid';


function Related({sliders}){
    
    const slider = createRef();

    return(
        <div className="related">
            <button onClick={()=>slider.current.slidePrev()}> <AiOutlineArrowLeft/> </button>
                <AliceCarousel items={1} mouseTracking infinite autoPlay autoPlayInterval={2000}
                    disableDotsControls disableButtonsControls disableSlideInfo ref={slider}>
                    {
                        sliders.map((slide) => {
                            if(slide.status){
                                return(
                                    <div key={v4()} className="item">
                                        <img src={slide.image} alt={slide.url}/>
                                        <a href={slide.url} target="_brank" ></a>
                                    </div>
                                )
                            }
                        })
                    }
                </AliceCarousel>
            <button onClick={()=>slider.current.slideNext()}> <AiOutlineArrowRight/> </button>
        </div>
    )
}

export default Related;