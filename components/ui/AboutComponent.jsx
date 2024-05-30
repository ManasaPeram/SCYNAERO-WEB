"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
        >
          <Image
            src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
            width={900}
            height={500}
            alt="About image"
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2 
          initial='offscreen'
          whileInView={"onscreen"}
          variants={desVariants}
          className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl ">
            We are awards Winning Company
          </motion.h2>
          <motion.p
            initial='offscreen'
            whileInView={"onscreen"}
            variants={tagVariants}
           className="px-12 tracking-wide uppercase text-gray-400 mt-3 ">
            Acheivements
          </motion.p>
          <motion.p
            initial='offscreen'
            whileInView={"onscreen"}
            variants={tagVariants}
          
          className="px-12 pb-4 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
            hic at officiis iste. Voluptatum aut optio officiis doloremque rem
            quod eveniet. Amet nobis repellat hic culpa esse rerum. Provident?
          </motion.p>
          <motion.p
            initial='offscreen'
            whileInView={"onscreen"}
            variants={tagVariants}
          className="px-12 pb-4 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            iusto exercitationem, totam dolorum dolore perferendis, facilis
            consequatur sint porro sed magni eveniet quibusdam tempora
            necessitatibus eaque odit quos eos nostrum?
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
