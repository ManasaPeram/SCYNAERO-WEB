"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef as UseRef} from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll as UseScroll, useTransform as UseTranform } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

const page = () => {
  const ref = UseRef(null);
  const { scrollYProgress } = UseScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = UseTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <div className="bg-[url('https://www.shutterstock.com/shutterstock/photos/2063156102/display_1500/stock-photo-nice-to-meet-you-in-our-team-friendly-man-leader-boss-shake-hand-of-new-staff-member-welcome-young-2063156102.jpg')] bg-center bg-cover text-white ">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center lg:py-64 ">
          Who are we?
        </h1>
      </div>

      <div className="container ">
        <div className="pt-4 ">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl "
          >
            We have great Skill development Technologies{" "}
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ea ipsa quas voluptas quam vitae consequuntur aliquid sit et saepe
            ad voluptatibus quidem earum id illum, dolores veritatis dolore
            beatae?
          </motion.p>
        </div>
      </div>

      <div className="items-center lg:flex gap-x-8 lg:p-10 p-10  ">
        {/* Leftimage */}
        <motion.div
          initial="offscreen"
          style={{ scale }}
          ref={ref}
          className="w-full"
        >
          <Image
            src="https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg"
            width={700}
            height={700}
          />
        </motion.div>
        {/* Right image */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <p className="pb-8 tracking-wide mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            architecto et, consectetur nulla molestiae distinctio eaque enim
            officia aperiam dolores? Soluta laudantium, laborum consectetur
            debitis eligendi tempora alias ex culpa. <br /> <br />
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            voluptate error nesciunt fugiat, deleniti dicta! Quas, et commodi
            harum accusamus voluptatem est, quam id natus eaque eos cumque
            tempore similique!
            <br /> <br />
            <span className="text-xl font-extrabold tracking-tight ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis nisi illum beatae voluptatum consectetur? Quisquam,
              itaque illo
            </span>
          </p>
          <Button
            className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hob
        ring-2 hover:ring-gray-950 ring-offset-2"
          >
            Read More <TbArrowUpRight className="w-5 h-5 ml-2 " />
          </Button>
        </motion.div>
      </div>

      {/* Team section */}
      <div className="lg:py-20 p-10">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="pt-8 pb-4 "
        >
          <h1 className="text-4xl font-bold tracking-wider text-center uppercase">
            Team
          </h1>
        </motion.div>
        <div className="grid py-8 gap-20 lg:grid-cols-3 lg:p-20 ">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://www.shutterstock.com/image-illustration/cloudnative-apps-technologies-approach-software-600nw-2246077495.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Cloud</h2>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, facere quod cum aperiam sint autem beatae eos
                excepturi voluptate,{" "}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://www.shutterstock.com/image-illustration/cloudnative-apps-technologies-approach-software-600nw-2246077495.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Cloud</h2>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, facere quod cum aperiam sint autem beatae eos
                excepturi voluptate,{" "}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://www.shutterstock.com/image-illustration/cloudnative-apps-technologies-approach-software-600nw-2246077495.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Cloud</h2>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, facere quod cum aperiam sint autem beatae eos
                excepturi voluptate,{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
