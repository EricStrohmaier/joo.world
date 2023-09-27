import { FC } from "react";
import Button from "./CommonUI/Button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-gray-50">
      {/* Navbar content */}
      <div className="flex justify-center items-center  z-10">
        <div className="w-full max-w-6xl flex justify-between p-2">
          <Button
            title={"nostWork"}
            style={
              "bg-gray-100 font-bold text-md mr-2 border-2 border-gray-200"
            }
          />
          <Button
            title={"sign-in"}
            style={"bg-gray-100 text-md  mr-2 border-2 border-gray-200 "}
          />
        </div>
      </div>
      <div className="flex border-gray-200 border-b-2 w-full"></div>
    </div>
  );
};

export default Navbar;
