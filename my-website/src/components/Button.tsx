import './Button.css'
import {Link} from 'react-router-dom'


export default function Button(props: {title: string, icon: string, link: string}) {
    return (
        <button>
            <span className={props.icon}></span><span><Link className='Link' to={props.link}> {props.title}</Link></span>
        </button>
    )
}

