"use client";

import { useState } from "react";
import NavBar from "../atoms/NavBar";
import SideBar from "../atoms/SideBar";

type Props = {};

export default function Menu({}: Props) {
  const [showSideBar, setShowSideBar] = useState<string>("w-full");

  return (
    <>
      <SideBar />

      <nav className="w-screen flex justify-end">
        <div
          className={`bg-white duration-400 ${showSideBar} flex justify-end fixed z-2 h-screen`}
        >
          <NavBar />
          <div
            className="p-2 hover:cursor-pointer bg-gray-300 rounded-md"
            onClick={() => {
              setShowSideBar(showSideBar === "w-5/6" ? "w-full" : "w-5/6");
            }}
          >
            button
          </div>
        </div>
      </nav>
    </>
  );
}
