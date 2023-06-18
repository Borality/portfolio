import { FC, useState, Dispatch, SetStateAction } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  setPageFixed: Dispatch<SetStateAction<string>>;
}

interface NavItemProps {
    navName: string;
    href: string;
  }
  interface NavItemResponsiveProps {
    navName: string;
    href: string;
  }

const NavItem: FC<NavItemProps> = ({navName, href}) => {
    return (
        <li>
            <a href={href}>{navName}</a>
        </li>
    )
}

const NavItemResponsive: FC<NavItemResponsiveProps> = ({navName, href}) => {
    return (
        <li>
            <a href={href} className="text-2xl pl-8 py-3">{navName}</a>
        </li>
    )
}

const Navbar: FC<NavbarProps> = ({ setPageFixed }) => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  const [displayMenuStyle, setDisplayMenuStyle] = useState("");

  // Enables the dropdown menu to be fixed on scree with setPageFixed
  // Enables the dropdown menu to have open and close functionality with setMenuDisplay and setDisplayMenuStyle
  const showMenu = () => {
    setMenuDisplay(!menuDisplay);
    if (menuDisplay) {
      setDisplayMenuStyle("");
      setPageFixed("fixed");
    } else {
      setDisplayMenuStyle("none");
      setPageFixed("");
    }
    return displayMenuStyle;
  };

  return (
    <div className="navbar bg-transparent sticky top-0 z-10">
      <div className="flex-1">
        <div className="w-10">
          <img
            className="rounded-full"
            src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/MyLogo.png?alt=media&token=8bb3bf7b-7b35-4774-a8e3-b163699d024e"
          />
        </div>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <NavItem navName="Home" href="#hero"/>
          <NavItem navName="Projects" href="#projects"/>
          <NavItem navName="Contact" href="#footer"/>
        </ul>
      </div>
      <div className="dropdown dropdown-end md:hidden" onClick={showMenu}>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-xl"/>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content -mr-2 mt-2 p-2 shadow bg-base-100 w-screen h-screen z-10 ${displayMenuStyle == "none" ? "hidden" : ""}`}
          //style={{ display: displayMenuStyle }}
        >
         <NavItemResponsive navName="Home" href="#hero"/>
         <NavItemResponsive navName="Projects" href="#projects"/>
         <NavItemResponsive navName="Contact" href="#footer"/>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
