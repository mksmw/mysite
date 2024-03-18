import { useState } from "react";
import {motion} from "framer-motion";
import Archivecard from "./Archivecard";

const Archive = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">
                    Other Noteworthy Projects
                </h2>
                <p className="text-sm font-titleFont text-textGreen mt-3">
                    View the archive
                </p>
            </div>

            {/* Archive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
            gap-6 mt-10 lgl:px-10">
                <Archivecard 
                title="Personal Website V1"
                des="This is my first portfolio website I coded from scratch using NextJS, 
                TypeScript, and Tailwind CSS. It serves as a hands-on learning experience 
                in web development, drawing inspiration from the collective work of other great web developers."
                listItem={["NextJS", "Vercel", "TypeScript", "Tailwind"]}
                link="https://github.com/mksmw/mysite"/>

                <Archivecard 
                title="Keylogger Implementation & Analysis"
                des="As a part of the final project for my Information Security class,
                my team and I conducted comprehensive research to evaluate the 
                functionality and deployment methods of various types of keyloggers."
                listItem={["PyCharm", "Python", ""]}
                link="https://drive.google.com/file/d/18Mb0JgqjyVH9NXUHnZFRyWsIfFNOpHt-/view?usp=sharing"/>

                <Archivecard 
                title="Spotify Playlist Downloader"
                des="Apple music once deleted all of my playlists after I canceled their subscription.
                So I created a python script that downloads all of my Spotify playlists into locally saved 
                MP3 files as a preventative measure."
                listItem={["PyCharm", "Python", ""]}
                link="https://github.com/mksmw/SpotifyPlaylistConverter"/>

                <Archivecard 
                title="MASM & Irvine32 Setup Tutorial"
                des="I remember taking an assembly class back in college and
                having a hard time setting up my assembly environment. So I 
                created a tutorial for people going through the same thing I did."
                listItem={["VS Code", "x86 Assembly", "Irvine"]}
                link="https://www.youtube.com/watch?v=bHmQJLXZf00"/>

                <Archivecard 
                title="Product Management Database App"
                des="This is an intuitive and interactive Java application to streamline product 
                management from the client side to the backend. Designed using BCNF 
                structure to maintain data integrity and minimize errors."
                listItem={["Java", "MySQL", "JDBC"]}
                link="https://github.com/mksmw/ProductManagementDB"/>

                <Archivecard 
                title="Proof of Concept for a New Business Opportunity"
                des="This proof of concept showcases my extensive research on the emerging business 
                opportunities arising from the long-lasting impact of COVID-19 on Indonesia's growing economy and food insecurity."
                listItem={["Google Doc", "Adobe XD", "Gantt"]}
                link="https://drive.google.com/file/d/1TigHgpQRuNLDxEwELhQlK8ojECYLyCG9/view?usp=sharing"/>

                {
                    showMore && (
                        <>
                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.1}}>
                                <Archivecard 
                                title="Google Maps & SQLite Android App"
                                des="This is an Android mobile app to store and retrieve 
                                Google Maps locations in the SQLite database using Google Maps Android API v2."
                                listItem={["Java", "Android Studio", "SQLite"]}
                                link="https://bitbucket.org/mksmw/google-maps-sqlite/src/master/"/>
                            </motion.div>

                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.2}}>
                                <Archivecard 
                                title="Accelerometer Basketball Android App"
                                des="An Android mobile game that uses the phone's built-in accelerometer to 
                                enhance user interaction & elevate the overall user experience."
                                listItem={["Java", "BitBucket", "Android Studio"]}
                                link="https://bitbucket.org/mksmw/accelerometer-basketball-app/src/master/"/>
                            </motion.div>

                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.3}}>
                                <Archivecard 
                                title="Dave Runner 2D"
                                des="This is my version of the well-known T-rex runner game from the infamous 404 page 
                                (with a slight twist to the model). All assets were made using Piskel, except for the track."
                                listItem={["Piskel", "PyCharm", "Python"]}
                                link="https://github.com/mksmw/DaveChrome"/>
                            </motion.div>

                            {/*
                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.4}}>
                                <Archivecard 
                                title="Placeholder Project"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Est doloribus ducimus libero. Ipsam eveniet sed officiis 
                                sint ut possimus soluta."
                                listItem={["Tool1", "Tool2", "Tool3", "Tool4"]}
                                link="https://yourproject.com"/>
                            </motion.div>
                            
                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.5}}>
                                <Archivecard 
                                title="Placeholder Project"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Est doloribus ducimus libero. Ipsam eveniet sed officiis 
                                sint ut possimus soluta."
                                listItem={["Tool1", "Tool2", "Tool3", "Tool4"]}
                                link="https://yourproject.com"/>
                            </motion.div>

                            <motion.div
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{delay:0.6}}>
                                <Archivecard 
                                title="Placeholder Project"
                                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Est doloribus ducimus libero. Ipsam eveniet sed officiis 
                                sint ut possimus soluta."
                                listItem={["Tool1", "Tool2", "Tool3", "Tool4"]}
                                link="https://yourproject.com"/>
                            </motion.div>
                            */}
                        </>
                    )
                }
            </div>
            <div className="mt-12 flex items-center justify-center">
                {
                    showMore ? <button 
                    onClick={() => setShowMore(false)}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] 
                    border border-textGreen hover:bg-hoverColor duration-300">
                        Show Less
                    </button> : <button 
                    onClick={() => setShowMore(true)}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] 
                    border border-textGreen hover:bg-hoverColor duration-300">
                        Show More
                    </button>
                }
            </div>
        </div>
    );
};

export default Archive;