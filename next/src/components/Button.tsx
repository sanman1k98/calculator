type ButtonProps = {
    onClick?: () => void,
    className?: string,
    children?: any,
}


export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`hover:bg-calcOrange-200 text-white py-2 ${props.className || ""}`}>
            {props.children}
        </button>
    )
}
