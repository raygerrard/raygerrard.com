import { motion } from "framer-motion";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0, ...transition } }
};

const Contact = () => {
    return (
        <motion.div className="h-full lg:justify-center lg:items-center flex single" initial="exit" animate="enter" exit="exit">
            <motion.div className="back" variants={backVariants}>
                <div className="h-full">
                    <h2 className="text-sans tracking-wider text-orange text-xl uppercase font-bold">
                        contact
                    </h2>
                    <h1 className="text-sans tracking-widest text-6xl mb-8 text-white uppercase font-bold">
                        Get in touch
                    </h1>

                    <p className="mb-4">
                        <EmailIcon style={{ color: '#fff' }} />
                        <span className="text-white ml-8">ray@uiinfinity.com</span>
                    </p>
                    <p>
                        <PhoneIphoneIcon style={{ color: '#fff' }} />
                        <span className="text-white ml-8">07512081501</span>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;