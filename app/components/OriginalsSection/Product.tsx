import Image from 'next/image';

const products = ({
  thumbnail,
  title,
  price,
  forTrendingSection,
}: {
  thumbnail: string;
  title: string;
  price: string;
  forTrendingSection?: boolean;
}) => {
  return (
    <li
      className={`border border-[var(--theme-switcher-border)] p-2 flex flex-col hover:border-[var(--text-color-default)] gap-2 sm:p-4 md:gap-5 
    ${forTrendingSection && 'w-[16rem]'}`}
    >
      <div className="relative basis-2/3 w-full min-h-28 h-auto aspect-square bg-white">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-scale-down"
          sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 270px "
        />
      </div>

      <p className="mb-auto font-medium">{title}</p>
      <p className="mt-atuo text-lg font-semibold">${price}</p>
    </li>
  );
};

export default products;
