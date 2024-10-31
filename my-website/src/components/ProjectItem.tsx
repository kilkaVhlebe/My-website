import './ProjectItem.css'

export default function ProjectItem(props: {name:string, description: string, link: string, imgLink?: string, width?: number, height?: number}) {
 return (
    <div className="ProjectItem">
        <a href={props.link}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.imgLink} width={props.width}height={props.height}/>
        </a>
    </div>
 )
}