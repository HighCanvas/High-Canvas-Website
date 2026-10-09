import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const days = [
  {
    label: 'Morning',
    text: '— under way. Breakfast on deck as the ship gets moving. You crew: haul a line, take the helm, learn the ropes from fellow sailors. Between sails, enjoy the view of the coastline.',
  },
  {
    label: 'Afternoon',
    text: '— trek ashore or aloft. We drop you where the walking is good, tide willing — coastal paths, hill summits, sea stacks, ancient heritage — or stay aboard for the day’s workshop. Lunch on board or packed for a picnic ashore.',
  },
  {
    label: 'Evening',
    text: '— camp or anchorage. Wild camp where the light’s best — dinner on the fire, a tent, the sound of the sea. Or sleep soundly aboard in your bunk as the ship rocks at anchor. Evening dinner served onboard.',
  },
]

const foodGallery = [
  { src: '/images/food-1.jpg', alt: 'Galley-cooked rice with chicken, lemon and fresh herbs' },
  { src: '/images/food-2.jpg', alt: 'Roasted vegetable trays fresh from the galley oven' },
  { src: '/images/food-3.jpg', alt: 'A full crew supper spread: fish, salads, bakes and dips' },
]

export function Voyages() {
  const [lightbox, setLightbox] = useState(-1) // -1 = closed, otherwise index into foodGallery
  const open = lightbox >= 0

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(-1)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % foodGallery.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + foodGallery.length) % foodGallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const current = foodGallery[lightbox]
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <PageHero
        icon="/images/icon-voyages.png"
        title="Voyages"
        subtitle="Under sail, at walking pace, with a warm galley waiting below"
        image="/images/voyages-ship.png"
        imageAlt="Watercolour of a traditional sailing vessel at sea"
      />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-8 pt-12 md:px-8 md:pt-16">
        <Reveal>
          <p className="hc-body">
            <strong>You crew a traditional vessel</strong> through the Menai Strait along wild coastlines, then pull
            on your boots and head inland: exploring sea cliffs, empty beaches, ruined castles, harbour villages.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/mailing-list" className="hc-btn">
            Join our mailing list
          </Link>
          <Link to="/ships" className="hc-btn" style={{ backgroundColor: 'var(--hc-navy)' }}>
            Meet our ships
          </Link>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <h2 className="hc-h2">A voyage, day by day</h2>
          <div className="mt-7 flex flex-col gap-6">
            {days.map((d) => (
              <p key={d.label} className="hc-body">
                <strong>{d.label} </strong>
                {d.text}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h2 className="hc-h2">Onboard workshops</h2>
          <div className="mt-10 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <p className="hc-body md:w-1/2">
                <strong>Nature photography.</strong> These waters are alive — seabird colonies, seals, dolphins, and
                light that changes by the minute. Bring a camera and learn to use it.
              </p>
              <img
                src="/images/nature-coast.jpg"
                alt="A lighthouse headland and rocky islets off the Welsh coast"
                className="w-full object-cover md:w-1/2"
              />
            </div>
            <div className="flex flex-col gap-6 md:flex-row-reverse md:items-center md:gap-10">
              <p className="hc-body md:w-1/2">
                <strong>Traditional skills workshops.</strong> Rope work and splicing, navigation by chart and
                compass, sail repair, boat handling — short, hands-on sessions woven through every voyage.
              </p>
              <img
                src="/images/skills-rope.jpg"
                alt="Hands splicing a traditional rope on a wooden thwart"
                className="w-full object-cover md:w-1/2"
              />
            </div>
            <div>
              <p className="hc-body">
                <strong>The food matters.</strong> Every voyage includes all meals — learn from our ship’s cook:
                traditional recipes and bread-making. The galley is the heart of the ship. Proper, healthy,
                home-cooked food, fresh ingredients, and dietary needs properly catered for.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
                {foodGallery.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="cursor-zoom-in transition-opacity hover:opacity-85"
                    aria-label={`Zvětšit fotku: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="h-28 w-full object-cover sm:h-36 md:h-48" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h2 className="hc-h2">Where we sail</h2>
          <div className="mt-7 flex flex-col gap-6">
            <p className="hc-body">
              So far, our home waters are the Menai Strait and the North coast of Wales, with passages to the Isle of
              Man, Ireland and the Scottish islands. As the club grows, so will the chart —
            </p>
            <p className="hc-body">
              (Every itinerary balances sail time, shore time and weather — the wind has a vote, and that’s half the
              adventure.)
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h2 className="hc-h2">What’s included</h2>
          <p className="hc-body mt-7">
            Your berth · all meals · sailing instruction · on-board workshops · camping kit · wet-weather gear ·
            small-group crew · and a week you’ll measure in stories, not miles.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <Link to="/book-a-berth" className="hc-btn w-full">
            Sail with us
          </Link>
        </Reveal>
      </main>

      <SiteFooter />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: 'rgba(10,25,40,0.88)' }}
          onClick={() => setLightbox(-1)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-full max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(-1)
            }}
            aria-label="Zavřít náhled"
            className="absolute right-4 top-4 text-3xl leading-none text-white transition-opacity hover:opacity-70"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + foodGallery.length) % foodGallery.length)
            }}
            aria-label="Předchozí fotka"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-opacity hover:opacity-70 md:left-6"
            style={{ backgroundColor: 'rgba(247,240,223,0.15)' }}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % foodGallery.length)
            }}
            aria-label="Další fotka"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-opacity hover:opacity-70 md:right-6"
            style={{ backgroundColor: 'rgba(247,240,223,0.15)' }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  )
}
