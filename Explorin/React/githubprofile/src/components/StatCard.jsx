import React from "react";

export default function StatCard({ label = "", value = "" }) {
    return (
      <div className="max-md:min-w-2/5 md:w-1/5 flex-1 p-4 flex flex-col gap-1 items-center rounded-md bg-slate-200">
        <span className="font-bold text-xl">{value}</span>
        <span className="text-sm">{label}</span>
      </div>
    );
  }