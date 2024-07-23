import logo from '@/public/Header/logo.png';
import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-5">
      <span>
        <Image src={logo} alt="e-commerce logo" width={75} height={75} />
      </span>
      <Navigation />
    </header>
  );
};

export default Header;
