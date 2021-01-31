import React from 'react';
import './alert.scss';
import PropTypes from 'prop-types';

function Alert({type , message , title}){
    return(
        <div className={`alert ${type}`}>
            { title && <strong> {title} </strong> }
            <p>
                {message}
            </p>
        </div>
    )
}

Alert.propTypes = {
    type : PropTypes.oneOf(['error','success','warning','info']),
    message : PropTypes.string.isRequired,
    title : PropTypes.string
}

export default Alert;