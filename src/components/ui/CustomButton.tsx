import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const CustomButton = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "bg-button_color text-[white] lg:text-lg md:text-md text-sm hover:text-white border border-gray-800 hover:bg-heading_color font-medium rounded-lg px-4 py-1.5 text-center",
      className
    )}
    {...props}
  />
));

CustomButton.displayName = "CustomButton";

export default CustomButton;
