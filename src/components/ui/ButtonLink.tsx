import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const ButtonLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "md:text-md 2xl:text-2x inline-block rounded-lg border border-gray-800 bg-button_color px-3 py-1 text-center text-sm font-medium text-bg_white hover:bg-heading_color md:px-4 md:py-1.5 md:transition md:duration-1000 md:ease-out md:hover:-translate-y-1 md:hover:duration-300 lg:text-lg xl:text-xl",
      className,
    )}
    {...props}
  />
));

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
