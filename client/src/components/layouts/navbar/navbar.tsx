import { Tooltip } from "@/components/common";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    <div className="w-full h-[64px] p-[8px] border-b">
      <Tooltip content="Menu">
        <RxHamburgerMenu size={22} />
      </Tooltip>
    </div>
  );
};
