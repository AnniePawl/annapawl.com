import React from 'react';
import "./teacup.scss";

export default function TeaCup(props){
    const { cn } = props;
    return(
        <div className={`teacup-container ${cn}`}>
            <div className='teacup'></div>
            <div className='steam'></div>
        </div>
    )
}