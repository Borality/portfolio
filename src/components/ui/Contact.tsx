import { FC, ReactElement } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
import { IconButton } from "@mui/material";

interface ContactProps {}

interface ContactIconProps {
  href: string;
  icon: ReactElement<any, any>;
  tooltip: string;
}

const Contact: FC<ContactProps> = ({}) => {
  return <div>Contact</div>;
};

const ContactTitle = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      `lg:text-4xl md:text-2xl text-xl text-center underline underline-offset-4 lg:decoration-8 decoration-4 text-gray-800 decoration-slate-700 ${bangers.className}`,
      className
    )}
    {...props}
  />
));

const ContactIcon: FC<ContactIconProps> = ({ href, icon, tooltip }) => (
  <IconButton
    href={href}
    target="_blank"
    sx={{ fontSize: { xs: 30, sm: 36, md: 40, lg: 50 } }}
    className="md:tooltip md:tooltip-bottom"
    data-tip={tooltip}
  >
    {icon}
  </IconButton>
);

export { ContactTitle, ContactIcon };
