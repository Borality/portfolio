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
      "text-lg leading-tight md:text-xl md:leading-tight lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight 2xl:text-4xl 2xl:leading-tight",
      className,
    )}
    {...props}
  />
));

HeroMessage.displayName = "HeroMessage";

const HeroImage: FC<HeroImageProps> = ({ src }) => (
  <Image
    src={src}
    width={1000}
    height={1000}
    alt="Hero image"
    sizes="100vw"
    priority={true}
    className="h-auto max-w-[20rem] rounded-bl-[5rem] rounded-tr-[5rem] md:max-w-[25rem] lg:max-w-[500px] lg:drop-shadow-[0_0_1rem_#1d82f9]"
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
