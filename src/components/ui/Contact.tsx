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
      `text-4xl font-normal text-heading_color underline decoration-heading_color decoration-4 underline-offset-4 md:text-5xl lg:decoration-8 xl:text-6xl 2xl:text-7xl ${bangers.className}`,
      className,
    )}
    {...props}
  />
));

ContactTitle.displayName = "ContactTitle";

const ContactIcon: FC<ContactIconProps> = ({ href, icon, tooltip }) => (
  <Link
    href={href}
    className="text-4xl text-heading_color md:tooltip md:tooltip-bottom hover:text-subheading_color md:text-6xl"
    data-tip={tooltip}
    target="_blank"
  >
    {icon}
  </Link>
);

export { ContactTitle, ContactIcon };
