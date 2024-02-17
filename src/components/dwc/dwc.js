import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as StarIcon } from "../../assets/star-icon.svg";
import ShapesGrid from './ShapesGrid';
import './dwc.scss'
import circleSnippet from '../../assets/dwc/circle-snippet.jpeg'
import cssRule from '../../assets/dwc/css-rule.jpeg'
import Editor from './editor/Editor';


export default function DWC(){
    return(
        <div class='w-screen flex flex-col justify-center items-center bg-white'>
            <Link to="/">
                <div class='absolute top-5 left-5 scale-[.7] '><StarIcon /></div>
            </Link>
            <div class='h-fit w-screen overflow-hidden px-4 pt-16  flex justify-center'>
                <div class='text flex w-full flex justify-center '>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                    <h1 class='mr-5 whitespace-nowrap text-zinc-300 text-4xl md:text-6xl font-black tracking-wider md:tracking-widest text-transparent bg-clip-text w-fit bg-gradient-to-r from-blue-300 to-pink-300 uppercase'>Drawing with Code</h1>
                </div>
            </div>
            <ShapesGrid/>
            <div class='flex flex-col w-full max-w-5xl px-4 lg:px-0'>
                <h1 class='font-black text-blue-300 text-lg md:text-xl uppercase tracking-widest pb-2'>What is drawing with code?</h1>
                <p className='text-sm md:text-base tracking-wide text-zinc-600'>CSS art lies at the intersection of vector illustration and front-end development. It involves manipulating &lt;div&gt; HTML elements with CSS to render shapes in the browser. These shapes are customized by assigning values to various properties like height, border-radius, box-shadow and background-color. With countless CSS properties to work with, it’s possible to create intricate pieces without a vector illustration software like Illustrator.</p>
            </div>
            {/* Cirlce Snippet */}
            <div class='my-5 md:my-10 w-full max-w-3xl h-44 w-44 sm:h-48 sm:w-48 md:h-56 md:w-full bg-center bg-cover '  style={{ backgroundImage:`url(${circleSnippet})` }}></div>
            <div class='flex flex-col w-full max-w-5xl px-4 lg:px-0 mb-10'>
                <h1 class='font-black text-blue-300 text-lg md:text-xl uppercase tracking-widest pb-2'>It's all about the <span className='font-mono lowercase'> &lt;div&gt;</span> </h1>
                <p className='text-sm md:text-base tracking-wide text-zinc-600'>The &lt;div&gt;element is the building block of every pure CSS composition. A div is simply an empty container, often used to house other elements and create structure on a web page. It does not affect content or layout unless it’s styled with CSS or manipulated with scripts, making it extremely versatile. Take a look at the example below. Let’s break down the HTML portion of CSS art.</p>
                <div className='ml-5 md:ml-14 pt-5'>
                    <h2 class='font-black text-blue-300 text-base md:text-lg font-mono'>Parent &lt;div&gt;</h2>
                    <p className='text-sm md:text-base tracking-wide text-zinc-600'>Every CSS composition starts with a parent div. Think of it as your canvas. In the example above, &lt;div class='circle-container&gt; acts as an invisible box that encapsulates all other elements.</p>
                </div>
                <div className='ml-5 md:ml-14 pt-5'>
                    <h2 class='font-black text-blue-300 text-base md:text-lg font-mono'>Child &lt;div&gt;</h2>
                    <p className='text-sm md:text-base tracking-wide text-zinc-600'>Styled child divs, which are nested within parent elements, give your composition structure and substance. Nesting elements is useful because you can position a child div relative to its parent. As your CSS skills improve, you’ll be able to create elaborate pieces with a single div. For now, break your vision down into simple parts and create a child div for every shape.</p>
                </div>
                <div className='ml-5 md:ml-14 pt-5'>
                    <h2 class='font-black text-blue-300 text-base md:text-lg font-mono'>Custom Classes</h2>
                    <p className='text-sm md:text-base tracking-wide text-zinc-600'>Each div needs a custom class. Your stylesheet uses these references to differentiate between elements. Be concise and descriptive for your styling sanity. In the code snippet above,class='inner-circle' is more effective thanclass='circle' because it allows me to target a specific sphere and give it distinct styles. Remember, assigning a class doesn't do anything by default. Styles need to be applied to give a div character.</p>
                </div>
                <div class='flex flex-col w-full max-w-5xl  pt-10'>
                    <h1 class='font-black text-blue-300 text-lg md:text-xl uppercase tracking-widest pb-2'>CSS, A little recap</h1>
                    <p className='mb-5 text-sm md:text-base tracking-wide text-zinc-600'>CSS is short for Cascading Style Sheets. A style sheet interacts with HTML elements to add aesthetic substance to a document. To apply custom styles, we create a series of CSS rules, typically in a separate.css file. Rules are CSS properties applied to one or more target HTML elements. Each consists of a selector and a declaration block. The selector points to the specific HTML element you want to customize, while the declaration defines the actual style.</p>
                    <p className='mb-5 text-sm md:text-base tracking-wide text-zinc-600'>The selector above refers to a class called, “rectangle”. We can tell because a full stop (.) precedes the name. Class selectors give us the flexibility to target specific HTML elements and are assigned inside opening tags like this: &lt;div class='rectangle'&gt;. ID selectors, which are preceded by the hash character (#), work similarly but should be used sparingly. Don’t forget, each element can only have one ID, and each page only permits one element with a particular ID.</p>
                    <p className='mb-5 text-sm md:text-base tracking-wide text-zinc-600'>Opt for class selectors when creating CSS art. As your digital creations become more complex, you will find it helpful to reuse the same class on several elements. Moreover, applying multiple classes to a single element will give you even more artistic control over it. Assigning custom classes is especially essential to CSS art because the “drawing” process entails styling divs, which are otherwise indistinguishable from one another.</p>
                </div>
                {/* css rule */}
                <div class='self-center my-5 md:my-0 w-full max-w-3xl h-44 w-44 sm:h-48 sm:w-48 md:h-56 md:w-full bg-center bg-cover '  style={{ backgroundImage:`url(${cssRule})` }}></div>
                <div class='flex flex-col w-full max-w-5xl  pt-10'>
                    <h1 class='font-black text-blue-300 text-lg md:text-xl uppercase tracking-widest pb-2'>Beginner's CSS Toolkit</h1>
                    <p className='mb-5 text-sm md:text-base tracking-wide text-zinc-600'>There is a lot you can accomplish with the basics. Start small, and add new CSS properties to your toolkit as you grow. Consider the subcomponents of your graphic, then simplify. For example, apply a solidbackground-color before playing with gradient, and experiment with border-radius before using clip-path to generate custom shapes. Try a flat version of your design before transforming it into a 3D edition. Below is a short list of CSS properties to help you get started.</p>
                    <div className='ml-5 md:ml-14 '>
                        <h2 class='font-black text-blue-300 text-base md:text-lg font-mono '>height, width</h2>
                        <p className='text-sm md:text-base tracking-wide text-zinc-600'>These properties are used to set the height and width of your element. Default div size is determined by the HTML content it contains. Without any content, your div won’t appear to exist. It’s important to explicitly mention these properties for this reason. Use px or % values to define your div’s size.</p>
                    </div>
                    <div className='ml-5 md:ml-14 pt-5'>
                        <h2 class='font-black text-blue-300 text-base md:text-lg font-mono'>background-color;</h2>
                        <p className='text-sm md:text-base tracking-wide text-zinc-600'>This property sets the color of your div. I like using Google’s color picker to find the perfect hue and its corresponding HEX or RGB value.</p>
                    </div>
                    <div className='ml-5 md:ml-14 pt-5'>
                        <h2 class='font-black text-blue-300 text-base md:text-lg font-mono '>border-radius</h2>
                        <p className='text-sm md:text-base tracking-wide text-zinc-600'>This property sets the radius of your div’s corners. Divs are square by default, but you can generate other shapes by manipulating borders. If you assign one value to this property, that radius applies to all four corners. For example, border-radius: 50% makes a circle. You can specify up to three additional values to adjust corners separately.</p>
                    </div>
                    <div className='ml-5 md:ml-14 pt-5'>
                        <h2 class='font-black text-blue-300 text-base md:text-lg font-mono '>transform:translateY/translateX</h2>
                        <p className='text-sm md:text-base tracking-wide text-zinc-600'>This property repositions your div vertically/ horizontally along a 2D plane. Positioning elements is an essential part of creating more complex designs. Use px values to start moving components around your canvas.</p>
                    </div>
                </div>
               
            </div>
        </div>
        
    )
}


