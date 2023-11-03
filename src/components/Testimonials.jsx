import Image from 'next/image'

import { Container } from '@/components/Container'

const testimonials = [
  [
    {
      content:
        'Started contributing and building my GitHub profile and already got a job interview request based on my GitHub activity. So I really appreciate what you do here!',
      author: {
        name: 'emanuel_dev',
        role: 'https://github.com/EmanuelGF',
        image: 'https://github.com/EmanuelGF.png',
      },
    },
    {
      content:
        "EddieHub is like a family to me! We get really warm welcomes here! We get all our issues solved by each others' #help :) We get our 🟩 treats here! EddieHub is awesome. By Awesome I mean Awesome! It is a 10/5 rating!",
      author: {
        name: 'Vincent Villafuerte',
        role: 'https://github.com/vinzvinci',
        image: 'https://github.com/vinzvinci.png',
      },
    },
  ],
  [
    {
      content:
        "It's everything anyone could ever ask for in a community. Wholesome, Encouraging, Open Source and everything nice! Best thing happened in 2020. I'll be always thankful to this community and keep contributing here. It's beyond rating of 5 stars. 3000/5 ⭐",
      author: {
        name: 'Karuna Tata',
        role: 'https://github.com/starlightknown',
        image: 'https://github.com/starlightknown.png',
      },
    },
    {
      content:
        'EddieHub is the best growing 🚀 Open-Source community. Here, you can help each other by raising issues, solving doubts on the help channel, show your work (projects), make good connections and so many things.I would recommend all beginners to join the most respectful, collaborative and loving Open-Source community.Thanks @eddiejaoude, we support you!',
      author: {
        name: 'akhileshthite',
        role: 'https://github.com/akhileshthite',
        image: 'https://github.com/akhileshthite.png',
      },
    },
  ],
  [
    {
      content:
        'Eddiehub has helped me to understand the importance of Open Source and how easy it is to collaborate with developers from around the world to work on different projects and learn from each other in an amazing community.',
      author: {
        name: 'Evavic44',
        role: 'https://github.com/Evavic44',
        image: 'https://github.com/Evavic44.png',
      },
    },
    {
      content:
        "This is just an awesome community. This is the first community I have seen which puts collaboration first than the code. Collaborative people make a collaborative community and EddieHub is a perfect example of it 😄. I can't rate this community on the scale because priceless things can't be quantified ❤️",
      author: {
        name: 'Kaiwalya Koparkar',
        role: 'https://github.com/kaiwalyakoparkar',
        image: 'https://github.com/kaiwalyakoparkar.png',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            What it means to be part of this community in the members' own words
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
