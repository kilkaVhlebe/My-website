import ReviewItem from "../components/ReviewItem";
import  './GameReviews.css'

export default function GameReviews() {
    return (
        <div>
            <div className="filter_bar">
                <input className="filter_input"></input>
                <button className="filter_button">Filters</button>
            </div>
            <div className="review_list">
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </div>
        </div>
    )
}