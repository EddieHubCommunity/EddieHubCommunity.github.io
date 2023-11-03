import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            There is no gatekeeping in Open Source, this fosters a real sense of
            collaboration, communication and career development
          </p>
          <Button
            href="https://github.com/EddieHubCommunity?view_as=public#steps-to-get-started"
            color="white"
            className="mt-10"
          >
            Quickstart Guide
          </Button>
        </div>
      </Container>
    </section>
  )
}
