'use client';

import {motion} from 'framer-motion';

export default function PageReveal({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{y: 300, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
    >
      {children}
    </motion.div>
  );
}
