import logo from '@/public/Header/logo.png';
import Image from 'next/image';
import Navigation from './Navigation';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ selectedTheme }: { selectedTheme: Theme }) => {
  return (
    <header className="container z-20 flex items-center justify-between px-5 lg:px-12 py-3 sticky top-0 ">
      <span>
        <Image
          src={logo}
          alt="e-commerce logo"
          width={64}
          height={64}
          className="w-[4rem] h-[4rem]"
          priority
        />
      </span>
      <div className="flex gap-8 items-center">
        <ThemeSwitcher selectedTheme={selectedTheme} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
