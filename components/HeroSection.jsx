'use client';
import React from "react";
import { Button } from "./ui/button";
import {TbArrowUpRight} from 'react-icons/tb'
import Image from "next/image";
import { motion } from "framer-motion";
import {titleVariants, desVariants, tagVariants} from '../utils/animate'

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left  lg:flex lg:justify-between"> 
    {/* Left section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
         className="tracking-widest uppercase">The Best in Software Engineer</motion.p>
        <motion.h1
        initial='offscreen'
        whileInView={"onscreen"}
        variants={desVariants}
         className="h1">Make you skills like Full Stack Developer </motion.h1>
      <motion.p 
       initial='offscreen'
       whileInView={"onscreen"}
       variants={tagVariants}
      className="pb-6 text-muted-foreground xl:pb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        quasi quos ea fugit sapiente aperiam distinctio? Doloremque vero quas
        deleniti est cumque dicta, perferendis nam eveniet nulla possimus esse
        ducimus?
      </motion.p>

      <motion.div
        initial='offscreen'
        whileInView={"onscreen"}
        variants={desVariants}
      >
        <Button className='inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
        Learn More <TbArrowUpRight className="w-5 h-5 ml-2"/>
      </Button>

      </motion.div>
      
      </div>
      {/* Right section */}
      <div className="w-1/2 ">
        <Image src='https://arthurgrand.com/wp-content/uploads/2022/03/batech1.gif' width={800} height={500}  className="absolute right-20 xl:h-[400px] lg:h-[344px] lg:w-[500px]  hidden lg:block"/>

      </div>
     
    </div>
  );
};

export default HeroSection;
