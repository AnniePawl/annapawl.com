import React from 'react';
import FoodGallery from './FoodGallery';
import { Link } from 'react-router-dom';
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import ToTop from '../ToTop';


export default function foodblog() {
    return (
        <div className='bg-zinc-50 px-2 md:px-4 pb-5 md:pb-0 h-fit min-h-screen w-screen flex flex-col justify-center items-center pt-0'>
            <Link to="/">
                <div className='absolute top-3 md:top-4 left-3 md:left-4 scale-[.8] md:scale-[.85]'><StarIcon /></div>
            </Link>
            {/* Heading + Description*/}
            <div className='flex w-full flex-col items-center justify-center pt-10 pb-6'>
                <h1 className='pb-1 text-lg md:text-[20px] font-[900] tracking-[7px] text-zinc-800 uppercase'>kitchen mischief</h1>
                <p className='leading-5 max-w-xs md:max-w-xl text-center font-[500] text-xs md:text-base tracking-wider text-zinc-800'>Photos of Food I’ve Made. Highly Dedicated Eater — Learning to Cook</p>
            </div>
            <FoodGallery />
            <ToTop bgColor='#9fb0f5' />
            {/* <Footer bgColor='#ffef8ad4'/> */}
        </div>
    )
}