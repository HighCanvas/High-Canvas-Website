import { Reveal } from './Reveal'

interface PageHeroProps {
  icon: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export function PageHero({ icon, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-10 md:px-8 md:pt-16">
      <Reveal className="flex flex-col items-center">
        <img src={icon} alt="" className="h-24 w-auto object-contain md:h-36" />
        <h1 className="hc-title mt-8 text-center text-3xl md:mt-12 md:text-5xl">{title}</h1>
        <p className="hc-body mt-6 max-w-xl text-center italic md:mt-8">{subtitle}</p>
      </Reveal>
      <Reveal className="mt-10 w-full md:mt-14">
        <img src={image} alt={imageAlt} className="mx-auto w-full max-w-4xl object-cover" />
      </Reveal>
    </section>
  )
}
