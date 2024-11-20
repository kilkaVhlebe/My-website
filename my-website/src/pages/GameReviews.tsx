import { useState, useEffect } from 'react';
import ReviewItem from "../components/ReviewItem";
import './GameReviews.css';
import { getReviews } from '../api/reviews';

export default function GameReviews() {
  const [reviews, setReviews] = useState<
    { id: number; title: string; grade: string; imglink: string; reviewtext: string }[]
  >([]);
  const [filteredReviews, setFilteredReviews] = useState<
    { id: number; title: string; grade: string; imglink: string; reviewtext: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [showReview, setShowReview] = useState(false); // State to show/hide the review window
  const [currentReview, setCurrentReview] = useState<{ id: number; title: string; grade: string; imglink: string; reviewtext: string } | null>(null);

  const fetchReviews = async () => {
    try {
      const reviewsData = await getReviews();
      setReviews(reviewsData as { id: number; title: string; grade: string; imglink: string; reviewtext: string }[]);
      setFilteredReviews(reviewsData as { id: number; title: string; grade: string; imglink: string; reviewtext: string }[]);
    } catch (error) {
      console.error("Ошибка при получении отзывов:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterReviews(query, selectedGrade);
  };

  const handleGradeClick = (grade: string) => {
    setSelectedGrade(grade);
    filterReviews(searchQuery, grade);
  };

  const filterReviews = (query: string, grade: string | null) => {
    const filtered = reviews.filter((review) => {
      const titleMatches = review.title.toLowerCase().includes(query);
      const gradeMatches = grade === null || review.grade === grade;
      return titleMatches && gradeMatches;
    });
    setFilteredReviews(filtered);
  };

  const handleReviewClick = (review: { id: number; title: string; grade: string; imglink: string; reviewtext: string }) => {
    setShowReview(true);
    setCurrentReview(review);
  };

  const handleCloseReview = () => {
    setShowReview(false);
    setCurrentReview(null);
  };

  return (
    <div>
      <div className="filter_bar">
        <input className="filter_input" placeholder="Game..." value={searchQuery} onChange={handleSearch} />
        <button
          className={`filter_button ${selectedGrade === 'HELL NUH' ? 'selected' : ''}`}
          onClick={() => handleGradeClick('HELL NUH')}
        >
          HELL NUH
        </button>
        <button
          className={`filter_button ${selectedGrade === 'NUH' ? 'selected' : ''}`}
          onClick={() => handleGradeClick('NUH')}
        >
          NUH
        </button>
        <button
          className={`filter_button ${selectedGrade === 'UHH OK' ? 'selected' : ''}`}
          onClick={() => handleGradeClick('UHH OK')}
        >
          UHH OK
        </button>
        <button
          className={`filter_button ${selectedGrade === 'PRETY GOOD' ? 'selected' : ''}`}
          onClick={() => handleGradeClick('PRETY GOOD')}
        >
          PRETY GOOD
        </button>
        <button
          className={`filter_button ${selectedGrade === 'TAKE MY MONEY' ? 'selected' : ''}`}
          onClick={() => handleGradeClick('TAKE MY MONEY')}
        >
          TAKE MY MONEY
        </button>
        <button
          className={`filter_button ${selectedGrade === null ? 'selected' : ''}`}
          //@ts-ignore
          onClick={() => handleGradeClick(null)}
        >
          All
        </button>
      </div>
      <div className="review_list">
        {filteredReviews.map((review) => (
          <ReviewItem
            key={review.id}
            title={review.title}
            grade={review.grade}
            imgLink={review.imglink}
            onClick={() => handleReviewClick(review)}
          />
        ))}
      </div>
      {showReview && currentReview && (
        <div className="review-window">
            <img src={currentReview.imglink} width={360}/>
          <h2>Title: {currentReview.title}</h2>
          <h3>Grade: {currentReview.grade}</h3>
          <p>{currentReview.reviewtext}</p>
          <button onClick={handleCloseReview}>Close</button>
        </div>
      )}
    </div>
  );
}