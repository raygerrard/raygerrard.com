import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
};

export const NavigationLink = ({ color, isSelected, onClick, label, path }) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Link to={path} className="relative cursor-pointer inline-block mx-8" onClick={onClick}>
                {isSelected && (
                    <motion.div
                        layoutId="outline"
                        className="absolute border-solid border-2 -left-4 -right-4 -top-2 -bottom-2"
                        initial={false}
                        animate={{ borderColor: color }}
                        transition={spring}
                    >
                    </motion.div>
                )}
                <span className="uppercase font-bold">{label}</span>
            </Link>
        </motion.div>
    );
};