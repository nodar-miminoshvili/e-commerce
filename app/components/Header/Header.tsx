import logo from '@/public/Header/logo.png';
import Image from 'next/image';
import Navigation from './Navigation';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ selectedTheme }: { selectedTheme: Theme }) => {
  return (
    <header className="flex items-center justify-between px-5 py-5">
      <span>
        <Image
          src={logo}
          alt="e-commerce logo"
          width={72}
          height={72}
          className="w-[4.5rem] h-[4.5rem]"
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
