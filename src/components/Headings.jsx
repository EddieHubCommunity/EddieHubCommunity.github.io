import React from 'react'
import clsx from 'clsx'

export const H1 = ({ children, className }) => {
  const defaultClass =
    'max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'
  return <h1 className={clsx(defaultClass, className)}>{children}</h1>
}

export const H2 = ({ children, className, id }) => {
  const defaultClass = 'font-display text-3xl tracking-tight sm:text-4xl'
  return (
    <h2 id={id} className={clsx(defaultClass, className)}>
      {children}
    </h2>
  )
}
