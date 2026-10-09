import { useState, type FormEvent } from 'react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { Reveal } from './Reveal'

export interface FormField {
  name: string
  label: string
  type?: 'text' | 'email' | 'number' | 'textarea'
  placeholder?: string
  required?: boolean
}

interface FormPageProps {
  title: string
  intro: string
  fields: FormField[]
  submitLabel: string
  successMessage: string
}

export function FormPage({ title, intro, fields, submitLabel, successMessage }: FormPageProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl flex-1 px-5 pb-10 pt-12 md:pt-20">
        <Reveal>
          <h1 className="hc-title text-3xl leading-snug md:text-4xl">{title}</h1>
          <p className="hc-body mt-7">{intro}</p>
        </Reveal>

        {submitted ? (
          <Reveal className="mt-12">
            <div className="border p-8 text-center" style={{ borderColor: 'rgba(18,63,98,0.25)' }}>
              <p className="hc-eyebrow text-sm" style={{ color: 'var(--hc-rust)' }}>
                Thank you
              </p>
              <p className="hc-body mt-4">{successMessage}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
              {fields.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="hc-label">
                    {f.label}
                  </label>
                  {f.type === 'textarea' ? (
                    <textarea id={f.name} name={f.name} className="hc-input" placeholder={f.placeholder} required={f.required} />
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type ?? 'text'}
                      className="hc-input"
                      placeholder={f.placeholder}
                      required={f.required}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="hc-btn mt-2 w-full">
                {submitLabel}
              </button>
            </form>
          </Reveal>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
