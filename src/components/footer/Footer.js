import React from 'react';

export default function Footer(props){
    return(
        <div class='w-screen pt-10  fixed bottom-0'>
            <div class='w-full h-10  flex justify-center items-center' style={{backgroundColor: props.bgColor}}>
                <p class='text-sm tracking-wide'>Made with <span class='text-pink-500'>♥</span> by Anna</p>
            </div>
        </div>
    )
}