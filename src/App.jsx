import { useEffect } from 'react'
import { FiArrowRight, FiCamera } from 'react-icons/fi'
import ContactSection from './components/ContactSection'
import GallerySection from './components/GallerySection'
import HeroCollage from './components/HeroCollage'
import ReviewsSection from './components/ReviewsSection'
import ServicesSection from './components/ServicesSection'
import SiteFooter from './components/SiteFooter'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Bride and groom portrait in warm evening light',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=700&q=80',
    alt: 'Family portrait outdoors with natural smiles',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80',
    alt: 'Editorial close-up portrait with soft shadows',
  },
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=700&q=80',
    alt: 'Lifestyle maternity session on a bright afternoon',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    alt: 'Couple walking through a downtown engagement session',
  },
]

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
    title: 'Golden Hour Wedding',
    type: 'Wedding Story',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    title: 'Studio Beauty Portrait',
    type: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    title: 'Family Session at the Lake',
    type: 'Family',
  },
  {
    src: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=900&q=80',
    title: 'Brand Story for Makers',
    type: 'Branding',
  },
  {
    src: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80',
    title: 'Newborn Quiet Moments',
    type: 'Lifestyle',
  },
  {
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    title: 'Downtown Portrait Session',
    type: 'Portrait',
  },
]

const reviews = [
  {
    quote:
      'Our wedding gallery felt cinematic without losing the candid moments. Every frame looked like us, just more luminous.',
    author: 'Clara & Mateo',
    event: 'Wedding Collection',
  },
  {
    quote:
      'She guided our family through the entire session in a way that felt easy, warm, and genuinely fun for the kids.',
    author: 'The Duran Family',
    event: 'Autumn Family Session',
  },
  {
    quote:
      'We needed brand imagery that felt premium but approachable. The final set elevated our website and social launch instantly.',
    author: 'Nora Chen',
    event: 'Founder Branding Session',
  },
]

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('_tracked')) {
      sessionStorage.setItem('_tracked', '1')
      fetch('https://site-tracker-delta.vercel.app/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: window.location.hostname,
          page: window.location.pathname,
          referrer: document.referrer,
        }),
      }).catch(() => {})
    }
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand-mark" href="#top">
            <span className="brand-mark__icon">
              <FiCamera />
            </span>
            <span>
              <strong>Northlight Studio</strong>
              <small>Photography</small>
            </span>
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <HeroCollage images={heroImages} />
        <ServicesSection />
        <GallerySection items={galleryItems} />
        <ReviewsSection reviews={reviews} />
        <ContactSection />
      </main>

      <div className="floating-cta">
        <a className="btn btn-dark btn-lg rounded-pill" href="#contact">
          Reserve Your Date
          <FiArrowRight />
        </a>
      </div>

      <SiteFooter />
    </div>
  )
}

export default App
