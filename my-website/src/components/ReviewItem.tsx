import { MouseEventHandler } from 'react'
import './ReviewItem.css'

export default function ReviewItem(props: {title: string, grade: string, imgLink: string, onClick: MouseEventHandler<HTMLButtonElement> | undefined}) {
    return (
        <button className='item' onClick={props.onClick}>
            <div className='item_box'>
            <div>{props.grade}</div>
            <img src={props.imgLink} height={200} width={200}>
            </img>
            <p>{props.title}</p>
            </div>
        </button>
    )
}