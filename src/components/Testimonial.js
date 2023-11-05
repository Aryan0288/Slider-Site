import React from 'react'
import Card from './Card';

const Testimonial = (props) => {
    let data=props.data1;
    let inc=props.inc;
    let plus=props.plus;
    let len=props.len;
    console.log(plus);
    return (

        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='mb-10'>
                <h1 className='text-3xl font-semibold'>Our Testimonial</h1>
                <div className='bg-green-500 w-36 h-1 mx-auto mt-2'></div>
            </div>
            <div>
                {
                    // data.map((data)=>(
                        <Card key={data.id} usedata={data[plus]} inc={inc}  plus={plus} len={len}/>
                    // ))
                }
            </div>
        </div>
    )
}
export default Testimonial;