import React from 'react';

export default function Footer(props){
    return(
        // 'made with love by anna' 
        <div className='md:hidden w-screen pt-10 fixed bottom-0'>
            <div className='w-full h-10 flex justify-center items-center' style={{backgroundColor: props.bgColor}}>
                <p className='text-sm tracking-wide'>Made with <span className='text-pink-500'>♥</span> by Anna</p>
            </div>
        </div>
    )
}