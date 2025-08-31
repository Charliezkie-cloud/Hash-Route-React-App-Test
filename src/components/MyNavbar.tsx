import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
  createTheme
} from "flowbite-react";
import { useState } from "react";

const navbarTheme = createTheme({
  navbar: {
    root: {
      base: "bg-white px-2 py-5 border-b border-gray-200 sm:px-4 dark:border-gray-700 dark:bg-gray-800"
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    }
  }
});

export default function MyNavbar() {
  const [hash] = useState(window.location.hash);

  return (
    <ThemeProvider theme={navbarTheme}>
      <Navbar color="">
        <NavbarBrand href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Hash Route React App Test
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active={hash === ""}>
            Home
          </NavbarLink>
          <NavbarLink href="#about" active={hash === "#about"}>
            About
          </NavbarLink>
          <NavbarLink href="#services" active={hash === "#services"}>Services</NavbarLink>
          <NavbarLink href="#pricing" active={hash === "#pricing"}>Pricing</NavbarLink>
          <NavbarLink href="#contact" active={hash === "#contact"}>Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
}
