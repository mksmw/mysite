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
                        Hi! First of all, thank you for taking the time to visit my site, it genuinely means a lot to me. 
                        My name is <span className="text-textOrDark">
                            Mikhail Sumawan
                        </span> {" "}, and I specialize in solving operational problems through software, automation, 
                        and systems integration. My background spans from cloud infrastructure, enterprise software, ERP implementation, 
                        process improvement, and AI-driven automation.
                        </p>

                        <p>
                        Throughout my career, I've worked on projects ranging from healthcare monitoring platforms to modernizing business 
                        operations using automated software and systems integration. I enjoy translating complex technical challenges 
                        into practical solutions that improve efficiency, visibility, and scalability.
                        </p>
                        
                        <p>
                        In my approach to work and life, I deeply resonate with the Japanese 
                        concept known as <span className="text-textOrDark">
                            &ldquo;kaizen&ldquo; 
                        </span> {" "}
                        (改善), which embodies the philosophy of continuous improvement 
                        and mastery. I believe in the power of incremental progress and relentless dedication to 
                        refining one&apos;s skills and craftsmanship. This tenet inspires me to embrace challenges 
                        as opportunities for growth and to pursue the path of excellence in everything I do.
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
                                SQL
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                JavaScript
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
                                TypeScript
                            </li>

                            <li className="flex items-center gap-2">
                                <span className="text-textOrDark">
                                    <IoBug />
                                </span>
                                Lua
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