import React,{useEffect, useState} from 'react'
import './style.css';

 const Count = () => {

    const [num, setNum] = useState(localStorage.getItem("num") || 0);
    
    useEffect(() => {
    localStorage.setItem("num",num);
    }, [num]);

    const incrementNum = () => {
        setNum(num + 1);
    }
    
    const decrementNum = () => {
        if(num > 0) {
            setNum(num - 1);
        } else{
            alert('You reached at zero limit')
            setNum(0);
        }
    }

    return (
        <>
        <div className="main">
        <div className="center">
            <h1>{num}</h1>
        <div className="btn">
            <button onClick={incrementNum}>+</button>
            <button onClick={decrementNum}>-</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Count;
