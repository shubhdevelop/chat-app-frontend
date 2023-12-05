import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { TypographyH2 } from "./typo/TypographyH2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px]  border-b-2 flex flex-row gap-6 justify-between align-middle">
      <NavLink to={"/"}>
        <TypographyH2>ChatApp</TypographyH2>
      </NavLink>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className=" pr-4">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-700" : ""} text-xl`
              }
              to={"/profile"}
            >
              <Button variant={"link"}>Profile</Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" pr-4">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-blue-700" : ""} text-xl`
              }
              to={"/direct"}
            >
              <Button variant={"link"}>Message</Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" pr-4">
            <NavLink to={"/Signup"}>
              <Button> Sign Up</Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" pr-4">
            <NavLink to={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
