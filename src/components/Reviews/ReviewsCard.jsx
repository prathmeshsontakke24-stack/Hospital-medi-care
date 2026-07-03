import "./Reviews.css";

function ReviewsCard({ review }) {
  return (
    <div className="review-card">

      <h3 className="review-name">
        {review.Name}
      </h3>

      <p className="review-company">
        {review.Company}
      </p>

      <p className="review-text">
        {review.Reviews}
      </p>

      <div className="review-footer">
        <span>{review.Platform}</span>

        <span className="review-rating">
          ⭐ {review.rating}
        </span>
      </div>

    </div>
  );
}

export default ReviewsCard;