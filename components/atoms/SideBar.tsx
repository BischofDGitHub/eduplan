"use client";

import React from "react";

type Props = {};

export default function SideBar({}: Props) {
  return (
    <nav className="w-screen">
      <ul className="w-1/6 fixed bg-gray-400 flex flex-column justify-center h-screen space-y-2">
        {[1, 2, 3, 4, 5].map((element, key) => {
          return (
            <li
              className="border rounded-md border-black hover:cursor-pointer w-1/2"
              key={key}
              onClick={() => {
                console.log(`test ${element}`);
              }}
            >
              Test {element}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
