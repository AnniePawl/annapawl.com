import React from 'react';

export default function ToTop(props){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return(
        <div class='w-full flex flex-col items-center justify-center pt-24 '>
            <div onClick={scrollToTop} class='hover:cursor-pointer animate-bounce flex items-center justify-center h-6 w-6 md:h-8 md:w-8 rounded-full transition-colors' style={{backgroundColor: props.bgColor}}>
                <span class='text-xs md:text-sm' style={{color: props.color}}>↑</span>
            </div>
            {/* <span class='pt-3 text-xs text-zinc-800 tracking-widest uppercase '>Thanks for Viewing!</span> */}
        </div>
    )
}