import './ReviewItem.css'

export default function ReviewItem(props: {title: string, grade: string, imgLink: string}) {
    return (
        <button className='item'>
            <div className='item_box'>
            <div>{props.grade}</div>
            <img src={props.imgLink} height={150} width={200}>
            </img>
            <p>{props.title}</p>
            </div>
        </button>
    )
}