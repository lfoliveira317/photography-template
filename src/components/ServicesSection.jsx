import { FiCamera, FiHeart, FiImage, FiUsers } from 'react-icons/fi'

const services = [
  {
    icon: FiHeart,
    title: 'Wedding Coverage',
    text: 'Full-day storytelling with timeline planning, location scouting, and a refined gallery that balances editorial portraits with candid emotion.',
  },
  {
    icon: FiUsers,
    title: 'Family Sessions',
    text: 'Relaxed outdoor or in-home sessions designed to feel easy for children and natural for parents, with a polished final set.',
  },
  {
    icon: FiCamera,
    title: 'Portrait Sessions',
    text: 'Graduation, maternity, engagement, and lifestyle portraits with subtle posing direction and magazine-inspired framing.',
  },
  {
    icon: FiImage,
    title: 'Brand Photography',
    text: 'Launch-ready imagery for creatives, studios, and small businesses across websites, press kits, and social media campaigns.',
  },
]

const ServicesSection = () => {
  return (
    <section className="section section--services" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>Built for milestones, launches, and the people behind them.</h2>
          <p>
            Every package includes planning support, location guidance, posing help,
            and an online gallery optimized for downloads and sharing.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="service-card__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection