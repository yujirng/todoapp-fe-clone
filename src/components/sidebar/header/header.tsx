import React, { FC } from "react";
import Image from "next/image";
import arrow_down from "@/assets/icons/arrow-down.svg";
import bell from "@/assets/icons/bell.svg";
import sidebar from "@/assets/icons/sidebar.svg";
import logo from "@/assets/icons/zalaphng.ico";

interface IHeaderProps {
  onBellClick?: () => void;
  onSidebarClick?: () => void;
}

const Header: FC<IHeaderProps> = ({ onBellClick, onSidebarClick }) => {
  return (
    <div className="flex justify-between py-3">
      <button className="items-center hover:bg-red-50 rounded flex px-2 py-1">
        <Image
          className="border-2 border-blue-500 rounded-full mr-2"
          src={logo}
          width={30}
          height={30}
          alt=""
        ></Image>
        <p className="text-sm font-semibold capitalize">Test</p>
        <Image src={arrow_down} alt=""></Image>
      </button>
      <div className="flex mr-2 items-center">
        <div className="p-3">
          <Image
            src={bell}
            onClick={onBellClick}
            alt=""
            className="hover:cursor-pointer hover:bg-slate-100"
          />
        </div>
        <div>
          <Image
            src={sidebar}
            onClick={onSidebarClick}
            alt=""
            className="hover:cursor-pointer hover:bg-slate-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
