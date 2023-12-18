import clsx from 'clsx'

export const YouTubeEmbed = ({ videoId, className }) => {
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
