import { logo } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Navbar = () => {
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false);
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView ({
            behavior: "smooth",
        });

        // Update the class name of the clicked link
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    }

    function handleClick(e:any) {
        if(e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    return (
    <div className="w-full h-20 lg:h-[12vh] 
    sticky top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container h-full mx-auto py-1 
        font-titleFont flex items-center justify-between position-relative">
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}>
                <Link 
                href="#home"
                onClick={handleScroll}>
                    <Image className="w-12" src={logo} alt="logo"/>
                </Link>
            </motion.div>
            <div className="hidden mdl:inline-flex items-center gap-7">
                <ul className="flex text-[13px] gap-7">
                    <Link 
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium 
                    text-textLight hover:text-textOrDark cursor-pointer duration-300 nav-link">
                        <motion.li
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1, delay:0.1}}>
                            <span className="text-textOrDark">01. </span>
                            Home
                        </motion.li>
                    </Link>

                    <Link 
                    className="flex items-center gap-1 font-medium 
                    text-textLight hover:text-textOrDark cursor-pointer 
                    duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}>
                        <motion.li
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1, delay:0.2}}>
                            <span className="text-textOrDark">02. </span>
                            About
                        </motion.li>
                    </Link>

                    <Link 
                    className="flex items-center gap-1 font-medium 
                    text-textLight hover:text-textOrDark cursor-pointer 
                    duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}>
                        <motion.li
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1, delay:0.3}}>
                            <span className="text-textOrDark">03. </span>
                            Experience
                        </motion.li>
                    </Link>

                    <Link 
                    className="flex items-center gap-1 font-medium 
                    text-textLight hover:text-textOrDark cursor-pointer 
                    duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}>
                        <motion.li
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1, delay:0.4}}>
                            <span className="text-textOrDark">04. </span>
                            Work
                        </motion.li>
                    </Link>

                    <Link 
                    className="flex items-center gap-1 font-medium 
                    text-textLight hover:text-textOrDark cursor-pointer 
                    duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}>
                        <motion.li
                        initial={{y:-10, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:0.1, delay:0.5}}>
                            <span className="text-textOrDark">05. </span>
                            Contact
                        </motion.li>
                    </Link>
                </ul>
                <a href="./assets/resume.pdf" target="_blank">
                    <motion.button 
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.1, delay:0.6}}
                    className="px-4 py-2 rounded-md text-textOrDark text-[13px] border border-textOrDark hover:bg-hoverColor duration-300">
                        Resume
                    </motion.button>
                </a>                
            </div>

            {/* Hamburger Icon Section */}
            <div 
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
            text-4xl text-textOrDark cursor-pointer overflow-hidden group">
                <span className="w-full h-[2px] bg-textOrDark inline-flex transform
                group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textOrDark inline-flex transform translate-x-3
                group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textOrDark inline-flex transform translate-x-1
                group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
            {
                showMenu && (
                    <div 
                    ref={(node) => (ref.current = node)}
                    onClick={handleClick}
                    className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
                        bg-opacity-50 flex flex-col items-end">
                        <motion.div
                            initial={{x:20, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:0.1}}
                            className="w-[80%] h-full scrollbarHide bg-[#0C2D57] 
                            flex flex-col items-center px-4 relative">
                                <MdClose 
                                onClick={() => setShowMenu(false)}
                                className="text-3xl text-textOrDark cursor-pointer
                                hover:text-red-500 absolute top-4 right-4"/>
                                <div className="flex flex-col py-10 text-base gap-6 items-center">
                                    <ul className="flex flex-col py-20 text-base gap-6 items-center">
                                        <Link 
                                        href="#home"
                                        onClick={handleScroll}
                                        className="text-2xl flex items-center gap-1 font-medium 
                                        text-textLight hover:text-textOrDark cursor-pointer duration-300 nav-link">
                                            <motion.li
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.2, delay:0.1, ease: "easeIn"}}>
                                                Home
                                            </motion.li>
                                        </Link>

                                        <Link 
                                        className="text-2xl flex items-center gap-1 font-medium 
                                        text-textLight hover:text-textOrDark cursor-pointer 
                                        duration-300 nav-link"
                                        href="#about"
                                        onClick={handleScroll}>
                                            <motion.li
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.2, delay:0.2, ease: "easeIn"}}>
                                                About
                                            </motion.li>
                                        </Link>

                                        <Link 
                                        className="text-2xl flex items-center gap-1 font-medium 
                                        text-textLight hover:text-textOrDark cursor-pointer 
                                        duration-300 nav-link"
                                        href="#experience"
                                        onClick={handleScroll}>
                                            <motion.li
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.2, delay:0.3, ease: "easeIn"}}>
                                                Experience
                                            </motion.li>
                                        </Link>

                                        <Link 
                                        className="text-2xl flex items-center gap-1 font-medium 
                                        text-textLight hover:text-textOrDark cursor-pointer 
                                        duration-300 nav-link"
                                        href="#project"
                                        onClick={handleScroll}>
                                            <motion.li
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.2, delay:0.4, ease: "easeIn"}}>
                                                Work
                                            </motion.li>
                                        </Link>

                                        <Link 
                                        className="text-2xl flex items-center gap-1 font-medium 
                                        text-textLight hover:text-textOrDark cursor-pointer 
                                        duration-300 nav-link"
                                        href="#contact"
                                        onClick={handleScroll}>
                                            <motion.li
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.2, delay:0.5, ease: "easeIn"}}>
                                                Contact
                                            </motion.li>
                                        </Link>

                                        <a href="./assets/resume.pdf" target="_blank">
                                            <motion.button 
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.1, delay:0.6, ease: "easeIn"}}
                                            className="px-9 py-3 mt-3 text-2xl rounded-md text-textOrDark 
                                            text-[base] border border-textOrDark hover:bg-hoverColor duration-300">
                                                Resume
                                            </motion.button>
                                        </a> 

                                        <div className="flex gap-4 py-3">
                                            <motion.a
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.1, delay:0.7, ease: "easeIn"}}
                                            href="https://github.com/mksmw"
                                            target="_blank">
                                                <span 
                                                className="w-12 h-12 text-2xl bg-hoverColor rounded-full inline-flex 
                                                items-center justify-center hover:text-textOrDark cursor-pointer hover:-translate-y-2 
                                                transition-all duration-300">
                                                    <TbBrandGithub />
                                                </span>
                                            </motion.a>

                                            <motion.a
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.1, delay:0.7, ease: "easeIn"}}
                                            href="https://www.youtube.com/channel/UC2Ft6RrmJz08xWMvJk54aWQ"
                                            target="_blank">
                                                <span 
                                                className="w-12 h-12 text-2xl bg-hoverColor rounded-full inline-flex 
                                                items-center justify-center hover:text-textOrDark cursor-pointer hover:-translate-y-2 
                                                transition-all duration-300">
                                                    <SlSocialYoutube />
                                                </span>
                                            </motion.a>

                                            <motion.a
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.1, delay:0.7, ease: "easeIn"}}
                                            href="https://www.linkedin.com/in/mikhail-smw/"
                                            target="_blank">
                                                <span 
                                                className="w-12 h-12 text-2xl bg-hoverColor rounded-full inline-flex 
                                                items-center justify-center hover:text-textOrDark cursor-pointer hover:-translate-y-2 
                                                transition-all duration-300">
                                                    <SlSocialLinkedin />
                                                </span>
                                            </motion.a>

                                            <motion.a
                                            initial={{x:20, opacity:0}}
                                            animate={{x:0, opacity:1}}
                                            transition={{duration:0.1, delay:0.7, ease: "easeIn"}}
                                            href="https://www.instagram.com/mikkhail/"
                                            target="_blank">
                                                <span 
                                                className="w-12 h-12 text-2xl bg-hoverColor rounded-full inline-flex 
                                                items-center justify-center hover:text-textOrDark cursor-pointer hover:-translate-y-2 
                                                transition-all duration-300">
                                                    <SlSocialInstagram />
                                                </span>
                                            </motion.a>
                                        </div>

                                        <motion.a
                                        initial={{x:20, opacity:0}}
                                        animate={{x:0, opacity:1}}
                                        transition={{duration:0.1, delay:0.8, ease: "easeIn"}}
                                        className="text-m w-72 -mt-3 tracking-wide text-center
                                        hover:text-textOrDark cursor-pointer transition-all duration-300"
                                        href="mailto:mksmw@protonmail.com"
                                        target="_blank">
                                            <p>mksmw@protonmail.com</p>
                                        </motion.a>
                                    </ul>                                
                                </div>
                        </motion.div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default Navbar;