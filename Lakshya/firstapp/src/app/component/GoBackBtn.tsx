import { useRouter } from "next/router";

export default function GoBackBtn() {
    const router = useRouter();
    function GoBack() {
        router.back()
    }
    return (
        <div>
            <button onClick={GoBack}>Back</button>
        </div>
    )
}