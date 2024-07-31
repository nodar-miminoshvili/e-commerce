import Image from 'next/image';
import techSuggestion from '@/public/banners/techSuggestion.jpeg';

const SugesstionBanner = () => {
  return (
    <li className="gap-5 flex col-span-2 py-5 px-5 xl:p-8 xl:gap-8 ">
      <Image
        src={techSuggestion}
        alt="electronic devices"
        width={1024}
        height={1024}
        className="w-2/5 md:w-[45%] h-auto rounded-md object-cover maskBanner"
      />
      <div className="self-center">
        <h3 className="text-xl font-medium md:text-2xl">Upgrade Your Life with Tech!</h3>
        <button className="mt-5 font-semibold text-lg border border-[var(--text-color-default)] px-2 py-1.5 transition-colors text-[var(--text-color-iverse)] bg-[var(--text-color-default)] hover:text-[var(--text-color-default)] hover:bg-transparent">
          View More
        </button>
      </div>
    </li>
  );
};

export default SugesstionBanner;
