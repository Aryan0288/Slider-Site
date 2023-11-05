import React from "react";
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const Card = (props) => {
    let data = props.usedata;
    let inc=props.inc;
    let plus=props.plus; 
    let n=props.len;
    function incrementHanlder(){
        if(plus!=n-1){
            inc(plus+1);
        }else{
            inc(0);
        }
    }
    
    function decrementhandler(){
        if(plus!=0){
            inc(plus-1);
        }else{
            inc(n-1);
        }
    }
    
    function surpriseHandler(){
        let randomIndex=Math.floor(Math.random()*n);
        inc(randomIndex);
    }
    return (
        <div className="flex flex-col items-center relative bg-white w-6/12 mx-auto pt-16 pb-8 px-[44px] rounded-md">
            <div className="absolute top-[-5rem] z-[10] left-[1.5rem]">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={data.image} />
                <div className="rounded-full w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] z-[-10] left-[8px]"></div>
            </div>
            <div className="flex flex-col items-center text-justify gap-3">
                <div>
                    <h2 className="text-[1.5rem] font-bold">{data.name}</h2>
                    <h2 className="text-gray-400">{data.job}</h2>
                </div>
                <div><FaQuoteLeft/></div>
                <div className="text-gray-400 text-center">
                    {data.text}
                </div>
                <div><FaQuoteRight/></div>

                <div className="flex gap-3 mt-4 text-[2rem]"> 
                    <button onClick={decrementhandler}><FiChevronLeft/></button>
                    <button onClick={incrementHanlder}><FiChevronRight/></button>
                </div>
                <div className="mt-5 bg-emerald-400 py-1 px-5 rounded-md"> 
                    <button onClick={surpriseHandler}>Surprise Me</button>
                </div>
            </div>
        </div>
    )
}

export default Card;