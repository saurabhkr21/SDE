'use client'
import { useRouter } from "next/navigation";

export default function GoBackBtn() {
    const router = useRouter();
    function GoBack() {
        router.back()
    }
    return (
        <div>
            <button onClick={GoBack} className="bg-slate-300 rounded-2xl p-2">Back</button>
        </div>
    )
}