import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import profile from '../assets/profile.jpeg'
import '../App.css'
import { TypeAnimation } from 'react-type-animation';

function Home() {

    const [collapseNav , setCollapseNav] = useState(false);

    const handleClick = ()=>{
        setCollapseNav(!collapseNav);
    }


    const links = [
        {
            title:'Home',
            link:'/'
        },{
            title:'About',
            link:'/'
        },{
            title:'Projects',
            link:'/'
        },{
            title:'Contact Me',
            link:'/',
        }
    ];
      

  return (
    <>
    {/* Navbar */}
    <div className='flex bg-slate-900  text-white justify-between max-w-7xl mx-auto  h-[80px] items-center p-2 xl:p-0'>
        <span>Logo</span>
        <ul className='md:flex md:gap-6 hidden text-lg'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            
        </ul>
        <div className='md:hidden cursor-pointer z-20 bg-white p-2 rounded-full w-[36px] flex items-center justify-center'
        onClick={handleClick}><FontAwesomeIcon icon={faBars} size='lg' style={{color:'black'}} /></div>
        
        {collapseNav && <ul className='bg-white z-10 text-black absolute top-0 left-0 flex flex-col h-screen w-full justify-center items-center'>
                {links.map((value , index) =>{
                    return(
                        <li className='py-6 text-3xl hover:scale-105 cursor-pointer transition-all duration-200' key={index}>{value.title}</li>
                    )
                })}
            </ul>}
        
        <a href="/" className='hidden md:block bg-white text-black p-1 rounded-full'>Contact Me</a>

    </div>

        <div className='flex flex-col items-center justify-center max-w-7xl md:mt-2 mx-auto  h-[80%] '>
            <div className='custom-animation'><img src={profile} alt="Profile Picture" className=' size-40 md:size-80 sm:size-60 rounded-full shadow-purple-400 shadow-lg ' /></div>
            <div className='mt-4'>
                    <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
                            Hi! I'm <span className=" text-violet-400">Bijo </span>Prasad
                            <br />Full Stack
                            <span className=" text-violet-400"> <TypeAnimation
                                sequence={['Developer', 1000, 'Designer', 1000]}
                                speed={20}
                                repeat={Infinity}
                                /></span>
                    </h2><br/>
                    <p className="text-base sm:text-lg md:text-xl text-center">
                        My <span className="text-violet-400"> favorite tech</span> includes JavaScript , NextJs
                        ,TailwindCSS , Node.js + Express.js & MongoDB!
                    </p>
                    
            </div>
        </div>

    </>

    
  )
}

export default Home