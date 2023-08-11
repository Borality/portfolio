import { FC, ReactElement } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Bangers } from "next/font/google";
import Link from "next/link";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

interface ContactIconProps {
  href: string;
  icon: ReactElement<any, any>;
  tooltip: string;
}

const ContactTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      `text-gray-800 decoration-slate-700 text-center text-2xl underline decoration-4 underline-offset-4 md:text-3xl lg:text-5xl lg:decoration-8 ${bangers.className}`,
      className,
    )}
    {...props}
  />
));

ContactTitle.displayName = "ContactTitle";

const ContactIcon: FC<ContactIconProps> = ({ href, icon, tooltip }) => (
  <Link
    href={href}
    className="hover:text-gray-800 text-4xl md:tooltip md:tooltip-bottom md:text-6xl"
    data-tip={tooltip}
    target="_blank"
  >
    {icon}
  </Link>
);

export { ContactTitle, ContactIcon };
