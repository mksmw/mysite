import Image from "next/image";
import Sectiontitle from "./Sectiontitle";
import { projectOne, projectThree, projectTwo } from "@/public";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { TbExternalLink } from "react-icons/tb";

const Projects = () => {
    return (
        <section 
            id="project"
            className="max-w-container mx-auto lgl:px-20 py-24">
            <Sectiontitle title="Some Things I've Built" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">

                {/* Project One */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a 
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://github.com/mksmw/SteamyDatingApp" 
                        target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain rounded-lg 
                                hover:-translate-y-2 transition-transform duration-300 group"
                                    src={projectOne}
                                    alt="projectOne"/>
                                {/*
                                <div className="absolute w-full h-full bg-textGreen/40 rounded-lg
                                top-0 left-0 group-hover:bg-transparent duration-300"></div>
                                */}
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                        items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen mt-10 text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Steamy iOS Dating App</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                Steamy is an iOS mobile dating app my team and I developed as part of the final 
                                project for my Software Engineering class I took in college.
                                It is powered by {" "} 
                                <span className="text-textGreen">Swift and Ruby</span> 
                                {" "} to ensure smooth performance and reliability, 
                                while Firebase provides a robust and secure backend for effortless data management.
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                            md:gap-5 justify-between text-textDark">
                                <li>Swift</li>
                                <li>Ruby</li>
                                <li>Firebase</li>
                                <li>Xcode</li>
                                <li>Adobe XD</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a 
                                className="hover:text-textGreen duration-300"
                                href="https://github.com/mksmw/SteamyDatingApp"
                                target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a 
                                className="hover:text-textGreen duration-300"
                                href="https://www.youtube.com/watch?v=FoTmEDGbsuw&t=6s"
                                target="_blank">
                                    <TbBrandYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Two */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a 
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://github.com/mksmw/2DKirbyGame/tree/master" 
                        target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain rounded-lg 
                                hover:-translate-y-2 transition-transform duration-300 group"
                                    src={projectTwo}
                                    alt="projectTwo"/>
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                        items-end text-right z-10">
                            <p className="font-titleFont text-textGreen mt-10 text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">2D Kirby Platformer Game</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                            This is a 2D platformer game I built to showcase my creativity for the game development 
                            contest I participated in 2019. I designed the assets using Pixilart and Piskel, 
                            while the game mechanics were developed in {" "} 
                            <span className="text-textGreen">C#</span> 
                            {" "} using Visual Studio and Unity.
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                            md:gap-5 justify-between text-textDark">
                                <li>C#</li>
                                <li>Piskel</li>
                                <li>Pixilart</li>
                                <li>Unity</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a 
                                className="hover:text-textGreen duration-300"
                                href="https://github.com/mksmw/2DKirbyGame/tree/master"
                                target="_blank">
                                    <TbBrandGithub />
                                </a>
                                <a 
                                className="hover:text-textGreen duration-300"
                                href="https://drive.google.com/drive/folders/1bYmp7STbwJJya0A5Tf-yep8X3lk_fyaY?usp=sharing"
                                target="_blank">
                                    <TbExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Three */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a 
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://drive.google.com/file/d/1NBAJTe7KnahO_5UCG7LYsctQsG9rr1u6/view?usp=sharing" 
                        target="_blank">
                            <div>
                                <Image className="w-full h-full object-contain rounded-lg 
                                hover:-translate-y-2 transition-transform duration-300 group"
                                    src={projectThree}
                                    alt="projectThree"/>
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                        items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen mt-10 text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">Network Management Solution</h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            Designed and developed a comprehensive network solution for a midsize 
                            business, utilizing {" "} 
                            <span className="text-textGreen">VMWare Fusion, GNS3, and MG-Soft MIB Browser</span> 
                            .{" "} Part of this project is to showcase my proficiency in Syslog, SNMP MIBwalk, 
                            and SNMP set/get operations.
                            </p>
                            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                            md:gap-5 justify-between text-textDark">
                                <li>Python</li>
                                <li>GNS3</li>
                                <li>VMWare</li>
                                <li>MG-Soft MIB</li>
                                <li>PRTG</li>
                                <li>Wireshark</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a 
                                className="hover:text-textGreen duration-300"
                                href="https://drive.google.com/file/d/1NBAJTe7KnahO_5UCG7LYsctQsG9rr1u6/view?usp=sharing"
                                target="_blank">
                                    <TbExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;