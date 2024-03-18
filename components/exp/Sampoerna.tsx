import {motion} from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Sampoerna = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.1}}
            className="w=full">

            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                SAP Developer Intern
                <span className="text-textGreen tracking-wide">
                    @ {" "}
                    <a href="https://www.sampoerna.com/en/home" target="_blank" className="text-textGreen inline-flex relative cursor-pointer 
                            h-7 overflow-x-hidden group">
                        Sampoerna
                        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
                            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                        </span>
                    </a>
                </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                January 2020 - June 2020
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Developed advanced automation tools with Visual Basic and ABAP to 
                    streamline the upload of extensive sales data into the SAP database, improving efficiency.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Achieved an 80% reduction in the average time required to upload the supply 
                    and chain's weekly volume into the MF50 SAP production planning table, surpassing 
                    the upload time goal by 16% and decreasing the time from 2 hours to 5 minutes.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Resolved production issues by performing root cause analysis and providing timely 
                    solutions, ensuring minimal impact on business operations.
                </li>
            </ul>


        </motion.div>
    );
};

export default Sampoerna;