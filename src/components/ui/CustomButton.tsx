import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const CustomButton = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "md:text-md border-gray-800 rounded-lg border bg-button_color px-4 py-1.5 text-center text-sm font-medium text-[white] hover:bg-heading_color lg:text-lg",
      className,
    )}
    {...props}
  />
));

CustomButton.displayName = "CustomButton";

export default CustomButton;
