import clsx from 'clsx'

export const YouTubeEmbed = ({ videoId, className }) => {
  return (
    <div className={clsx('my-3 aspect-video md:my-0', className)}>
      <iframe
        width="100%"
        height="110%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
        className="mx-auto"
      ></iframe>
    </div>
  )
}
