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
      "flex flex-col items-center justify-center gap-6 md:gap-10 lg:flex-row lg:gap-20 xl:gap-10 md:h-[calc(100vh-3.5rem)] h-[calc(100vh-3rem)]",
      className,
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
      `text-5xl font-normal text-heading_color md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl ${bangers.className}`,
      className,
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
      "text-2xl font-semibold text-subheading_color md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
      className,
    )}
    {...props}
  />
));

HeroSubTitle.displayName = "HeroSubTitle";

const HeroMessage = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg leading-relaxed md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl",
      className,
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
    className="max-h-72 max-w-xs object-cover object-top md:max-h-96 md:max-w-md lg:max-h-full lg:max-w-3xl"
  />
);

HeroImage.displayName = "HeroImage";

export {
  HeroShell,
  HeroTextShell,
  HeroTitle,
  HeroSubTitle,
  HeroMessage,
  HeroImage,
};
