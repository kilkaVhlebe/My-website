import { useState } from 'react';
import ReviewItem from "../components/ReviewItem";
import './GameReviews.css';

export default function GameReviews() {
    const [showGenres, setShowGenres] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<{ [key: string]: boolean }>({});

    const handleGenresClick = () => {
        setShowGenres(!showGenres);
    };

    const toggleGenre = (genre: string) => {
        setSelectedGenres((prev) => ({
            ...prev,
            [genre]: !prev[genre]
        }));
    };

    return (
        <div>
            <div className="filter_bar">
                <input className="filter_input" placeholder="Game..." />
                <button className="filter_button">1</button>
                <button className="filter_button">2</button>
                <button className="filter_button">3</button>
                <button className="filter_button">4</button>
                <button className="filter_button">5</button>
                <button className="filter_button genre_button" onClick={handleGenresClick}>Genres</button>
            </div>
            {showGenres && (
                <div className="genre_section">
                    {['Action', 'Adventure', 'RPG'].map((genre) => (
                        <button
                            key={genre}
                            className={`genre_button ${selectedGenres[genre] ? 'selected' : ''}`}
                            onClick={() => toggleGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            )}
            <div className="review_list">
                <ReviewItem title="aboba" grade="ahueno" imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xbpQMf73dtCr99cLyBOYYaHuIKGTCzmjOA&s"/>
                {/* Повторите ReviewItem для остальных обзоров */}
            </div>
        </div>
    );
}
