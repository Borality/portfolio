import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

const ProjectsShell = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("py-16 md:py-20 lg:py-24 xl:py-28", className)}
    {...props}
  />
));

ProjectsShell.displayName = "ProjectsShell";

const ProjectsTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      `text-4xl font-normal text-heading_color md:text-5xl xl:text-6xl 2xl:text-7xl ${bangers.className}`,
      className,
    )}
    {...props}
  />
));

ProjectsTitle.displayName = "ProjectsTitle";

export { ProjectsShell, ProjectsTitle };
