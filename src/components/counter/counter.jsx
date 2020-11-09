import { useEffect, useState } from 'react';
import './counter.scss';

function Counter({onChange , initial}){
    const [count, setCount] = useState(initial)

    useEffect(()=>{
        onChange(count)
    },[count])

    return(
        <div className="counter">
            <button disabled={count<2} onClick={()=>setCount(prev => prev>1 ? prev-1 : prev)}>-</button>
            <input type="text" value={count} readOnly/>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;