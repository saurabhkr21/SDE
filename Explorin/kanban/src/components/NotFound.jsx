import React from "react";
import { useLocation } from "react-router";

export default function NotFound() {
  const path = useLocation();
  console.log(path);
  return (
    <div className="w-screen h-screen text-4xl text-center font-bold flex-col gap-16 text-red-600/50 flex justify-center items-center">
      404 Not Found
      <p>
        The page on <br />"<code>{location.origin + "" + path.pathname}</code>"
        <br /> that you are trying to view doesn't exists
      </p>
    </div>
  );
}