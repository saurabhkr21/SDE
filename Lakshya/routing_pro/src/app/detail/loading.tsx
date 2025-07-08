// app/dashboard/loading.tsx

export default function Loading() {
    return (
        <div className="flex flex-row items-center justify-center p-4">
            <p className="flex items-center">Loading Detail...
                <div className="w-7 h-7 border-4 border-dotted  border-t-violet-700 border-gray-200 rounded-full animate-spin"/></p>
        </div>
    );
}
