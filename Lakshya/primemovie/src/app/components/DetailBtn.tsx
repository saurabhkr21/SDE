//@ts-nocheck
import { useRouter } from "next/navigation";
import React from "react";

export default function DetailBtn({ item }) {
  const router = useRouter();
  function handleDetail() {
    router.push(`/search/${encodeURIComponent(item.id)}`);
  }
  return (
    <div className="w-[10px]">
      <button onClick={handleDetail}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/liquid-glass/48/details.png"
          alt="details"
        />
      </button>
    </div>
  );
}
