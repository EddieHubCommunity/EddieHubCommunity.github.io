import { Container } from '@/components/Container'
import { H2 } from '@/components/Headings'
import { Founder } from './Founder'

const founders = [
  {
    name: 'Eddie Jaoude',
    title: 'Why EddieHub was founded',
    videoId: 'RnH9udLsAKk',
    description:
      '"Collaboration First, Code Second quickly became what the community members live by"',
  },
  {
    name: 'Sara Jaoude',
    title: "Find out about EddieHub's aims",
    videoId: 'eWetvRusfUU',
    description: '"Open Source is our hobby, our passion - not just our job"',
  },
]

export function Founders() {
  return (
    <section
      id="founders"
      aria-label="founders"
      className="bg-primary-600 pb-16 pt-20 text-white"
    >
      <Container>
        <div className="md:text-center">
          <H2>EddieHub Founders</H2>
          {founders.map((founder, id) => (
            <Founder
              key={id}
              name={founder.name}
              title={founder.title}
              videoId={founder.videoId}
              description={founder.description}
              isReverse={id % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
