
export default function ProjectItem(props: {name:string, description: string, link: string}) {
 return (
    <div>
        <h3><a href={props.link}>{props.name}</a></h3>
        <p>{props.description}</p>
    </div>
 )
}