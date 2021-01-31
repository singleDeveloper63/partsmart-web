import React from 'react';
import BrandCard from './brandCard/brandCard';
import './brandList.scss';
import AliceCarousel from 'react-alice-carousel';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from 'react-icons/ai';

const mock = [
        {
            "id": 55,
            "image": "http://app.partsmart.uz/files/klipartz.com.png",
            "name": "fsdfsdf"
        },
        {
            "id": 56,
            "image": "http://app.partsmart.uz/files/daewoo.97e903e2 копия.png",
            "name": "Daewoo/Ravon/Chevrolet"
        },
        {
            "id": 57,
            "image": "http://app.partsmart.uz/files/download.png",
            "name": "Chevrolet/Ravon"
        },
        {
            "id": 58,
            "image": "http://app.partsmart.uz/files/chevro.94b7f322 копия.png",
            "name": "Chevrolet"
        },
        {
            "id": 59,
            "image": "http://app.partsmart.uz/files/chevro.94b7f322 копия.png",
            "name": "Chevrolet"
        },
        {
            "id": 60,
            "image": "http://app.partsmart.uz/files/chevrolet logo.jpg",
            "name": "Chevrolet"
        }
    ]

function BrandList (){

    const items = mock.map((brand,index)=>(<BrandCard data={brand} key={index*(2**3)}/>));

    return(
        <div className="brandList">
            <div className="brandList-head">
                <h4>Mavjud brendlar</h4>
                <div className="controls">
                    <button> <AiOutlineArrowLeft/> </button>
                    <button> <AiOutlineArrowRight/> </button>
                </div>
            </div>
            <AliceCarousel items={items} disableButtonsControls disableSlideInfo disableDotsControls
                infinite={true} mouseTracking autoPlay autoPlayInterval={2000}
                responsive={{
                    0:{items : 2},
                    610 : {items : 3},
                    940 : {items : 4},
                    1330 : {items : 5},
                    1700 : {items : 6},
                    2100 : {items : 7}
                }}/>
        </div>
    )
}

export default BrandList;