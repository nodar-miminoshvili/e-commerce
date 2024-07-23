import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';
import { RiMenu3Line as FriesIcon } from 'react-icons/ri';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-9">
        <li className="grid place-content-center">
          <button>
            <CartIcon className="text-[1.7rem]" />
          </button>
        </li>
        <li className="grid place-content-center">
          <button className="">
            <FriesIcon className="text-[1.5rem]" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
