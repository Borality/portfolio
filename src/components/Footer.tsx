import { FC } from "react";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="py-5">
      <h1 className="lg:text-3xl md:text-2xl text-xl text-center underline underline-offset-4 lg:decoration-8 decoration-4 decoration-slate-700">
        On the web
      </h1>
      <div className="flex justify-center">
        <IconButton href="https://www.linkedin.com/in/charles-trangay/" target="_blank">
          <LinkedInIcon className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl" />
        </IconButton>
        <IconButton href="https://github.com/Borality" target="_blank">
          <GitHub className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl"/>
        </IconButton>
      </div>

      <p className="md:text-lg text-md md:mt-2 mt-1 opacity-50">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
