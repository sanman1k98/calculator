export type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    children: React.ReactNode,
}

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button
            onClick={props.onClick}
            className={`bg-neutral-400 hover:bg-neutral-300 text-white py-2 ${props.className || ""}`}
        >
            {props.children}
        </button>
    )
}
