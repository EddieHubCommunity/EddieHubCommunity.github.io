import React from 'react'
import clsx from 'clsx'

export const H1 = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>
}

export const H2 = ({ children, className, id }) => {
  const defaultClass = 'font-display text-3xl tracking-tight sm:text-4xl'
  return (
    <h2 id={id} className={clsx(defaultClass, className)}>
      {children}
    </h2>
  )
}
