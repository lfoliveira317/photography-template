import { FiArrowUpRight } from 'react-icons/fi'

const GallerySection = ({ items }) => {
  return (
    <section className="section section--gallery" id="gallery">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">Recent Work</span>
            <h2>Past client galleries with a clean editorial finish.</h2>
          </div>
          <p>
            A small selection from wedding weekends, family stories, founder shoots,
            and portrait sessions delivered over the last season.
          </p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.src} alt={item.title} />
              <div className="gallery-card__overlay">
                <span>{item.type}</span>
                <div>
                  <h3>{item.title}</h3>
                  <FiArrowUpRight />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection