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
      <a href={href}>{navItemName}</a>
    </li>
  );
};

const NavItemMobile: FC<NavItemProps> = ({ navItemName, href }) => {
  return (
    <li>
      <a href={href} className="text-2xl pl-8 py-3">
        {navItemName}
      </a>
    </li>
  );
};

const NavImage: FC<NavImgProps> = ({ imgSrc, href }) => {
  return (
    <a href={href}>
      <img
        className="rounded-full w-10"
        src= {imgSrc}
      />
    </a>
  );
};

export { NavItem, NavItemMobile, NavImage };
