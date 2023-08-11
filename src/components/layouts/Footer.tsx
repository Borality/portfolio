import { FC } from "react";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-bg_color py-2 text-paragraph_color md:py-4">
      <p className="mt-1 text-center text-sm opacity-50 md:mt-2 md:text-lg">
        &copy; {new Date().getFullYear()} Charles Trangay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
