import { YouTubeEmbed } from './YouTubeEmbed'
import { InfoSectipn } from './InfoSection'

export const Founder = ({
  name,
  title,
  videoId,
  description,
  isReverse = false,
}) => {
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
