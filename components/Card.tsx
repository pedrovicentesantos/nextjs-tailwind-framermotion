import { motion } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types';
import variants from '../utils/variants';

interface CardProps {
  href: string,
  imgSrc: string,
  layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => (
  <Link href={href}>
    <motion.div
      className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
      variants={variants}
    >
      <motion.img
        src={imgSrc}
        className="w-full h-full"
        layoutId={layoutId}
      />
    </motion.div>
  </Link>
);

Card.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  layoutId: PropTypes.string.isRequired,
};

export default Card;
