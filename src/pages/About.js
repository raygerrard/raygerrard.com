import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import me from '../images/me.jpg';

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0, ...transition } }
};

const About = () => {
    return (
        <motion.div className="h-full flex single" initial="exit" animate="enter" exit="exit">
            <motion.div className="back" variants={backVariants}>
                <div className="h-full">
                    <div className="container mx-auto max-w-2xl">
                        <img src={me} alt="Ray Gerrard" className="w-32 sm:w-60 mx-auto border-8 mb-8 rounded-full" />

                        <h1 className="text-sans tracking-widest text-4xl text-white uppercase font-extralight mb-8 text-center">
                            Hi, I'm <span className="text-green font-bold">Ray Gerrard</span>.<br />
                            <span className="text-white text-opacity-25">I'm a front-end developer.</span>
                        </h1>

                        <div className="mt-8 text-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact">
                                    <div className="inline-block border px-10 border-green p-4 mb-1 text-white uppercase font-sans font-bold tracking-widest">
                                        get in touch
                                    </div>
                                </Link>
                            </motion.div>
                            <div className="text-white my-2 font-bold italic">
                                <span className="inline-block w-10 h-1 mr-4 bg-white"></span>
                                or
                                <span className="inline-block w-10 h-1 ml-4 bg-white"></span>
                            </div>
                            <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a href="/cv.pdf" className="text-white underline">download cv</a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;