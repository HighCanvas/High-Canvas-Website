import { FormPage } from '../components/FormPage'

export function MailingList() {
  return (
    <FormPage
      title="Join our mailing list →"
      intro="We’re putting together an exciting programme of sailing voyages. Sign up below and we’ll send you our brochure 2027 as soon as it’s ready — plus first access to voyage announcements, dates, and early-bird berths."
      fields={[
        { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
      ]}
      submitLabel="Join the mailing list"
      successMessage="You’re on the list. We’ll send you the brochure 2027 as soon as it’s ready, plus first word on voyage dates and early-bird berths."
    />
  )
}
