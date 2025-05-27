import React from "react";
import Header from "./Header";
import CategoryBar from "./ComponentBar";
import { Outlet } from "react-router";

export default function PageLayout() {
    return (
        <div className="w-full h-full flex flex-col justify-center--x items-center--x">
            <Header />
            <CategoryBar />
            <div className="max-w-screen w-full h-full m-auto overflow-hidden flex flex-col justify-center--x items-center--x text-wrap truncate break-all">
                <Outlet />
            </div>
        </div>
    );
}