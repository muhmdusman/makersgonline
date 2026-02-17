"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
   children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
   const pathname = usePathname();

   // Scroll to top on route change
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const variants = {
      hidden: {
         opacity: 0,
         y: 20,
      },
      enter: {
         opacity: 1,
         y: 0,
      },
      exit: {
         opacity: 0,
         y: -20,
      },
   };

   return (
      <AnimatePresence mode="wait" initial={false}>
         <motion.div
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{
               duration: 0.4,
               ease: "easeInOut",
            }}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
};

export default PageTransition;
