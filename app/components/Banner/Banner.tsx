import Image from 'next/image';
import firstBanner from '@/public/banners/bannerFirst.jpg';
import secondBanner from '@/public/banners/bannerSecond.jpg';

const Banner = ({ order }: { order: 'first' | 'second' }) => {
  const bannerContent = {
    first: {
      title: 'Creative harmonious living',
      text: 'Elevate your home with our exquisite furniture, designed for creative harmonious living. Transform your space today!',
      image: firstBanner,
    },
    second: {
      title: 'Comfortable & Elegant Living.',
      text: 'Transform your home with our luxurious furniture, designed for Comfortable & Elegant Living. Experience refined comfort!',
      image: secondBanner,
    },
  };
  return (
    <div className="container py-16 text-black ">
      <div
        className={`flex ${
          order === 'second' ? 'flex-col-reverse sm:flex-row-reverse' : 'flex-col sm:flex-row'
        } h-[25rem] px-6`}
      >
        <div className=" bg-[var(--banner-bg)] p-8 basis-3/5 sm:grid place-content-center md:p-12 xl:p-16 2xl:p-20">
          <h3 className="text-3xl font-semibold mb-3">{bannerContent[order].title}</h3>
          <p className="mb-3.5">{bannerContent[order].text}</p>
          <button
            className="block w-max font-semibold text-lg 
          px-2 py-1.5 border border-black hover:border-[var(--text-color-default)] 
          transition-colors text-white bg-black 
          hover:text-[var(--text-color-default)] hover:bg-transparent"
          >
            Shop Now
          </button>
        </div>
        <div className="relative basis-2/5 min-h-[50%] ">
          <Image
            src={bannerContent[order].image}
            alt="minimalistic shelves"
            fill
            sizes="(max-width: 640px) 95vw, (max-width: 1280px) 50vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
