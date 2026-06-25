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
                IT & Process Improvement Manager
                <span className="text-textOrDark tracking-wide">
                    @
                    <a href="https://biochitosanindonesia.com/" target="_blank" className="text-textOrDark inline-flex relative cursor-pointer 
                            h-7 overflow-x-hidden group">
                        Bio Chitosan
                        <span className="absolute w-full h-[1px] bg-textOrDark left-0 bottom-1 
                            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
                        </span>
                    </a>
                </span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textLight">
                April 2025 - June 2026
            </p>

            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Evaluated and deployed a centralized Odoo ERP solution, replacing legacy spreadsheet-based processes with automated, cross department data tracking using Python and PostgreSQL.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Managed the company’s core IT infrastructure including network equipment, cloud services, backups, email systems, and user access management, ensuring stable network uptime for all internal software tools.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Collaborated with production, accounting, and sales teams to review daily plant operations, fix workflow bottlenecks, and cut down batch approval delays between production and quality assurance teams.
                </li>
                <li className="text-base flex gap-2 text-textLight">
                    <span className="text-textOrDark mt-1">
                        <IoArrowRedoSharp />
                    </span>
                    {" "}
                    Built internal dashboards using Python, Pandas, and Streamlit to automate reporting and track real-time inventory levels, customer orders, and purchasing activity.
                </li>
            </ul>


        </motion.div>
    );
};

export default FutureExp3;