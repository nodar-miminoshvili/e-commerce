import Image from 'next/image';
import firstLamp from '@/public/lampsShowcase/lamp1.png';
import secondLamp from '@/public/lampsShowcase/lamp2.png';
import thirdLamp from '@/public/lampsShowcase/lamp3.png';
import fourthLamp from '@/public/lampsShowcase/lamp4.png';
import Lampsobserver from './LampsObserver';

const LampsShowcase = () => {
  return (
    <section className="container">
      <Lampsobserver />
      <div className="py-28 px-2.5 showcaseWrapper sm:px-5 md:px-10 md:py-32">
        <h2 className="text-3xl font-dosis font-semibold text-center sm:text-4xl lg:text-left">
          Let There Be Light
        </h2>
        <ul className="mt-8 flex gap-1 h-[10rem] w-full showcase justify-between xs:mt-12 sm:mt-12 md:h-[14rem] lg:h-[18rem] xl:h-[23rem]">
          <li className="w-72">
            <div className="relative w-full h-full bg-white">
              <Image
                src={firstLamp}
                alt="lamp"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </li>
          <li className="w-72">
            <div className="relative w-full h-full bg-white">
              <Image
                src={secondLamp}
                alt="lamp"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </li>
          <li className="w-72">
            <div className="relative w-full h-full bg-white">
              <Image
                src={thirdLamp}
                alt="lamp"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </li>
          <li className="w-72">
            <div className="relative w-full h-full bg-white">
              <Image
                src={fourthLamp}
                alt="lamp"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 25vw, 300px"
              />
            </div>
          </li>
        </ul>
        <div className="flex gap-5 items-center justify-center explore text-lg mt-8 xs:mt-12 sm:mt-14 sm:text-xl lg:text-2xl">
          <h3 className="text-default font-medium">Explore Lights & Lamps</h3>
          <button className="border border-[var(--lamps-heading-main)] text-[var(--lamps-heading-main)] font-dosis px-2 py-1 lg:px-3 lg:py-1.5  font-bold tracking-wide transition-colors hover:text-black hover:bg-[var(--lamps-heading-main)] ">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default LampsShowcase;
