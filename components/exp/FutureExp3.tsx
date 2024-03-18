import {motion} from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const FutureExp3 = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.1}}
            className="w=full">

            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Job Title
                <span className="text-textGreen tracking-wide">
                    @ {" "}
                    <a href="https://www.yourcompanysite.com" target="_blank" className="text-textGreen inline-flex relative cursor-pointer 
                            h-7 overflow-x-hidden group">
                        Company Name
                        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 
                            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                        </span>
                    </a>
                </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Date in - Date out
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nesciunt hic 
                    autem quidem, vero eius modi fuga qui, id minus dignissimos quisquam doloribus, 
                    fugit impedit nemo vel similique est facilis.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nesciunt hic.
                    Vero eius modi fuga qui, id minus dignissimos quisquam doloribus, 
                    fugit impedit nemo vel similique est facilis.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Id minus dignissimos quisquam doloribus, 
                    fugit impedit nemo vel similique est facilis.
                </li>
            </ul>


        </motion.div>
    );
};

export default FutureExp3;