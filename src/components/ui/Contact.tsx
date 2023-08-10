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
      `lg:text-5xl md:text-3xl text-2xl text-center underline underline-offset-4 lg:decoration-8 decoration-4 text-gray-800 decoration-slate-700 ${bangers.className}`,
      className
    )}
    {...props}
  />
));

ContactTitle.displayName = "ContactTitle";

const ContactIcon: FC<ContactIconProps> = ({ href, icon, tooltip }) => (
  <Link
    href={href}
    className="md:tooltip md:tooltip-bottom md:text-6xl text-4xl hover:text-gray-800"
    data-tip={tooltip}
    target="_blank"
  >
    {icon}
  </Link>
);

export { ContactTitle, ContactIcon };
