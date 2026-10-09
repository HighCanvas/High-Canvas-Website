import { Link } from 'react-router'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const benefits = [
  {
    lead: 'Decktime',
    text: '— sail traditional vessels with fellow members, at member rates.',
  },
  {
    lead: 'Path',
    text: '— sea credits toward training, berths and qualifications.',
  },
  {
    lead: 'Training',
    text: '— Traditional Skills, taught on deck, not in classrooms.',
  },
  {
    lead: 'Vote',
    text: '— the club belongs to its members. So do the decisions.',
  },
]

export function Club() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <PageHero
        icon="/images/icon-club.png"
        title="The Club"
        subtitle="A working sailing community built around traditional tall ships"
        image="/images/club-sunset.png"
        imageAlt="Watercolour of crewmates sitting on coastal rocks, watching the sun set over the sea"
      />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-8 pt-12 md:px-8 md:pt-16">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="hc-body">
              <strong>High Canvas Club</strong> keeps traditional tall ship sailing alive by doing it together. Our
              voyages fund our learning: members crew real passages, learn the old skills on board from each other, and
              pass them on.
            </p>
            <p className="hc-body">
              <strong>We’re growing right now, and the ships need hands.</strong> The community exists to get more
              people into traditional tall ship sailing, and to support each other while we learn — so that skills which
              took centuries to build don’t disappear in a generation.
            </p>
            <p className="hc-body">
              Joining is simple: come to an open day, sail a taster voyage, and experience a life at sea. No sailing
              experience needed — just boots, curiosity, and the willingness to pull your weight.
            </p>
            <p className="hc-body">
              Every hour you crew earns sea credits — towards your next voyage, your next qualification, or gifted to
              someone just starting out. Everyone who learns is expected to teach. Nobody’s a passenger for long.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h2 className="hc-h2">As a member of High Canvas you get</h2>
          <ul className="mt-6 flex list-disc flex-col gap-2 pl-6 marker:text-[var(--hc-rust)]">
            {benefits.map((b) => (
              <li key={b.lead} className="hc-body">
                <strong>{b.lead} </strong>
                {b.text}
              </li>
            ))}
          </ul>
          <p className="hc-body mt-8">
            Whether you want to sail, learn a traditional craft, teach or volunteer — there’s a place on board for
            you.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Link to="/join-the-crew" className="hc-btn w-full">
            Join the crew
          </Link>
        </Reveal>

        <Reveal className="mt-12">
          <p className="hc-body text-center italic">
            No voice without a season. No authority without election. No qualification without teaching.
          </p>
          <p className="hc-body mt-6 text-center">
            <Link
              to="/about"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: 'var(--hc-navy)' }}
            >
              Read our Founding Statement →
            </Link>
          </p>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
