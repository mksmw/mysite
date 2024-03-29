import React from "react";
import { TbFolderCode } from "react-icons/tb";
import { TbExternalLink } from "react-icons/tb";

interface Props{
    title: string;
    des: string;
    listItem: string[];
    link: string;
}

const Archivecard = ({title, des, listItem, link}: Props) => {
    return (
        <a href={link} target="_blank">
            <div className="w-full h-80 rounded-lg bg-[#3F608A] p-7
            flex flex-col justify-center gap-6 hover:-translate-y-2 
            transition-transform duration-300 group">
                <div className="flex justify-between items-center">
                    <TbFolderCode className="text-4xl text-textOrDark"/>
                    <TbExternalLink className="text-4xl hover:text-textOrDark"/>
                </div>
                <div>
                    <h2 className="text-xl font-titleFont font-semibold 
                    tracking-wide group-hover:text-textOrDark">
                        {title}
                    </h2>
                    <p className="text-sm mt-3">
                        {des}
                    </p>
                    <ul className="text-xs mt-3 mdl:text-sm text-textOrlight flex items-center gap-2
                    justify-between flex-wrap">
                        {listItem.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    );
};

export default Archivecard;