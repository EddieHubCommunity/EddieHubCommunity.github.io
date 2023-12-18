import clsx from 'clsx'
export const InfoSectipn = ({ title, name, description, className }) => {
  return (
    <div className={clsx('flex-grow-1 flex-1 text-left', className)}>
      <h3 className="bg-teal-500 p-2 text-xl font-bold text-white">{title}</h3>
      <h4 className="my-3 text-lg font-bold">{name}</h4>
      <p className="text-lg italic">{description}</p>
    </div>
  )
}
