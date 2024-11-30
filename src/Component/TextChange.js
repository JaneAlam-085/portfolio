import React from 'react'
import {useState, useEffect } from 'react';
export default function TextChange() {
    const text = ["Hi, i'm Jane Alam","Hi, i'm Jane Alam","Hi, i'm Jane Alam"]
    const [currentText, setCurrentText] =useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setIsforward] = useState(true);
    const [index, setIndex] = useState(0);

   useEffect(() =>{
    const intervalId = setInterval(() =>{
    setCurrentText(text[index].substring(0,endValue));
    if(isForward){
      setendValue((prev) => prev + 1);
    }else{
      setendValue((prev) => prev-1 );
    }
    if(endValue > text[index].length+10){
      setIsforward(false)
    }
    if(endValue < 2.1){
      setIsforward(true)
      setIndex((prev) => prev&text.length)
    }
    }, 50);

    return ()=> clearInterval(intervalId)
     }, [endValue, isForward, index, text])

  return (
    <div className='transition ease duration-300'>{currentText}</div>
  )
}
