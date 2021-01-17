import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
    <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />

    <nav className="hidden md:block space-x-8">
      <Link href="/nextjs">
        <button type="button" className="tracking-wide hover:text-gray-300">Next.js</button>
      </Link>
      <Link href="/tailwind">
        <button type="button" className="tracking-wide hover:text-gray-300">TailwindCSS</button>
      </Link>
      <Link href="/framermotion">
        <button type="button" className="tracking-wide hover:text-gray-300">Framer Motion</button>
      </Link>
    </nav>
  </header>
);

export default Header;
