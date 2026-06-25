import React, {useState} from "react";
import Sectiontitle from "./Sectiontitle";
import Glassbeam from "./exp/Glassbeam";
import Sampoerna from "./exp/Sampoerna";
import Chitosan from "./exp/Chitosan";
{/*
import FutureExp1 from "./exp/FutureExp1";
import FutureExp2 from "./exp/FutureExp2";
*/}

const Experience = () => {
    const [workExp1, setWorkExp1] = useState(false);
    const [workExp2, setWorkExp2] = useState(false);
    const [workChitosan, setWorkChitosan] = useState(true);
    const [workGlassbeam, setWorkGlassbeam] = useState(false);
    const [workSampoerna, setWorkSampoerna] = useState(false);

    {/*
    const handleExp1 = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(false);
        setWorkExp1(true);
        setWorkExp2(false);
        setWorkExp3(false);
    }

    const handleExp2 = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(false);
        setWorkExp1(false);
        setWorkExp2(true);
        setWorkExp3(false);
    }
    */}

    const handleChitosan = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(false);
        setWorkChitosan(true);
        setWorkExp1(false);
        setWorkExp2(false);
    }

    const handleGlassbeam = () => {
        setWorkGlassbeam(true);
        setWorkSampoerna(false);
        setWorkChitosan(false);
        setWorkExp1(false);
        setWorkExp2(false);
    }

    const handleSampoerna = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(true);
        setWorkChitosan(false);
        setWorkExp1(false);
        setWorkExp2(false);
    }

    return (
        <section 
        id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
            <Sectiontitle title="Where I've Worked" titleNo="02" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">

                    {/*
                    <li 
                    onClick={handleExp1}
                    className={`${workExp1 
                        ? "border-l-textOrDark text-textOrDark"
                        : "border-l-hoverColor text-textLight"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Placeholder
                    </li>

                    <li 
                    onClick={handleExp2}
                    className={`${workExp2 
                        ? "border-l-textOrDark text-textOrDark"
                        : "border-l-hoverColor text-textLight"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Placeholder
                    </li>
                    */}

                    <li 
                    onClick={handleChitosan}
                    className={`${workChitosan 
                        ? "border-l-textOrDark text-textOrDark"
                        : "border-l-hoverColor text-textLight"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        BCI
                    </li>
                    
                    <li 
                    onClick={handleGlassbeam}
                    className={`${workGlassbeam 
                        ? "border-l-textOrDark text-textOrDark"
                        : "border-l-hoverColor text-textLight"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Glassbeam
                    </li>

                    <li 
                    onClick={handleSampoerna}
                    className={`${workSampoerna 
                        ? "border-l-textOrDark text-textOrDark"
                        : "border-l-hoverColor text-textLight"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Sampoerna
                    </li>

                </ul>
                {/*
                {workExp1 && <FutureExp1 />}
                {workExp2 && <FutureExp2 />}
                */}
                {workChitosan && <Chitosan />}
                {workGlassbeam && <Glassbeam />}
                {workSampoerna && <Sampoerna />}
            </div>
        </section>
    );
};

export default Experience;