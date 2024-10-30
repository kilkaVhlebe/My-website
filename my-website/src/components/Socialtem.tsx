import './SocialItem.css'

const SocialItem = (props: {name:string, imgLink: string,link?: string}) => {
    return (
        <a className="SocialItem" href={props.link}>
            <img src={props.imgLink} height='50' width='50'/><br />
            <span>{props.name}</span>
        </a>
    );
}

export default SocialItem