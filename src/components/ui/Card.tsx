import { FC } from "react";
import CustomButton from "./CustomButton";
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
  <h2 className="text-md mb-1 font-semibold tracking-tight text-paragraph_color sm:text-lg md:text-xl lg:mb-2 lg:text-2xl xl:text-3xl 2xl:text-4xl">
    {title}
  </h2>
);

const CardDescription: FC<CardDescriptionProps> = ({ description }) => (
  <p className="text-xs leading-relaxed text-gray-600 sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
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
      sizes="100vw"
      priority={true}
      className="max-h-36 object-cover object-top md:max-h-40"
    />
  </figure>
);

const Card: FC<CardProps> = (props) => {
  const { image, alt, title, description, hrefWebsite, hrefCode } = props;
  return (
    <div className="card card-compact min-h-full max-w-lg bg-bg_color shadow-xl md:max-w-xl lg:max-w-xl">
      <CardImage src={image} alt={alt} />
      <div className="card-body">
        <CardTitle title={title} />
        <CardDescription description={description} />
        <div className="card-actions mb-1 flex justify-center gap-2 md:mb-2 md:gap-4">
          <CustomButton href={hrefWebsite} target="_blank">
            Website
          </CustomButton>
          <CustomButton href={hrefCode} target="_blank">
            Code
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
