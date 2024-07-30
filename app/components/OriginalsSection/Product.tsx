import Image from 'next/image';

const products = ({
  thumbnail,
  title,
  price,
}: {
  thumbnail: string;
  title: string;
  price: string;
}) => {
  return (
    <li className="border p-2 flex flex-col hover:border-black gap-2 sm:p-4 md:gap-5 ">
      <div className="relative basis-2/3 w-full min-h-28 h-auto aspect-square">
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
