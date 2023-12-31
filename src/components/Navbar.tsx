import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { TypographyH2 } from "./typo/Typography";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px]  border-b-2 flex flex-row gap-6 justify-between align-middle">
      <NavLink unstable_viewTransition={true} to={"/"}>
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
              unstable_viewTransition={true}
              className={({ isActive }) =>
                `${isActive ? "text-blue-700" : ""} text-xl`
              }
              to={"/direct"}
            >
              <Button variant={"link"}>Message</Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" pr-4">
            <NavLink to={"/Signup"} unstable_viewTransition={true}>
              <Button> Sign Up</Button>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" pr-4">
            <NavLink to={"/login"} unstable_viewTransition={true}>
              <Button variant={"outline"}>Login</Button>
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
