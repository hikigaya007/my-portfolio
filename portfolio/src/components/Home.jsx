import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Home() {

    const [collapseNav , setCollapseNav] = useState(false);

    const handleClick = ()=>{
        setCollapseNav(!collapseNav);
    }
    const stylesIcon = {
        color: collapseNav ? 'black' : 'white',
    
      };

  return (
    <div className='flex bg-slate-900  text-white justify-between max-w-7xl mx-auto  h-[80px] items-center'>
        <span>Logo</span>
        <ul className='md:flex md:gap-6 hidden '>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            
        </ul>
        <div className='md:hidden cursor-pointer z-10'
        onClick={handleClick}><FontAwesomeIcon icon={faBars} size='lg' style={stylesIcon} /></div>
        
        {collapseNav && <ul className='bg-white  text-black absolute top-0 left-0 flex flex-col h-screen w-full justify-center items-center'>
                <li className='py-6 text-2xl'>Home</li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Projects</li>
                <li className='py-6 text-2xl'>Contact Me</li>
            </ul>}
        
        <a href="/" className='hidden md:block bg-white text-black p-1 rounded-full'>Contact Me</a>
    </div>
  )
}

export default Home