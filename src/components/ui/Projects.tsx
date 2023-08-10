import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

const ProjectsShell = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("xl:py-28 lg:py-24 md:py-20 py-16", className)}
    {...props}
  />
));

ProjectsShell.displayName = "ProjectsShell";

const ProjectsTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      `text-center font-normal 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl lg:pb-14 md:pb-8 pb-5 text-gray-800 ${bangers.className}`,
      className
    )}
    {...props}
  />
));

ProjectsTitle.displayName = "ProjectsTitle";

export { ProjectsShell, ProjectsTitle };
