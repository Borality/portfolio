import { FC } from "react";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="py-5">
      <h1 className="lg:text-2xl md:text-xl text-lg text-center underline underline-offset-4 decoration-4 decoration-slate-700">
        On the web
      </h1>
      <div className="flex justify-center">
        <IconButton href="https://www.linkedin.com/in/charles-trangay/">
          <LinkedInIcon className="lg:text-5xl md:text-4xl text-3xl" />
        </IconButton>
        <IconButton href="https://github.com/Borality">
          <GitHub className="lg:text-5xl md:text-4xl text-3xl" />
        </IconButton>
      </div>

      <p className="md:text-md text-sm md:mt-2 mt-1 opacity-50">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
