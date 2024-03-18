import React, {useState} from "react";
import Sectiontitle from "./Sectiontitle";
import Glassbeam from "./exp/Glassbeam";
import Sampoerna from "./exp/Sampoerna";
{/*
import FutureExp1 from "./exp/FutureExp1";
import FutureExp2 from "./exp/FutureExp2";
import FutureExp3 from "./exp/FutureExp3";
*/}

const Experience = () => {
    const [workExp1, setWorkExp1] = useState(false);
    const [workExp2, setWorkExp2] = useState(false);
    const [workExp3, setWorkExp3] = useState(false);
    const [workGlassbeam, setWorkGlassbeam] = useState(true);
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

    const handleExp3 = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(false);
        setWorkExp1(false);
        setWorkExp2(false);
        setWorkExp3(true);
    }
    */}

    const handleGlassbeam = () => {
        setWorkGlassbeam(true);
        setWorkSampoerna(false);
        setWorkExp1(false);
        setWorkExp2(false);
        setWorkExp3(false);
    }

    const handleSampoerna = () => {
        setWorkGlassbeam(false);
        setWorkSampoerna(true);
        setWorkExp1(false);
        setWorkExp2(false);
        setWorkExp3(false);
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
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Placeholder
                    </li>

                    <li 
                    onClick={handleExp2}
                    className={`${workExp2 
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Placeholder
                    </li>

                    <li 
                    onClick={handleExp3}
                    className={`${workExp3 
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Placeholder
                    </li>
                    */}
                    
                    <li 
                    onClick={handleGlassbeam}
                    className={`${workGlassbeam 
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Glassbeam
                    </li>

                    <li 
                    onClick={handleSampoerna}
                    className={`${workSampoerna 
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                     } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Sampoerna
                    </li>

                </ul>
                {/*
                {workExp1 && <FutureExp1 />}
                {workExp2 && <FutureExp2 />}
                {workExp3 && <FutureExp3 />}
                */}                
                {workGlassbeam && <Glassbeam />}
                {workSampoerna && <Sampoerna />}
            </div>
        </section>
    );
};

export default Experience;