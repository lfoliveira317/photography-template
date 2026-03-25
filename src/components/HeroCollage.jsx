import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi'

const metrics = [
  { value: '240+', label: 'sessions delivered' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '72 hr', label: 'preview turnaround' },
]

const HeroCollage = ({ images }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Editorial warmth for real-life milestones</span>
            <h1>Photography that feels polished, intimate, and unmistakably yours.</h1>
            <p className="hero-lead">
              Northlight Studio creates wedding, portrait, family, and brand imagery
              with soft direction, rich color, and a gallery experience built for
              sharing.
            </p>

            <div className="hero-actions">
              <a className="btn btn-accent btn-lg rounded-pill" href="#contact">
                Book a Consultation
                <FiArrowRight />
              </a>
              <a className="btn btn-outline-light btn-lg rounded-pill" href="#gallery">
                <FiPlay />
                View Portfolio
              </a>
            </div>

            <div className="hero-proof">
              <div className="hero-proof__rating">
                <span className="hero-proof__badge">
                  <FiStar />
                </span>
                Trusted by couples, founders, and families across Winnipeg.
              </div>

              <div className="hero-metrics">
                {metrics.map((metric) => (
                  <div className="metric-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-collage" aria-label="Photography collage preview">
            {images.map((image, index) => (
              <article className={`collage-card collage-card--${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.alt} />
              </article>
            ))}

            <div className="collage-note collage-note--top">
              <span>Signature style</span>
              <strong>Soft flash, natural motion, vivid skin tones</strong>
            </div>

            <div className="collage-note collage-note--bottom">
              <span>Most booked</span>
              <strong>Weddings, family stories, founder portraits</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCollage