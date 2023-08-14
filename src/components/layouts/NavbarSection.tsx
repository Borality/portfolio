import { FC } from "react";
import { NavItem, NavItemMobile, NavImage } from "@/components/ui/Navbar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const DATA = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-10 bg-bg_color">
      <nav className="mx-auto flex h-[3rem] w-11/12 items-center justify-between md:h-[3.5rem]">
        <NavImage
          href="https://charlestrangay.com/"
          imgSrc="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/Portfolio%2Flogo-compressed.png?alt=media&token=83d9361f-2066-4983-a819-90f2fbfc8e9f"
        />
        <section className="hidden md:block">
          <ul className="menu menu-horizontal">
            {DATA.map((data) => (
              <NavItem
                key={data.name}
                navItemName={data.name}
                href={data.href}
              />
            ))}
          </ul>
        </section>
        <section className="block md:hidden">
          <ul className="menu menu-horizontal">
            {DATA.map((data) => (
              <NavItemMobile
                key={data.name}
                navItemName={data.name}
                href={data.href}
              />
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
