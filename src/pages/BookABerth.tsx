import { FormPage } from '../components/FormPage'

export function BookABerth() {
  return (
    <FormPage
      title="Register your interest"
      intro="We're putting together an exciting programme of sailing voyages. Sign up below and we'll send you our brochure 2027 as soon as it's ready — plus first access to voyage announcements, dates, and early-bird berths."
      fields={[
        { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
        { name: 'planning', label: 'Planning to go:', placeholder: 'e.g. Solo, with a partner, with friends…' },
        { name: 'age', label: 'Age range:', placeholder: 'e.g. 25–34' },
        { name: 'voyages', label: 'Which voyages interest you most?', type: 'textarea', placeholder: 'Tell us which kind of voyage appeals — sailing, walking, photography, skills…' },
        { name: 'heard', label: 'How did you hear about us?', placeholder: 'e.g. A friend, Instagram, an event…' },
      ]}
      submitLabel="Keep me posted"
      successMessage="Thank you — your interest is registered. We’ll keep you posted with the brochure 2027 and first access to voyage announcements."
    />
  )
}
