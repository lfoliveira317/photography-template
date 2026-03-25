import { FiStar } from 'react-icons/fi'

const ReviewsSection = ({ reviews }) => {
  return (
    <section className="section section--reviews" id="reviews">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Client Reviews</span>
          <h2>Words from people who wanted images with feeling, not just coverage.</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.author}>
              <div className="review-stars" aria-label="Five star review">
                {Array.from({ length: 5 }, (_, index) => (
                  <FiStar key={index} />
                ))}
              </div>
              <p>“{review.quote}”</p>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.event}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection