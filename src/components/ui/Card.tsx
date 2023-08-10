import { FC } from "react";
import Button from "./Button";
import Image from "next/image";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  hrefWebsite: string;
  hrefCode: string;
  id: string;
}

interface CardTitleProps {
  title: string;
}

interface CardDescriptionProps {
  description: string;
}

interface CardImageProps {
  src: string;
  alt: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }) => (
  <h2 className=" text-gray-700 font-semibold mb-1 lg:mb-2 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md">
    {title}
  </h2>
);

const CardDescription: FC<CardDescriptionProps> = ({ description }) => (
  <p className="text-gray-600 leading-relaxed 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-xs">
    {description}
  </p>
);

const CardImage: FC<CardImageProps> = ({ src, alt }) => (
  <figure>
    <Image
      src={src}
      width={600}
      height={600}
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={true}
      className="object-cover object-top md:max-h-40 max-h-36"
    />
  </figure>
);

const Card: FC<CardProps> = (props) => {
  const { image, alt, title, description, hrefWebsite, hrefCode } = props;
  return (
    <div className="card card-compact bg-neutral-50 shadow-xl lg:max-w-xl md:max-w-xl max-w-lg min-h-full ease-out transition duration-1000 hover:duration-300 hover:-translate-y-3">
      <CardImage src={image} alt={alt} />
      <div className="card-body">
        <CardTitle title={title} />
        <CardDescription description={description} />
        <div className="card-actions flex justify-center md:mb-2 mb-1 md:gap-4 gap-2">
          <Button href={hrefWebsite} target="_blank">
            Website
          </Button>
          <Button href={hrefCode} target="_blank">
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
