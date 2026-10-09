import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../components/Reveal'

// Photos of Klevia: courtesy of Anglesey Traditional Sail (our charter partner).
// TODO: replace Leader's placeholder photo with the real ones (user will send them).
// klevia-3 (4 men on deck behind the orange life ring) stays non-clickable per user request.
const NO_ZOOM = '/images/klevia-3.jpg'

// Photos that can be zoomed, grouped per ship — navigation loops within each ship's gallery.
const zoomGalleries = {
  Klevia: ['/images/klevia-2.jpg', '/images/klevia-4.jpg'],
  Leader: ['/images/leader-1.jpg', '/images/leader-3.jpg', '/images/leader-4.jpg'],
} as const
type ShipName = keyof typeof zoomGalleries
const ships = [
  {
    name: 'Klevia',
    photo: '/images/klevia-1.jpg',
    gallery: ['/images/klevia-2.jpg', '/images/klevia-3.jpg', '/images/klevia-4.jpg'],
    credit: 'Anglesey Traditional Sail',
    tagline: 'A Danish North Sea fishing boat, reborn as a gaff ketch — and our home on the Menai Strait.',
    specs: [
      { label: 'Type', value: 'Gaff ketch' },
      { label: 'Length', value: '20 m (65 ft)' },
      { label: 'Built', value: '1936, Esbjerg, Denmark' },
      { label: 'Capacity', value: '12 crew' },
    ],
    story:
      'Klevia was built in Esbjerg, Denmark in 1936 to fish the North Sea. Restored and traditionally rigged as a gaff ketch, she now sails the waters we love best — the Menai Strait, the Welsh coast, and beyond. She is where High Canvas learns to sail.',
  },
  {
    name: 'Leader',
    photo: '/images/leader-2.jpg',
    gallery: ['/images/leader-1.jpg', '/images/leader-3.jpg', '/images/leader-4.jpg'],
    credit: 'National Historic Ships UK',
    tagline:
      'A Brixham sailing trawler from 1892, listed in the National Historic Fleet — the grand old lady of our waters.',
    specs: [
      { label: 'Type', value: 'Brixham trawler, gaff ketch' },
      { label: 'Length', value: '32 m (105 ft)' },
      { label: 'Built', value: '1892, Galmpton, Devon' },
      { label: 'Status', value: 'National Historic Fleet' },
    ],
    story:
      'Leader was built in 1892 at the A. W. Gibb yard in Galmpton and fished under sail out of Brixham before being sold to Sweden in 1907, where she worked and later trained young sailors for over sixty years. After a decade in Scotland as Lorne Leader, she came home to Devon — and today she is kept sailing by Silvery Light Sailing, a charity we are proud to sail alongside. 110 tonnes of living maritime history, and not a passenger aboard — only crew.',
  },
]

export function Ships() {
  const [lightbox, setLightbox] = useState<{ ship: ShipName; index: number } | null>(null)
  const gallery = lightbox ? zoomGalleries[lightbox.ship] : null

  useEffect(() => {
    if (!lightbox || !gallery) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight')
        setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % gallery.length })
      if (e.key === 'ArrowLeft')
        setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + gallery.length) % gallery.length })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox !== null, gallery])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 pb-8 pt-12 md:px-8 md:pt-20">
        <Reveal className="flex flex-col items-center text-center">
          <img src="/images/icon-ships.png" alt="" className="h-24 w-auto object-contain md:h-32" />
          <h1 className="hc-title mt-8 text-3xl md:mt-12 md:text-5xl">Ships We Sail</h1>
          <div className="hc-divider my-6 md:my-8" />
          <p className="hc-body max-w-xl italic">
            Two traditional vessels, worked hard and loved harder. We sail them in partnership
            with the people who keep them — and together we keep them afloat. These are the ships
            our voyages sail on, our skills live on, and our community gathers around.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-28">
          {ships.map((ship, i) => (
            <Reveal key={ship.name}>
              <article className={`flex flex-col gap-8 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/2">
                  <img
                    src={ship.photo}
                    alt={`${ship.name} under sail`}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-1/2">
                  <h2 className="hc-title text-2xl md:text-3xl">{ship.name}</h2>
                  <p className="hc-body mt-3 italic">{ship.tagline}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                    {ship.specs.map((s) => (
                      <div key={s.label}>
                        <dt
                          className="text-xs font-bold uppercase"
                          style={{ letterSpacing: '0.14em', color: 'var(--hc-rust)' }}
                        >
                          {s.label}
                        </dt>
                        <dd className="hc-body mt-1">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="hc-body mt-6">{ship.story}</p>
                </div>
              </article>
              {ship.gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-3 md:mt-8 md:gap-4">
                  {ship.gallery.map((g) =>
                    g === NO_ZOOM ? (
                      <img
                        key={g}
                        src={g}
                        alt={`${ship.name} under sail`}
                        className="h-24 w-full object-cover sm:h-32 md:h-44"
                      />
                    ) : (
                      <button
                        key={g}
                        type="button"
                        onClick={() =>
                          setLightbox({
                            ship: ship.name as ShipName,
                            index: zoomGalleries[ship.name as ShipName].indexOf(g as never),
                          })
                        }
                        className="cursor-zoom-in transition-opacity hover:opacity-85"
                        aria-label={`Zvětšit fotku: ${ship.name}`}
                      >
                        <img
                          src={g}
                          alt={`${ship.name} under sail`}
                          className="h-24 w-full object-cover sm:h-32 md:h-44"
                        />
                      </button>
                    ),
                  )}
                </div>
              )}
              {ship.credit && (
                <p className="hc-body mt-3 text-xs italic opacity-60">
                  Photos: {ship.credit}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <div
            className="border px-7 py-8 text-center md:px-10"
            style={{ borderColor: 'rgba(18,63,98,0.25)' }}
          >
            <p className="hc-body">
              Both ships are crewed entirely by club members — and every berth is earned, learned
              on, and shared. No passengers, only crew.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/voyages" className="hc-btn flex-1">
            See the voyages
          </Link>
        </Reveal>
      </main>

      <SiteFooter />

      {lightbox && gallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: 'rgba(10,25,40,0.88)' }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.ship} under sail`}
        >
          <img
            src={gallery[lightbox.index]}
            alt={`${lightbox.ship} under sail`}
            className="max-h-full max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(null)
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
              setLightbox({ ...lightbox, index: (lightbox.index - 1 + gallery.length) % gallery.length })
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
              setLightbox({ ...lightbox, index: (lightbox.index + 1) % gallery.length })
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
