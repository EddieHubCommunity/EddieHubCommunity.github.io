import { Container } from '@/components/Container'
import { H2 } from '@/components/Headings'
import clsx from 'clsx'

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

const YouTubeEmbed = ({ videoId, className }) => {
  return (
    <div className={clsx('video-responsive', className)}>
      <iframe
        width="410"
        height="240"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
        className="mx-auto"
      ></iframe>
    </div>
  )
}

const InfoSectipn = ({ title, name, description, className }) => {
  return (
    <div className={clsx('flex-grow-1 flex-1 text-left', className)}>
      <h3 className="bg-teal-500 p-2 text-xl font-bold text-white">{title}</h3>
      <h4 className="my-3 text-lg font-bold">{name}</h4>
      <p className="text-lg italic">{description}</p>
    </div>
  )
}

const Founder = ({ name, title, videoId, description, isReverse = false }) => {
  return (
    <div>
      {isReverse ? (
        <div className="mt-10  flex flex-col gap-10 md:flex-row">
          <InfoSectipn title={title} name={name} description={description} />
          <YouTubeEmbed videoId={videoId} className="flex-grow-2" />
        </div>
      ) : (
        <div className="mt-10  flex flex-col gap-10 md:flex-row">
          <YouTubeEmbed
            videoId={videoId}
            className="flex-grow-2 order-2 md:order-1"
          />
          <InfoSectipn
            title={title}
            name={name}
            description={description}
            className="order-1 md:order-2"
          />
        </div>
      )}
    </div>
  )
}

export function Founders() {
  return (
    <section id="founders" aria-label="founders" className="bg-slate-50 pt-20">
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
