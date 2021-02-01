import React, { useEffect, useState } from 'react';
import './radio.scss';
import { v4 } from 'uuid';

function Radio({checked = false , onChange = val => console.log(val) , id  , value  , group = ""}){
    const [isChecked , setIsChecked] = useState(checked);
    return(
        <label key={v4()} htmlFor={id} className="checkbox">
            <input key={v4()} name={group} type="radio" value={value} id={id}
                checked={ isChecked } onChange={ (e) => {
                    setIsChecked(e.target.checked)
                    if(e.target.checked){
                        onChange(e.target.value);
                    }
                }}/>
            <span className="checkmark"></span>
        </label>
    )
}

export default Radio;