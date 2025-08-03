'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FadeInUpOnScroll({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // lebih jauh ke bawah
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
