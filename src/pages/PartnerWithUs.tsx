import { FormPage } from '../components/FormPage'

export function PartnerWithUs() {
  return (
    <FormPage
      title="Partner with us"
      intro="High Canvas works with organisations, charities, community groups, educators, traditional craftspeople and businesses who believe the sea can change people's lives for the better. Whether you want to run a purpose-led voyage, support access to the sea, share skills, fund places on board or build something new with us — we'd like to hear from you."
      fields={[
        { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
        { name: 'organisation', label: 'Organisation', placeholder: 'Your organisation, if any' },
        { name: 'website', label: 'Website', placeholder: 'https://…' },
        { name: 'kind', label: 'What kind of partnership are you interested in?', placeholder: 'Purpose-led voyage, funding places, skills sharing…' },
        { name: 'idea', label: 'Tell us about your idea', type: 'textarea' },
        { name: 'anything', label: 'Anything else we should know?', type: 'textarea' },
      ]}
      submitLabel="Start a conversation"
      successMessage="Thank you — we’d love to hear more. We’ll be in touch to start the conversation."
    />
  )
}
