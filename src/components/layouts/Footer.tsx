import { FC } from "react";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="md:py-4 py-2 bg-gradient-to-r from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF] text-gray-700">
      <p className="md:text-lg text-sm md:mt-2 mt-1 opacity-50 text-center">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
