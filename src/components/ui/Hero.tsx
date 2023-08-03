import { FC } from "react";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
//Shells below are basically containers to wrap components
//Used cn for changing className from custom components

interface HeroImageProps {
  src: string;
}

const HeroShell = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "xl:py-[10vh] lg:py-24 md:py-14 py-11 flex items-center justify-center lg:flex-row flex-col xl:gap-10 lg:gap-20 md:gap-10 gap-4",
      className
    )}
    {...props}
  />
));

HeroShell.displayName = "HeroShell";

const HeroTextShell = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("xl:mb-24", className)} {...props} />
));

HeroTextShell.displayName = "HeroTextShell";

const HeroTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      `2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-gray-900 font-bold ${bangers.className}`,
      className
    )}
    {...props}
  />
));

HeroTitle.displayName = "HeroTitle";

const HeroSubTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:pt-0 pt-0 text-gray-800 font-semibold",
      className
    )}
    {...props}
  />
));

HeroSubTitle.displayName = "HeroSubTitle";

const HeroMessageShell = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("lg:mt-7 lg:mb-3 mt-2 mb-1", className)}
    {...props}
  />
));

HeroMessageShell.displayName = "HeroMessageShell";

const HeroMessage = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "2xl:text-4xl xl:text-2xl lg:text-2xl md:text-xl text-lg lg:max-w-md max-w-xs leading-relaxed",
      className
    )}
    {...props}
  />
));

HeroMessage.displayName = "HeroMessage";

const HeroImage: FC<HeroImageProps> = ({ src }) => (
  <Image
    src={src}
    width={550}
    height={550}
    alt="Hero image"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    priority={true}
    className="lg:max-h-full md:max-h-96 max-h-72 lg:max-w-3xl md:max-w-md max-w-xs object-cover object-top"
  />
);

HeroImage.displayName = "HeroImage";

export {
  HeroShell,
  HeroTextShell,
  HeroTitle,
  HeroSubTitle,
  HeroMessageShell,
  HeroMessage,
  HeroImage,
};
