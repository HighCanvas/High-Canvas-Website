import { FormPage } from '../components/FormPage'

export function JoinTheCrew() {
  return (
    <FormPage
      title="Join the crew"
      intro="High Canvas is a working sailing community. You don’t need sailing experience — just curiosity, willingness to learn, and a readiness to pull your weight."
      fields={[
        { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
        { name: 'based', label: 'Where are you based?', placeholder: 'Town or city' },
        { name: 'experience', label: 'Sailing experience', placeholder: 'None at all is absolutely fine' },
        { name: 'interests', label: 'What are you interested in?', placeholder: 'Sailing, traditional crafts, teaching, volunteering…' },
        { name: 'why', label: 'Why would you like to join High Canvas?', type: 'textarea' },
        { name: 'anything', label: 'Anything else we should know?', type: 'textarea' },
      ]}
      submitLabel="Join the crew"
      successMessage="Welcome aboard — well, nearly. We’ll be in touch about open days and taster voyages."
    />
  )
}
