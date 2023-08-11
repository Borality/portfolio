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
      <Link href={href} className="text-paragraph_color" scroll={false}>
        {navItemName}
      </Link>
    </li>
  );
};

const NavItemMobile: FC<NavItemProps> = ({ navItemName, href }) => {
  return (
    <li>
      <Link href={href} scroll={false} className="text-2xl text-gray-700">
        {navItemName}
      </Link>
    </li>
  );
};

const NavImage: FC<NavImgProps> = ({ imgSrc, href }) => {
  return (
    <a href={href}>
      <img className="rounded-full w-8 md:w-10" src={imgSrc} />
    </a>
  );
};

export { NavItem, NavItemMobile, NavImage };
