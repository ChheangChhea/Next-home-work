"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { usePathname } from "next/navigation";

export async function getUser() {
  const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=10");
  const dat = await res.json();
  return dat;
}

export default async function Profil({ name, avatar }) {
  // const pathname = usePathnameconst user = await getUser();();

  // if (pathname.includes("dashboard ")) return null;

  return (
    <div>
      <div className="flex flex-col items-center justify-between ">
        <div className="flex justify-end  pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-16 h-16 mb-3 rounded-full shadow-lg"
            src={avatar}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
}
