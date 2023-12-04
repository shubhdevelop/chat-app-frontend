import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { TypographyH2 } from "./typo/TypographyH2";

const Navbar = () => {
  return (
    <nav className="h-[70px]  border-b-2 flex flex-row gap-6 justify-between align-middle">
      <TypographyH2>ChatApp</TypographyH2>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <Button>Login</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button> Sign Up</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
