"use client";

import Image from "next/image";
import React from "react";

type Props = object;

export default function NavBar({}: Props) {
  return (
    <nav className="h-full w-full ">
      <ul className="border-b border-black h-1/12 w-2/3 flex justify-between justify-self-center list-none ">
        <li>
          <Image
            src="/EduPlannerLogo.png"
            alt="EduPlanner"
            width={200}
            height={40}
          />
        </li>
        <li>test</li>
      </ul>
    </nav>
  );
}
