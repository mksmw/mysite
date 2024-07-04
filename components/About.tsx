import { profileImg } from "@/public";
import Sectiontitle from "./Sectiontitle";
import Image from "next/image";
import { IoBug } from "react-icons/io5";

const About = () => {
    return (
        <section 
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
                <Sectiontitle title="About Me" titleNo="01" />
                <div className="flex flex-col lgl:flex-row gap-16">
                    <div className="w-full lgl:w-2/3 text-base text-textLight font-medium flex flex-col gap-4">
                        
                        <p>
                        Hello! First of all if you are reading this I just want to thank you for checking out my site, 
                        it really means a lot to me! My name is Mikhail Sumawan and I&apos;m an aspiring backend developer who 
                        specializes in building automation tools, APIs, database visualization, and network management. 
                        I graduated in 2021 with a Bachelor&apos;s degree in Computer Science from {" "}
                        <a href="https://www.sjsu.edu/" target="_blank">
                            <span className="text-textOrDark inline-flex relative cursor-pointer 
                            h-7 overflow-x-hidden group">
                                San Jose State University.
                                <span className="absolute w-full h-[1px] bg-textOrDark left-0 bottom-1 
                                -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                                </span>
                            </span>
                        </a>
                        </p>
                        
                        <p>
                        In my approach to work and life, I deeply resonate with the Japanese 
                        concept known as &ldquo;kaizen&ldquo; (改善), which embodies the philosophy of continuous improvement 
                        and mastery. I believe in the power of incremental progress and relentless dedication to 
                        refining one&apos;s skills and craftsmanship. This tenet inspires me to embrace challenges 
                        as opportunities for growth and to pursue the path of excellence in everything I do.
                        As of February 2025, I&apos;m currently working at Glassbeam, a {" "}
                        <span className="text-textOrDark">
                            data analytics company for healhcare devices
                        </span> {" "} 
                        in Silicon Valley.
                        </p>

                        <p>
                        When I&apos;m not coding I like to spend my time exploring my local Facebook marketplace or diving into the depths of eBay, 
                        in search of discounted computer parts. I also love tinkering with cars and computers, and I 
                        enjoy watching this {" "}
                        <a href="https://www.youtube.com/@M539Restorations" target="_blank">
                                <span className="text-textOrDark inline-flex relative cursor-pointer 
                                h-7 overflow-x-hidden group">
                                    man
                                    <span className="absolute w-full h-[1px] bg-textOrDark left-0 bottom-1 
                                    -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                                    </span>
                                </span>
                            </a> 
                            {" "}
                            restore broken BMWs on YouTube.
                        </p>

                        <p>Here are some of the technologies I&apos;ve been working with recently:</p>

                        <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-3">
                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Java
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Lua
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Javascript
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Scala
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                MySQL
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                PyTorch
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Pascal
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Docker
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Python
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Next.js
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lgl:w-1/3 h-80 relative group">
                        <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 items-center">
                                <Image 
                                    className="rounded-lg h-full object-cover"
                                    src={profileImg}
                                    alt="profileImg"
                                />
                                <div className="hidden lgl:inline-block absolute w-full h-80 bg-textOrDark/20 
                                rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                            </div>
                        </div>
                        <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textOrDark
                        rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform 
                        duration-300"></div>
                    </div>
                </div>

            </section>
    );
};

export default About;