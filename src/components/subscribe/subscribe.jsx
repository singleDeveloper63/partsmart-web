import React from 'react';
import './subscribe.scss';



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

export default Subscribe;