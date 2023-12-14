import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { NavLink } from "react-router-dom";

const Option: React.FC<{}> = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical size={30} strokeWidth={1} className=" cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`relative right-10`}>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <NavLink to={"/profile"} unstable_viewTransition={true}>
            <DropdownMenuItem className={`cursor-pointer `}>
              Profile
            </DropdownMenuItem>
          </NavLink>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default Option;
