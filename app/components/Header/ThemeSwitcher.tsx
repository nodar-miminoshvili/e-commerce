'use client';

import { switchTheme } from '@/lib/Actions';
import { GoMoon as MoonIcon } from 'react-icons/go';
import { HiOutlineSun as SunIcon } from 'react-icons/hi2';
import { RiComputerLine as SystemIcon } from 'react-icons/ri';

const ThemeSwitcher = ({ selectedTheme }: { selectedTheme: Theme }) => {
  return (
    <ul className="themeSwitcher flex justify-between items-center w-[6.25rem] px-1 py-1 rounded-[100vw] border text-[1.125rem] text-gray-500">
      <li
        className={`${
          selectedTheme === 'dark' && 'active'
        } p-1.5 w-7 h-7 rounded-full grid place-content-center`}
      >
        <button onClick={() => switchTheme('dark')}>
          <MoonIcon />
        </button>
      </li>
      <li
        className={`${
          selectedTheme === 'system' && 'active'
        } p-1.5 w-7 h-7 rounded-full grid place-content-center text-[1rem]`}
      >
        <button onClick={() => switchTheme('system')}>
          <SystemIcon />
        </button>
      </li>
      <li
        className={`${
          selectedTheme === 'light' && 'active'
        } p-1.5 w-7 h-7 rounded-full grid place-content-center `}
      >
        <button onClick={() => switchTheme('light')}>
          <SunIcon />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
