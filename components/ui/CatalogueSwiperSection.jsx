"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "../ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

export default function CatalogueSwiperSection() {
  return (
    <div className="py-8 lg:py-28 ">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4  text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Modern classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5 "
          >
            Luxury Decoration for all{" "}
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 text-gray-500 gap-x-8 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
            modi molestias libero enim doloribus nam, non omnis doloremque illum
            fugiat quos quia illo at? Reiciendis placeat minus alias recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quisquam, aspernatur quia laudantium sapiente nihil itaque,
            molestiae consequatur cum voluptates, ipsa repellat aut facilis.
            Amet mollitia deleniti doloribus nostrum assumenda!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit
            modi molestias libero enim doloribus nam, non omnis doloremque illum
            fugiat quos quia illo at? Reiciendis placeat minus alias recusandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quisquam, aspernatur quia laudantium sapiente nihil itaque,
            molestiae consequatur cum voluptates, ipsa repellat aut facilis.
            Amet mollitia deleniti doloribus nostrum assumenda!
          </p>
        </div>

        <a href="/gallery">
          <Button className="inline-flex items-center px-8  py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
            View more <TbArrowUpRight className="w-5  h-5 ml-2 " />
          </Button>
        </a>
      </div>
  
      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="https://img.freepik.com/premium-photo/business-growth-progress-success-concept-invest-trading-illustration_10221-11576.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://st2.depositphotos.com/1000423/7940/i/450/depositphotos_79401982-stock-photo-business-growth.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://watermark.lovepik.com/photo/40242/7943.jpg_wh1200.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2022/08/Burrus-Growth-Gap-blog-1021x580.png"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
