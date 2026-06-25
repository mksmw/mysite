import {motion} from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Glassbeam = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.1}}
            className="w=full">

            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Technical Solutions Engineer 
                <span className="text-textOrDark tracking-wide">
                    @
                    <a href="https://www.glassbeam.com/" target="_blank" className="text-textOrDark inline-flex relative cursor-pointer 
                            h-7 overflow-x-hidden group">
                        Glassbeam
                        <span className="absolute w-full h-[1px] bg-textOrDark left-0 bottom-1 
                            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                        </span>
                    </a>
                </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textLight">
                February 2022 - March 2025
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Designed and developed a highly efficient software deployment tool using Pascal, reducing onboarding time by 93% from 30 minutes to just under 2 minutes.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Built and integrated a secure monitoring system within Glassbeam&apos;s proprietary software, enabling remote access, monitoring, and configuration of hospital equipment.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Built a suite of API integrations to efficiently retrieve, parse, and upload data across diverse client servers, transforming it into structured, readable formats for downstream visualization.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Managed and optimized multiple AWS instances, implementing monitoring strategies to maximize uptime and ensure seamless operations.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Configured and administered a large network of gateways and monitoring sensors for hospital equipment, feeding real-time data into Glassbeam&apos;s software to flag anomalies based on historical trends.
                </li>
            </ul>


        </motion.div>
    );
};

export default Glassbeam;