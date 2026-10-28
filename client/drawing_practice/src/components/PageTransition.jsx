import { motion } from "motion/react"

export default function PageTransition({children}) {
    return(
        // <motion.div 
        //  initial={{opacity: 0, y: 10}} 
        //  animate={{opacity: 1, y: 0}} 
        //  exit={{opacity: 0, y: -10}} 
        //  transition={{duration: 0.3, ease: "easeInOut"}
        // }>
        //     {children}
        // </motion.div>

        <>
        {children}
        
        <motion.div
         className="slide-in"
         initial={{scaleX: 0}}
         animate={{scaleX: 0}}
         exit={{scaleX: 1}}
         transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        />
        <motion.div
         className="slide-out"
         initial={{scaleX: 1}}
         animate={{scaleX: 0}}
         exit={{scaleX: 0}}
         transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
        />
        </>
    );
}