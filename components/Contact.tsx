import React from "react";

const Contact = () => {
    return (
        <section 
        id="contact"
        className="max-w-contentContainer mx-auto py-10 xl:py-32 flex 
        flex-col gap-4 items-center justify-center">

            <p className="font-titleFont text-lg text-textGreen font-semibold flex 
            items-center tracking-wide">
                04. What's Next?
            </p>

            <h2 className="font-titleFont text-5xl font-semibold">
                Get In Touch
            </h2>

            <p className="max-w-[600px] text-center text-textDark">
                Whether you have a question or just want to say hi, I'm all ears!
                Drop me a line, shoot me an email, or send a carrier pigeon my way.
                I will respond as soon as possible.
            </p>

            <a href="mailto:mksmw@protonmail.com">
                <button className="w-40 h-14 border border-textGreen mt-6 
                font-titleFont text-sm text-textGreen tracking-wider rounded-md 
                hover:bg-hoverColor duration-300">
                    Say Hello
                </button>
            </a>
            

        </section>
    );
};

export default Contact;