import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const CustomButton = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "md:text-md rounded-lg border border-gray-800 bg-button_color px-4 py-1.5 text-center text-sm font-medium text-[white] hover:bg-heading_color md:transition md:duration-1000 md:ease-out md:hover:-translate-y-1 md:hover:duration-300 lg:text-lg",
      className,
    )}
    {...props}
  />
));

CustomButton.displayName = "CustomButton";

export default CustomButton;
