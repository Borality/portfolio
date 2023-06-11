import { FC } from "react";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="md:py-5 py-2">
      <h1 className={`lg:text-4xl md:text-2xl text-xl text-center underline underline-offset-4 lg:decoration-8 decoration-4 text-gray-800 decoration-slate-700 ${bangers.className}`}>
        On the web
      </h1>
      <div className="flex justify-center">
        <IconButton
          href="https://www.linkedin.com/in/charles-trangay/"
          target="_blank"
          sx={{fontSize: { xs: 30, sm: 36, md: 40, lg: 50 } }}
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          href="https://github.com/Borality"
          target="_blank"
          sx={{fontSize: { xs: 30, sm: 36, md: 40, lg: 50 } }}
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </div>

      <p className="md:text-lg text-sm md:mt-2 mt-1 opacity-50">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
