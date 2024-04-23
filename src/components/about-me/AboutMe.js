import React from 'react';
import headshot from '../../assets/anna.png'
import SkillsBtn from './SkillsBtn';
import "./aboutme.scss";

export default function AboutMe(){
    return(
        <div class='h-[100vh] w-screen bg-rose-50 flex items-center flex-col '>
            {/* <div class='flex w-full max-w-6xl'>
                <div class='rounded-full flex items-center justify-center bg-emerald-200 h-36 w-36'><span>Concept</span></div>
                <div class='rounded-full flex items-center justify-center bg-emerald-200 h-36 w-36'><span>Design</span></div>
                <div class='rounded-full flex items-center justify-center bg-emerald-200 h-36 w-36'><span>Code</span></div>
                <div class='rounded-full flex items-center justify-center bg-emerald-200 h-36 w-36'><span>Launch</span></div>

            </div> */}
            
            
            <div class='w-full max-w-7xl pb-10'>
                <h3 class='font-bold text-zinc-700 uppercase text-2xl'>Design Tools & Skills</h3>
                <div class='h-[1.5px] bg-zinc-800 mb-4'></div>
                <div class='flex gap-4'>
                    <SkillsBtn name={'Figma'}/>
                    <SkillsBtn name={'Illustrator'}/>
                    <SkillsBtn name={'Prototyping'}/>
                    <SkillsBtn name={''}/>
                </div>
                
              
            </div>

            <div class='w-full max-w-7xl'>
                <h3 class='font-bold text-zinc-800 uppercase text-2xl'>Development Skills</h3>
                <div class='h-[1.5px] bg-zinc-800'></div>
            </div>


            <div class='w-full max-w-7xl absolute bottom-0'>
                <h1 class='uppercase font-black text-blue-300 text-9xl tracking-wider -m-4'>About Me</h1>
            </div>
            {/* <img src={headshot} class='w-96 absolute bottom-0 left-20'></img> */}

        </div>

    )
}