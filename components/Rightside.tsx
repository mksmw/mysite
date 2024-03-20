import React from "react";

const Rightside = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-14 text-textLight">
            <a href="mailto:mksmw@protonmail.com">
                <p className="text-sm rotate-90 w-72 tracking-wide text-textLight hover:text-textOrDark cursor-pointer duration-300">
                    mksmw@protonmail.com
                </p>
            </a>
            <span className="w-[2px] h-32 bg-textLight inline-flex"></span>
        </div>
    );
};

export default Rightside;