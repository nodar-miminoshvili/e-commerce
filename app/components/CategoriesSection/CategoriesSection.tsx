import Link from 'next/link';
import Image from 'next/image';
import livingRoom from '@/public/CategoriesSection/livingRoom.jpg';
import skincare from '@/public/CategoriesSection/skincare.jpg';
import kitchen from '@/public/CategoriesSection/kitchen.jpg';
import electronics from '@/public/CategoriesSection/electronics.jpg';

const CategoriesSection = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 gap-3 h-[32rem] text-2xl text-white font-semibold px-5 md:grid-cols-8 md:grid-rows-2 lg:px-12 md:text-3xl 2xl:text-4xl">
        <Link
          href="#"
          className="relative flex items-end bg-[rgba(0,0,0,0.42)] md:col-span-4 md:row-span-2 rounded-md overflow-hidden transition-colors hover:bg-transparent category"
        >
          <Image
            src={livingRoom}
            alt="livingRoom"
            fill
            className="object-cover -z-10 object-right"
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 600px "
          />
          <h2 className="text-center w-full xs:text-start  xs:pl-4 mb-5 md:pl-5">Furniture</h2>
        </Link>
        <Link
          href="#"
          className="relative flex items-end bg-[rgba(0,0,0,0.42)] md:col-span-2 md:row-span-2 rounded-md overflow-hidden transition-colors hover:bg-transparent category"
        >
          <Image
            src={skincare}
            alt="skincare"
            fill
            className="object-cover -z-10 object-[center,10%]"
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 300px "
          />
          <h2 className="text-center w-full xs:text-start  xs:pl-4 mb-5 md:pl-5">Skincare</h2>
        </Link>
        <Link
          href="#"
          className="relative flex items-end bg-[rgba(0,0,0,0.42)] md:col-span-2 md:row-span-1 rounded-md overflow-hidden transition-colors hover:bg-transparent category"
        >
          <Image
            src={kitchen}
            alt="kitchen"
            fill
            className="object-cover -z-10"
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 300px "
          />
          <h2 className="text-center w-full xs:text-start  xs:pl-4 mb-5 md:pl-5">Kitchen</h2>
        </Link>
        <Link
          href="#"
          className="relative flex items-end bg-[rgba(0,0,0,0.42)] md:col-span-2 md:row-span-1 rounded-md overflow-hidden transition-colors hover:bg-transparent category"
        >
          <Image
            src={electronics}
            alt="electronics"
            fill
            className="object-cover -z-10"
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 300px "
          />
          <h2 className="text-center w-full xs:text-start  xs:pl-4 mb-5 md:pl-5">Electronics</h2>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
