"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import "./main.css";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    "Profile",
    "Black Market",
    "Hostel Finder",
    "Student Sync",
    "Log Out",
  ];

  return (
    <Navbar className="Navbarbg" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            className="font-bold text-sm md:text-md text-inherit text-left text-cyan-900"
            href="/"
          >
            <LogoNav className="logo_navbar"  />
            StudentHub Connect
          </Link>
          <p className="font-bold text-inherit text-left">
            <Link href="/"></Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link
            className="text-cyan-900   "
            color="foreground"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
            href="/shop"
          >
            Black Market
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-cyan-900 "
            href="/map"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
          >
            Hostel finder
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-cyan-900 "
            color="foreground"
            aria-current={`${router.pathname == "shop" ? "page" : null}`}
            href="/forum"
          >
            Student Sync
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-cyan-900 " href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-white bg-cyan-900 hover:bg-cyan-500 "
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComp;

function LogoNav() {
  return (
    <svg
      width="90"
      height="40"
      viewBox="0 0 90 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="10.5118"
        height="57.064"
        transform="matrix(-1 0 0 1 89.4968 6.00671)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="45.0505"
        transform="matrix(-1 0 0 1 62.4663 18.0203)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 47.4497 64.5724)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 77.4836 10.5118)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 62.4663 10.5118)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 62.4663 4.50507)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 47.4497 21.0236)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-0.92388 -0.382683 -0.382683 0.92388 39.9414 5.17206)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="55.1082"
        transform="matrix(-0.92388 -0.382683 -0.382683 0.92388 36.9377 11.1788)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="5.03334"
        transform="matrix(-0.92388 -0.382683 -0.382683 0.92388 14.4126 63.7378)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 77.4836 64.5724)"
        fill="#022B3A"
      />
      <rect
        width="13.5152"
        height="4.50505"
        transform="matrix(-1 0 0 1 62.4663 64.5724)"
        fill="#022B3A"
      />
      <rect
        width="10.5118"
        height="4.50505"
        transform="matrix(-1 0 0 1 89.4968 0)"
        fill="#022B3A"
      />
      <rect
        width="10.5118"
        height="4.50505"
        transform="matrix(-1 0 0 1 89.4968 64.5724)"
        fill="#022B3A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.4836 18.0203H63.9685V63.0708H77.4836V18.0203ZM72.9783 21.0237H71.4766V61.5691H72.9783V21.0237ZM68.4734 21.0236H69.9751V61.5691H68.4734V21.0236Z"
        fill="#022B3A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.9345 27.0303H47.4497V63.0707H33.9345V27.0303ZM40.6923 58.5657C38.6189 58.5657 36.938 56.8849 36.938 54.8115C36.938 52.7381 38.6189 51.0573 40.6923 51.0573C42.7656 51.0573 44.4465 52.7381 44.4465 54.8115C44.4465 56.8849 42.7656 58.5657 40.6923 58.5657Z"
        fill="#022B3A"
      />
    </svg>
  );
}
