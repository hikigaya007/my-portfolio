import React, { useRef } from 'react'
import '../styles/Parallax.css'
import {motion ,useScroll ,useTransform} from 'framer-motion'

function Parallax(props) {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]

  });

  const yBg = useTransform(scrollYProgress, [0,1], ["0%","100%"]);
  const yText = useTransform(scrollYProgress, [0,1], ["0%","1000%"]);

  return (
    <div 
    ref={ref}
    className='parallax flex justify-center items-center relative w-[100%] h-[100%] overflow-hidden' >
      <motion.div style={{ y : yText}} className='text-xl font-semibold sm:text-2xl md:text-5xl lg:me-6'>{props.title}</motion.div>
      <motion.div  className='mountain'></motion.div>
    </div>
  )
}

export default Parallax