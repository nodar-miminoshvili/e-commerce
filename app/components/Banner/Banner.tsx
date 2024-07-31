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
    <div className="container py-16 overflow-hidden   ">
      <div className={`flex flex-col ${order === 'second' && 'flex-row-reverse'} px-6 sm:flex-row`}>
        <div className=" bg-[#e9e9e9] p-8">
          <h3 className="text-3xl font-semibold mb-3">{bannerContent[order].title}</h3>
          <p className="mb-3.5">{bannerContent[order].text}</p>
          <button className="font-semibold text-lg px-2 py-1.5 border border-[var(--text-color-default)] transition-colors text-[var(--text-color-iverse)] bg-[var(--text-color-default)] hover:text-[var(--text-color-default)] hover:bg-transparent">
            Shop Now
          </button>
        </div>
        <Image
          src={bannerContent[order].image}
          alt="minimalistic shelves"
          width={600}
          height={600}
          className="basis-1/2"
        />
      </div>
    </div>
  );
};

export default Banner;
