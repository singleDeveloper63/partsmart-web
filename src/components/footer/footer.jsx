import React from 'react';
import {   AiOutlineFacebook , AiOutlineTwitter , AiOutlineInstagram    } from 'react-icons/ai';
import { HiMail, HiPhone } from 'react-icons/hi';
import './footer.scss';

function Footer(){
    return(
        <div className="footer">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <h4>Bizning manzilimiz</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <h4>Aloqa</h4>
                    <ul>
                        <li><HiMail/> singledeveloper63@gmail.com</li>
                        <li><HiPhone/> +998 (93) 772-07-49</li>
                        <li><HiPhone/> +998 (99) 035-93-54</li>
                        <li><i className="fab fa-fw fa-telegram-plane"></i>  <a href="https://t.me/singledeveloper63">Telegram</a></li>
                    </ul>
                </div>

                
                <div className="col-12 col-md-6 col-lg-3">
                    <h4>Havolalar</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <h4>Biz ijtimoiy tarmoqlarda</h4>
                    <ul>
                        <li><AiOutlineFacebook/>  Facebook</li>
                        <li><AiOutlineInstagram/> Instagram</li>
                        <li><AiOutlineTwitter/> Twitter</li>
                        <li><i className="fab fa-fw fa-telegram-plane"></i> Telegram</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}


export default Footer;