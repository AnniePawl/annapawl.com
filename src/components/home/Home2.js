import React from 'react';
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";

export default function Home2(){
    return(
        <div className='h-screen w-screen flex flex-col bg-[#5b5b5b] '>
            <div className='w-screen h-16 bg-[#5b5b5b] border-b-2 border-zinc-800 flex'>
                <div className='border-r-2 border-zinc-800 h-full w-[75px] md:w-[150px]'>
                    
                </div>
                <div className='flex items-center w-[calc(100%-150px)] justify-end pr-6'>
                    <h2 className='font-bold font-poppins tracking-tight text-2xl '>frontend development & creative direction</h2>
                </div>

            </div>
            <div className='flex w-screen h-[calc(100%-4rem)]'>
                 <div className='h-full flex items-center justify-center  border-r-2  border-zinc-800 w-[75px] md:w-[150px] bg-[#5b5b5b]'>
                    <h2 className='vertical-text text-9xl tracking-wide text-[#4e58a9] font-seasons font-black'>ux engineer</h2>
                </div>
                <div className='px-10 h-full w-[calc(100%-75px)] md:w-[calc(100%-150px)] bg-[#5b5b5b] flex flex-col'>
                    <div className='py-10 flex justify-between'>
                        <p className='max-w-3xl tracking-tight leading-6 font-aileron font-bold uppercase'><span className='text-zinc-500'>GENERAL NERDERY: </span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className='flex'>
                        <a
                            className=" mr-4 contact__codepen-icon"
                            href="https://codepen.io/annampawl"
                            target="blank"
                            >
                            <Codepen className='w-8'/>
                         </a>
                         <a
                            className=" mr-4 contact__codepen-icon"
                            href="https://codepen.io/annampawl"
                            target="blank"
                            >
                            <GitHub className='w-8'/>
                         </a>

                        </div>
                    </div>

                    <h1 className=' font-rock self-end font-black uppercase text-blue-300 text-[200px] tracking-tight'>Anna Pawl</h1>
                </div>
            </div>
        </div>
    )
}