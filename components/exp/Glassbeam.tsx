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
                Backend Developer 
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
                February 2022 - February 2025
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Developed a suite of API automation tools to efficiently retrieve, 
                    parse, and upload data across diverse client servers.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Designed and implemented a Pascal-based installer, achieving a 93% improvement 
                    in deployment efficiency. Reduced Glassbeam&apos;s proprietary software installation 
                    time from 30 minutes to under 2 minutes.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Integrated a Real-Time Location System (RTLS) into Glassbeam&apos;s 
                    proprietary software, employing cutting-edge BLE technology to monitor the precise location and movement of healthcare devices within the building.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Oversaw and maintained an array of AWS servers to ensure seamless 
                    and uninterrupted server operations. 
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Conducted experiments, trained models, analyzed results, and documented findings to advise on implementation strategies and configurations.
                </li>
            </ul>


        </motion.div>
    );
};

export default Glassbeam;