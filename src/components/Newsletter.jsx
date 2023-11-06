import { Container } from '@/components/Container'
import Image from 'next/image'

import CommunityAward from '@/images/awards/github-award-community-growth-eddie-jaoude.jpeg'
import TeacherAward from '@/images/awards/github-award-top-teacher-eddie-jaoude.jpeg'

export function Newsletter() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Container className="relative space-y-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Subscribe to the EddieHub Newsletter
          </h2>
          <div className="my-4">
            <iframe
              src="https://eddiehub.substack.com/embed"
              className="w-full rounded"
              width="480"
              height="150"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto text-center">
          <h3 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Awards
          </h3>
          <div className="my-4 flex flex-wrap items-center justify-evenly gap-4">
            <Image alt={"Community Award"} src={CommunityAward} width="500" className="rounded" />
            <Image alt={"Teacher Award"} src={TeacherAward} width="500" className="rounded" />
          </div>
        </div>
      </Container>
    </section>
  )
}
