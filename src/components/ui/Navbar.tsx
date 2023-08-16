import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

interface NavItemProps {
  navItemName: string;
  href: string;
}

interface NavImgProps {
  imgSrc: string;
  href: string;
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <div>Navbar</div>;
};

const NavItem: FC<NavItemProps> = ({ navItemName, href }) => {
  return (
    <li>
      <Link href={href} scroll={false} className="text-lg text-heading_color">
        {navItemName}
      </Link>
    </li>
  );
};

const NavItemMobile: FC<NavItemProps> = ({ navItemName, href }) => {
  return (
    <li>
      <Link href={href} scroll={false} className="text-md text-heading_color">
        {navItemName}
      </Link>
    </li>
  );
};

const NavImage: FC<NavImgProps> = ({ imgSrc, href }) => {
  return (
    <a href={href}>
      <Image
        alt="logo"
        width="40"
        height="40"
        className="w-8 rounded-full md:w-10"
        src={imgSrc}
      />
    </a>
  );
};

export { NavItem, NavItemMobile, NavImage };
