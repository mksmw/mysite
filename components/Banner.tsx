import React from "react";
import {motion} from "framer-motion";


const Banner = () => {
    return (
        <section id="home" className="max-w-contentContainer mx-auto py-10 mdl:py-24 
        flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            
            <motion.h3 
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5, delay:0.6}}
                className="text-lg font-titleFont tracking-wide text-textGreen">
              Greetings! My name is
            </motion.h3>

            <motion.h1
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5, delay:0.7}}
                className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
                Mikhail Sumawan. 
                    <span className="text-textDark mt-2 lgl:mt-4">
                        I build software for people.
                    </span>
            </motion.h1>

            <motion.p 
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5, delay:0.8}}
                className="text-base md:max-w-[650px] text-textDark font-medium">
                {""} 
                I am a backend developer with 3+ years of experience in automation, API development, and 
                network management. From design to deployment, I take pride in delivering high-quality work, 
                approaching every project with the same level of care, passion and attention to detail. So take a 
                look around and let&apos;s create something awesome together! &nbsp;
                {""}
                <a href="https://www.linkedin.com/in/mikhail-smw/" target="_blank">
                    <span className="text-textGreen inline-flex relative cursor-pointer
                    h-7 overflow-x-hidden group">
                        Learn more
                        <span className="absolute w-full h-[1px] bg-textGreen left-0
                        bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform
                        duration-500"></span>
                    </span>
                </a>
            </motion.p>

            <motion.button 
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.5, delay:0.9}}
                className="w-52 h-14 text-sm font-titleFont border border-textGreen
            rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
                <a href="https://github.com/mksmw" target="_blank">
                    Check out my work!
                </a>
            </motion.button>

        </section>
    );
};

export default Banner;