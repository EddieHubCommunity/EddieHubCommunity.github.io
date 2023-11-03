import Image from 'next/image'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I join EddieHub?',
      answer:
        'EddieHub has many community and cross community platforms, events and calls. It is best to sign up to the Newsletter and join Discord to start collaborating with the inclusive EddieHub community. More information can be found in blog post on getting started.',
    },
    {
      question: 'How do I join the EddieHub GitHub Organisation?',
      answer: 'If you would like to join the EddieHub GitHub organisation, then please fill out this form so that you can get an automatic invite to the organisation. If you want the organisation to appear on your profile then make sure that you make it public (as by default it is marked as private).',
    },
    {
      question: 'Who is EddieHub for?',
      answer:
        'Whether you are just starting your journey into tech or you are a seasoned professional, you will benefit from joining EddieHub. Open Source is about collaboration first and code second.  Members include developers, testers, DevOps, technical writers, UI and UX designers.',
    },
  ],
  [
    {
      question: 'I am new to coding and / or Open Source, can I still join?',
      answer:
        'Yes! Starting out can sometimes feel lonely and overwhelming particularly with the amount of information out there. In EddieHub Discord you will find supportive channels such as #help and #first-timers. Also Eddie\'s YouTube channel is a good resource when starting out.',
    },
    {
      question:
        'Can I find a mentor in EddieHub?',
      answer:
        'At EddieHub we believe that everyone is a mentor and can help others in the community. This community approach is beneficial for the mentee as they are exposed to various perspectives, and for the mentor they develop many of their communication and collaboration skills. Even if you are one month into your journey, there is someone who is one day in and who can benefit from your experience and insight.',
    },
    {
      question:
        'How can I get my Open Source / Resume / GitHub Profile reviewed on a live stream?',
      answer:
        'Eddie does regular reviews on live streams. To add your project / profile / resume for review please raise an issue on our support repo on GitHub.',
    },
  ],
  [
    {
      question: 'Why does EddieBot complain about my Discord messages?',
      answer:
        'At EddieHub we are passionate about moving away from gender favouring, polarising, race related, religion inconsiderate or other unequal phrasing. Therefore if you use terms such as “Hi Guys”, then EddieBot responds with a notification highlighting that this is not inclusive language and will suggest alternatives.',
    },
    {
      question: 'I just joined, why can\'t I post links on Discord?',
      answer: 'You have recently joined the community and you have tried to share a link, but found that NightBot has deleted this message. We appreciate that the community is a place to share your work, which we encourage only for our regular community members (aka “Team Eddie”). To become a regular and get the role "Team Eddie", we highly suggest to get involved in the community conversation and add value by helping other community members.',
    },
    {
      question: 'I love Hubber! Can I use the EddieHub mascot and logo?',
      answer:
        'Check what you can and cannot do on our Branding page.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
