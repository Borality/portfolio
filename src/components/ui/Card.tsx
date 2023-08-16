import { FC } from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  hrefWebsite: string;
  hrefCode: string;
  id: string;
}

interface CardImageProps {
  src: string;
  alt: string;
}

const CardTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold tracking-tight text-paragraph_color lg:mb-2 lg:text-2xl xl:text-3xl 2xl:text-4xl",
      className,
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm/tight text-gray-600 lg:text-lg/tight xl:text-xl/tight 2xl:text-2xl/tight",
      className,
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardImage: FC<CardImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    width={576}
    height={160}
    alt={alt}
    sizes="(min-width: 1400px) 576px, (min-width: 1040px) calc(34.41vw + 101px), (min-width: 780px) 576px, (min-width: 600px) 512px, calc(84.64vw + 21px)"
    className="max-h-36 object-cover object-top md:max-h-40"
  />
);

const Card: FC<CardProps> = (props) => {
  const { image, alt, title, description, hrefWebsite, hrefCode } = props;
  return (
    <section className="bg-bg_color max-w-lg shadow-xl md:max-w-xl lg:max-w-xl">
      <CardImage src={image} alt={alt} />
      <div className="mx-2 max-w-[70ch] md:mx-4">
        <CardTitle className="mt-1 md:mt-2">{title}</CardTitle>
        <CardDescription className="mb-4 mt-2 md:mb-8 md:mt-4">
          {description}
        </CardDescription>
        <div className="mb-3 flex justify-start gap-2 md:mb-5 md:gap-5">
          <ButtonLink href={hrefWebsite} target="_blank">
            Website
          </ButtonLink>
          <ButtonLink href={hrefCode} target="_blank">
            Code
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Card;
