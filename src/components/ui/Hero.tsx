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
  <section
    ref={ref}
    className={cn(
      "flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center gap-8 md:min-h-[calc(100vh-3.5rem)] md:gap-10 lg:flex-row lg:gap-16 xl:gap-24",
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
      `text-5xl font-normal text-heading_color md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl ${bangers.className}`,
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
      "text-3xl font-semibold tracking-tight text-subheading_color md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
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
      "text-lg/tight md:text-xl/tight lg:text-2xl/tight xl:text-3xl/tight 2xl:text-4xl/tight",
      className,
    )}
    {...props}
  />
));

HeroMessage.displayName = "HeroMessage";

const HeroImage: FC<HeroImageProps> = ({ src }) => (
  <Image
    src={src}
    width={496}
    height={496}
    alt="Hero image"
    priority={true}
    sizes="(min-width: 1280px) 496px, (min-width: 1040px) 400px, (min-width: 780px) 352px, (min-width: 400px) 320px, calc(56.25vw + 106px)"
    className="h-auto w-full max-w-[20rem] rounded-bl-[5rem] rounded-tr-[5rem] md:w-screen md:max-w-[22rem] lg:max-w-[25rem] lg:drop-shadow-[0_0_1rem_#1d82f9] xl:max-w-[31rem]"
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
