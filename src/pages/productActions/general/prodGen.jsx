import React from 'react';
import './prodGen.scss';
import { RiShareForwardLine } from 'react-icons/ri';
import { FaFacebookF , FaTelegramPlane , FaTwitter , FaLink , FaWhatsapp  } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import copy from '../../../utils/common';
import { wrapComponent } from 'react-snackbar-alert';
import {  v4 } from 'uuid';
import { Link } from 'react-router-dom';

const  General = wrapComponent(({data , createSnackbar}) => {

    const location = useLocation();
    const url = encodeURI(`https://partsmart-web.vercel.app${location.pathname+location.search}`);
    const title = encodeURI(data.product.title.uz);
    const desc = encodeURI('Ushbu tovarni ko\'rib chiqishingizni maslahat beraman');
    const img = encodeURI(`http://app.partsmart.uz/files/${data.product.image}`);
    const notEncodedURL = `https://partsmart-web.vercel.app${location.pathname}${location.search}`;
    

    return(
        <div className="prodGen">
            <div className="prodInfo">
                <div className="image">
                    <img src={`http://app.partsmart.uz/files/${data.product.image}`} alt={data.product.title.uz}/>
                </div>
                <div className="info">
                    <div>
                        <h5>
                            <span>Nomi : </span>  { data.product.title.uz }
                        </h5>
                        <h5>
                            <span>Model : </span>  { data.brand.name}
                        </h5>
                        <h5>
                            <span>Kategoriya : </span>  { data.device_type.name.uz } 
                        </h5>
                        <h5>
                            <span> Yili : </span>  { data.product.year } 
                        </h5>
                        <h5>
                            <span> Mavjudligi : </span>  { data.product.is_available ? "Mavjud" : "Mavjud emas" } 
                        </h5>
                        <h5>
                            <span>Kalit so'zlar : </span> {
                                data.product.seo.keywords.map((keyword)=>(<Link key={v4()} to={`/search?key=${keyword.trim()}`}>#{keyword.trim()}</Link>))
                            }
                        </h5>
                    </div>
                    <div className="sharers">
                        <h5> <span> Ulashing <RiShareForwardLine/> </span> </h5>
                        <a data-tooltip="Facebook" href={`https://facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${desc}&p[url]=${url}&p[images][0]=${img}`}
                            target="_blank"> Facebook <FaFacebookF/> </a>
                        <a data-tooltip="Telegram" href={`https://t.me/share/url?url=${url}&text=${title}`} target='_blank'>
                            Telegram <FaTelegramPlane/>
                        </a>
                        <a data-tooltip="Twitter" href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
                            target="_blank"> Twitter <FaTwitter/> </a>
                        <a data-tooltip="WhatsApp" href={`https://wa.me/?text=${`${title} mahsulotini quyidagi havola orqali ko'rib chiqishingizni maslahat beraman :\n ${url}`}`} target='_blank'> WhatsApp <FaWhatsapp/> </a>
                        <a data-tooltip="Nusxalash"
                            onClick={()=>{
                                copy(notEncodedURL);
                                createSnackbar({
                                    message : "Havola buferga nusxalandi",
                                    theme : "success",
                                    timeout : 2000,
                                })
                            }}> URL nusxasini olish <FaLink/> </a>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default General;