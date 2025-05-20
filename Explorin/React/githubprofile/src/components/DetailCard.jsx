import React from 'react'

export default function DetailCard({ label = "", value = "" }) {
    return (
      <div className="flex gap-1 items-center text-nowrap">
        <span className="text-gray-600">{label}:</span>
        <span className="text-slate-950 font-semibold">{value}</span>
      </div>
    );
  }


