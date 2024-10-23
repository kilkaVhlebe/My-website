import './Button.css'

export default function Button(props: {title: string, icon: string}) {
    return (
        <button>
            <span className={props.icon}></span><span>{props.title}</span>
        </button>
    )
}