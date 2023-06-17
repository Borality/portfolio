import { FC, ReactElement } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface FooterProps {}

interface MediaIconProps {
  href: string;
  icon: ReactElement<any, any>;
  tooltip: string;
}

const MediaIcons: FC<MediaIconProps> = ({ href, icon, tooltip}) => {
  return (
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
};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="md:my-4 my-2" id="footer">
      <h3
        className={`lg:text-4xl md:text-2xl text-xl text-center underline underline-offset-4 lg:decoration-8 decoration-4 text-gray-800 decoration-slate-700 ${bangers.className}`}
      >
        On the web
      </h3>
      <div className="flex justify-center mb-7">
        <MediaIcons
          href="https://www.linkedin.com/in/charles-trangay/"
          icon={<LinkedInIcon fontSize="inherit" />}
          tooltip="LinkedIn"
        />
        <MediaIcons
          href="https://github.com/Borality"
          icon={<GitHubIcon fontSize="inherit" />}
          tooltip="Github"
        />
      </div>
      <p className="md:text-lg text-sm md:mt-2 mt-1 opacity-50">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
