import React from "react";

export default function SideBar() {
  return (
    <div className="flex flex-col w-[240px] gap-10 bg-blue-100 shadow-2xl  p-4 h-screen">
      <div className="flex  justify-between text-sm ">
        <h2>Shows APIs</h2>
        <p >Category</p>
        </div>
        <div className="flex  justify-between text-sm">
          <p>Business</p>
          <p>25730</p>
        </div>
        <div className="flex  justify-between text-sm">
          <p>Other</p>
          <p>11821</p>
        </div>
        <div className="flex  justify-between text-sm">
          <p>Advertising</p>
          <p>4251</p>
        </div>
        <div className="flex  justify-between text-sm">
          <p>Data</p>
          <p>3750</p>
        </div>
        <div className="flex  justify-between text-sm">
          <p>Tools</p>
          <p>3603</p>
        </div>
        <div className="flex flex-col justify-between text-sm">
          <p>Artificial Intelligence/Machine Learning</p>
          <p>3097</p>
        </div>
      
    </div>
  );
}
