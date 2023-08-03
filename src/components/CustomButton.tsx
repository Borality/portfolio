import { cn } from "@/lib/utils";
import { forwardRef } from "react";


const CustomButton = forwardRef<
HTMLAnchorElement,
React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
    <a
      ref = {ref}
      className={cn(
        "lg:text-lg md:text-md text-sm text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-700 font-medium rounded-lg px-4 py-1.5 text-center",
        className
      )}
      {...props}
    />
));

export default CustomButton;
