import { Container } from '@/components/Container'
import Image from 'next/image'
import { H2 } from '@/components/Headings'

const people = [
  {
    name: 'Cahllagerfeld',
    role: 'Aka Julian, a TypeScript developer from Germany who is into Fullstack-Development and DevOps. Has a love for TypeScript. ',
    imageUrl: 'https://github.com/cahllagerfeld.png',
    twitterUrl: 'https://twitter.com/CahlLagerfeld',
  },
  {
    name: 'Sara Jaoude',
    role: 'Can be found writing content for EddieHub. After a legal career,  Sara enjoys helping others find a work / life balance and strengthening their interview / writing skills.',
    imageUrl: 'https://github.com/SaraJaoude.png',
    twitterUrl: 'https://twitter.com/SaraJaoude',
    linkedinUrl: 'https://www.linkedin.com/in/sara-abou-jaoude-1a005425/',
  },
  {
    name: 'Emma Dawson',
    role: 'Full stack (MERN) software developer. Documenting their passion for accessibility and open source on YouTube. Currently working on making the web more accessible.',
    imageUrl: 'https://github.com/EmmaDawsonDev.png',
    twitterUrl: 'https://twitter.com/EmmaDawsonDev',
    linkedinUrl: 'https://www.linkedin.com/in/emmadawsondev/',
  },
  {
    name: 'Tom Schmelzer',
    role: 'IT Application Consultant from Germany. Believes Open Source helps you build connections with people from all over the world.',
    imageUrl: 'https://github.com/schmelto.png',
    twitterUrl: 'https://twitter.com/schmelto2',
    linkedinUrl: 'https://www.linkedin.com/in/tomschmelzer/',
  },
  {
    name: 'Tamal Das',
    role: 'Open Source Advocate and freelance Fullstack Web Dev, from Kolkata India.',
    imageUrl: 'https://github.com/tamalCodes.png',
    twitterUrl: 'https://twitter.com/tamalCodes',
    linkedinUrl: 'https://www.linkedin.com/in/tamalcodes/',
  },
  {
    name: 'Pradumna Saraf',
    role: 'DevOps and API developer, working with communities to bring more people into the Open Source ecosystem.',
    imageUrl: 'https://github.com/Pradumnasaraf.png',
    twitterUrl: 'https://twitter.com/pradumna_saraf',
    linkedinUrl: 'https://www.linkedin.com/in/pradumnasaraf/',
  },
  {
    name: 'Amanda Martin',
    role: 'she/her | Developer Advocate @DevsOnWix @Wix | EddieHub Ambassador | dog mom 🐾 | home chef | travel fantasizer | curious dork  | tweets are my own.',
    imageUrl: 'https://github.com/amandamartin-dev.png',
    twitterUrl: 'https://twitter.com/hey_amandam',
    linkedinUrl: 'https://www.linkedin.com/in/amandamartin-dev/',
  },
]

function SwirlyDoodle(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

export function Moderators() {
  return (
    <section
      id="moderators"
      aria-label="Moderators"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <H2 className="text-white">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-primary-400" />
              <span className="relative">EddieHub</span>
            </span>{' '}
            Moderators.
          </H2>
          <p className="mt-4 text-lg text-slate-400">
            Our awesome Moderators providing support through all timezones
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              <Image
                className="mx-auto rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt="moderator image"
                width={200}
                height={200}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {person.twitterUrl && (
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                )}
                {person.linkedinUrl && (
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
