import { motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types';

interface PageProps {
  imgSrc: string,
  layoutId: string
}

const Page: React.FC<PageProps> = ({ imgSrc, layoutId }) => (
  <div className="flex flex-col items-center">
    <motion.img src={imgSrc} layoutId={layoutId} transition={{ duration: 0.5 }} />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Link href="/">
        <button type="button" className="bg-gray-900 hover:bg-gray-700 transition text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl">
          Voltar para Home
        </button>
      </Link>
    </motion.div>
  </div>
);

Page.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  layoutId: PropTypes.string.isRequired,
};

export default Page;
