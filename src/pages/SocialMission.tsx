import { Link } from 'react-router'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const pillars = [
  {
    number: '01',
    heading: 'Sail training →',
    sub: 'Keep traditional ships sailing, their skills passing hand to hand, and their deck open to anyone willing to learn.',
    paragraphs: [
      'The skills are old, and practical: seamanship, rope work, rigging, carpentry and engineering alongside cooking and stewardship. You learn them on board a wooden ship — every repair is a lesson, every voyage a test, and every meal a reward.',
      'A ship teaches more than trades. To trust a crewmate. To lead when it’s your watch — and to fix what’s broken with whatever’s on board. It builds real qualifications, logged sea time, careers afloat.',
    ],
  },
  {
    number: '02',
    heading: 'Campaigns',
    sub: 'Supporting social campaigns our community cares about.',
    paragraphs: [
      'We sail voyages with a purpose. Conservation groups use our decks for citizen science — water sampling, microplastic surveys, wildlife counts. Charities send people to sea to rebuild lives around shared work, shared watches and a shared goal.',
      'For people worn down by land life, a voyage is rarer than therapy and more useful than a brochure.',
    ],
  },
  {
    number: '03',
    heading: 'Cargo under sail',
    sub: 'This mission is still on the horizon — a global-to-local story for coastal communities, trading small-scale, across continents.',
    paragraphs: [
      'Our ambition: connecting communities to organic, heritage and artisan goods, moved entirely under sail, from small producers to local shops. Zero emissions. Full traceability.',
    ],
  },
]

export function SocialMission() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <PageHero
        icon="/images/icon-mission.png"
        title="Social Mission"
        subtitle="The sea should belong to everyone but those who would benefit the most access it the least. We are changing that."
        image="/images/mission-hikers.png"
        imageAlt="Watercolour of walkers helping each other up a rocky path towards a lighthouse"
      />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-8 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="hc-body italic opacity-80">
            <span className="hc-eyebrow text-xs md:text-sm not-italic opacity-100">
              A social mission with three pillars —{' '}
            </span>
            sail training that keeps heritage skills alive, campaigns that put our decks to work for conservation
            and community, and — on the horizon — cargo under sail, moved fairly and cleanly from small producers
            all over the UK and Europe.
          </p>
        </Reveal>

        {pillars.map((p) => (
          <Reveal key={p.number} className="mt-14 md:mt-16">
            <p className="text-base font-bold" style={{ color: 'var(--hc-rust)' }}>
              {p.number}
            </p>
            <h3 className="hc-h2 mt-3">{p.heading}</h3>
            <p className="hc-body mt-5">{p.sub}</p>
            <div className="mt-5 flex flex-col gap-6">
              {p.paragraphs.map((t, i) => (
                <p key={i} className="hc-body">
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal className="mt-10 flex justify-center">
          <Link to="/partner-with-us" className="hc-btn">
            Partner with us
          </Link>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
