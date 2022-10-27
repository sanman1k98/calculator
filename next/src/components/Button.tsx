type ButtonProps = {
    text: string,
    onClick: () => void,
    className?: string,
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.text}
        </button>
    )
}