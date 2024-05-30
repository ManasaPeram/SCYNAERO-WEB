'use client';
import Image from "next/image";
import {titleVariants, desVariants, tagVariants} from '../../utils/animate';
import { motion } from "framer-motion";

const posts = [
    {
        id:1,
        title: "Boost you skills",
        href:'#',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam porro sunt ipsum doloremque a? Veritatis eum vero rem amet nihil, adipisci provident eveniet inventore non ratione unde qui obcaecati culpa?',
        date: 'March 16, 2024',
        datetime: '2024',
        category: {title:'4.7', href:"#"},
        author:{
            name:'Achyuth',
            role:'Co-Founder/CTO',
            href:'#',
            imageurl:'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'

        }
    },

    {
        id:2,
        title: "Boost you skills",
        href:'#',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam porro sunt ipsum doloremque a? Veritatis eum vero rem amet nihil, adipisci provident eveniet inventore non ratione unde qui obcaecati culpa?',
        date: 'March 16, 2024',
        datetime: '2024',
        category: {title:'4.6', href:"#"},
        author:{
            name:'Sagar',
            role:'Co-Founder/CEO',
            href:'#',
            imageurl:'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'

        }
    },
    {
        id:3,
        title: "Boost you skills",
        href:'#',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam porro sunt ipsum doloremque a? Veritatis eum vero rem amet nihil, adipisci provident eveniet inventore non ratione unde qui obcaecati culpa?',
        date: 'March 16, 2024',
        datetime: '2024',
        category: {title:'4.9', href:"#"},
        author:{
            name:'Shirisha',
            role:'Co-Founder/CTO',
            href:'#',
            imageurl:'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'

        }
    }
]

export default function ContactSection(){
    return (
        <div className="pt-12 lg:p-32">
           <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <motion.h2
             initial='offscreen'
             whileInView={"onscreen"}
             variants={desVariants}
             className="text-3xl font-bold tracking-tight sm:text-4xl "> Contact Us</motion.h2>
            <motion.p 
             initial='offscreen'
             whileInView={"onscreen"}
             variants={desVariants}

            className="mt-2 text-lg leading-8 text-muted-foreground">Learn how to grow your skills with full of expertise.</motion.p>
           </div>

           <motion.div
               initial='offscreen'
               whileInView={"onscreen"}
               variants={tagVariants}
            className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16  sm:mt-16  py-10 border-b border-gray-200 border-t gap-y-16  ">
            {
                posts.map((post) =>(
                    <article key={post.id} className="flex max-w-xl  flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4  text-xs">
                           <time datetime={post.datetime}>
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX64efCTa96qOukxBSfDwSXcB6lSRPpGE7yZrhcO_wRdoCa4WzqmiIjq64LGfyG2FExn0&usqp=CAU' width={80} height={5}/>
                           </time>
                           <a href={post.category.href}
                           className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium  hover:bg-gray-100 hover:text-black transition-all"
                           
                           >
                            {post.category.title}
                           </a>
                        </div>

                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                                <a href={post.href}>
                                    <span>{post.title}</span>
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm  leading-6 text-muted-foreground"> 
                                {post.description}
                            </p>

                        </div>

                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageurl} alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                            <div className="text-sm leading-6">
                                <p className="font-semibold">
                                    <a href={post.author.href}>
                                        <span>{post.author.name}</span>
                                    </a>
                                </p>
                                <p className="text-muted-foreground "> {post.author.role}</p>
                            </div>
                        </div>
                    </article>
                ))
            }
           </motion.div>
        </div>
    )
}