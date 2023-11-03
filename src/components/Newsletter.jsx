import { Container } from '@/components/Container'

export function Newsletter() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Subscribe to the EddieHub Newsletter
          </h2>
          <div className="my-4">
            <iframe
              src="https://eddiehub.substack.com/embed"
              className="rounded"
              width="480"
              height="150"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
