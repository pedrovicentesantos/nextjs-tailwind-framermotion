import { motion } from 'framer-motion';
import Card from '../components/Card';
import variants from '../utils/variants';

export default function Home() {
  return (
    <div>
      <motion.h1
        className="text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Construa sites modernos sem precisar sair do HTML.
      </motion.h1>
      <motion.div
        className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-24"
        transition={{
          delay: 2,
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Card href="/nextjs" imgSrc="/img/nextjs.svg" layoutId="nextjs-logo" />
        <Card href="/tailwind" imgSrc="/img/tailwind.svg" layoutId="tailwind-logo" />
        <Card href="/framermotion" imgSrc="/img/framermotion.svg" layoutId="framermotion-logo" />
      </motion.div>
    </div>
  );
}
