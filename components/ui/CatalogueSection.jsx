import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "Dveloper",
      title: "Software Developer",
      image:
        "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0",
      description: "Lorem ipsum, dolor sit amet .",
    },
    {
      id: "02",
      category: "Tester",
      title: "Software Developer",
      image:
        "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "03",
      category: "Azure",
      title: "Software Developer",
      image:
        "https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0",
      description: "Lorem ipsum, dolor sit amet ews",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1 lg:gap-0 divide-gray-300 lg:divide-x">
      {items?.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=""
              className="w-full"
            />
          </div>

          <div className="absolute  top-0 p-8 bg-white text-black  bg-opacity-60 backdrop-blur m-12 ">
            <div className=" flex justify-between pb-4 ">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <a href="" className="block text-xl font-semibold">
              {item.title}
            </a>
            <p className="py-4">{item.description}</p>
            <a href="" className="inline-flex items-center font-medium">
              {" "}
              See Details <TbArrowNarrowRight className="ml-2" />
            </a>
          </div>
          <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex  md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 ">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
