import { Link } from 'react-router'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { Reveal } from '../components/Reveal'

const members = [
  'Margo Riley',
  'Jakub Zondra',
  'Daithi Gaffney',
  'Mike Travis',
  'Chris Cavalier',
  'Roghan Thornbury',
]

export function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-8 pt-12 md:px-8 md:pt-20">
        <Reveal className="flex flex-col items-center text-center">
          <img src="/images/compass.png" alt="" className="h-24 w-auto object-contain md:h-32" />
          <h1 className="hc-title mt-8 text-3xl md:mt-12 md:text-5xl">About Us</h1>
          <div className="hc-divider my-6 md:my-8" />
          <p className="hc-body max-w-xl italic">
            High Canvas is run by the people who sail it. Meet the founding crew — the hands on the lines, the
            voices in the galley, the shore-side support.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <p className="hc-body">
            <strong>Our community is everyone who keeps these ships alive</strong> — from crewing the voyages and
            running the workshops, to fixing the boats and answering to the club’s members on how it’s run.
            Professional mariners, engineers, shipwrights and carpenters, traditional tall ship sailors, ship’s
            cooks, maritime enthusiasts and hobbyists — and anyone eager to learn on deck.
          </p>
          <p className="hc-body mt-6">
            Every one of us came to tall ships a different way — and none of us found an easy path to making it a
            full-time job. Mostly freelance, moving between boats, taking whatever berth we could get. We worked
            hard, then fought to make those hours count: toward sea time, qualifications, and a career. The path
            existed, but it was never easy to find — and harder still to afford.
          </p>
          <p className="hc-body mt-6">
            High Canvas is the community we wished we’d had. A place to build experience, run heritage-skills
            workshops aboard, and support each other to become better sailors — with club charters where you build
            your miles and teach each other along the way.
          </p>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <h2 className="hc-h2">The founding members</h2>
          <p className="hc-body mt-4 italic opacity-80">
            Not a management team — just the people who started it, and still sail it.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <img
            src="/images/crew-group.jpg"
            alt="The High Canvas founding crew"
            className="w-full object-cover"
            style={{ filter: 'sepia(0.15)' }}
          />
          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            {members.map((name, i) => (
              <p key={i} className="hc-eyebrow text-sm md:text-base">
                {name}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <p className="hc-body text-center italic">
            “No voice without a season. No authority without election. No qualification without
            teaching.”
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <Link to="/join-the-crew" className="hc-btn w-full">
            Join the crew
          </Link>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
