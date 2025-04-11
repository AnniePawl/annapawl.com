import React from 'react';

export default function ToTop(props){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return(
        <div class='w-full flex flex-col items-center justify-center pt-20'>
            <div onClick={scrollToTop} class='hover:cursor-pointer animate-bounce flex items-center justify-center h-6 w-6 md:h-8 md:w-8 rounded-full transition-colors' style={{backgroundColor: props.bgColor}}>
                <span class='text-base md:text-lg' style={{backgroundColor: props.color}}>↑</span>
            </div>
        </div>
    )
}