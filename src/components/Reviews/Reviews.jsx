import { useState } from "react";
import useReviews from "../../hooks/useReviews";
import ReviewsCard from "./ReviewsCard";
import "./Reviews.css";

function Reviews() {
  const { reviews, loading } =
    useReviews();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const reviewsPerPage = 2;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const totalPages = Math.ceil(
    reviews.length / reviewsPerPage
  );

  const start =
    currentIndex * reviewsPerPage;

  const visibleReviews =
    reviews.slice(
      start,
      start + reviewsPerPage
    );

  const nextReviews = () => {
    setCurrentIndex((prev) =>
      prev === totalPages - 1
        ? 0
        : prev + 1
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? totalPages - 1
        : prev - 1
    );
  };

  return (
    <section id="reviews" className="reviews-section">

      <div className="reviews-title">

        <h2>
          What Our Customers Say
        </h2>

        <p>
          Trusted by thousands of happy
          customers worldwide.
        </p>

      </div>

      <div className="carousel-controls">

        <button
          onClick={prevReviews}
          className="nav-btn"
        >
          ← Previous
        </button>

        <button
          onClick={nextReviews}
          className="nav-btn"
        >
          Next →
        </button>

      </div>

      <div className="review-grid">

        {visibleReviews.map(
          (review) => (
            <ReviewsCard
              key={review.ID}
              review={review}
            />
          )
        )}

      </div>

      <div className="dots">

        {[...Array(totalPages)].map(
          (_, index) => (
            <span
              key={index}
              className={
                currentIndex === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() =>
                setCurrentIndex(index)
              }
            />
          )
        )}

      </div>

    </section>
  );
}

export default Reviews;