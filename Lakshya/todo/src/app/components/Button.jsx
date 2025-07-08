export default function Button({ className, children, ...props }) {
    return (
        <button
            {...props}
            className={` ${className} px-4 py-1 border rounded-lg shadow active:inset-shadow `}>
            {children}
        </button>
    );
}