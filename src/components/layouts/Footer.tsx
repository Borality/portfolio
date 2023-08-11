import { FC } from "react";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="md:py-4 py-2 bg-bg_color text-paragraph_color">
      <p className="md:text-lg text-sm md:mt-2 mt-1 opacity-50 text-center">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
