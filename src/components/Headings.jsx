import React from 'react'
import clsx from 'clsx'

export const H1 = React.forwardRef(({ children, className, ...rest }, ref) => {
  const defaultClass =
    'max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'
  return (
    <h1 ref={ref} className={clsx(defaultClass, className)} {...rest}>
      {children}
    </h1>
  )
})
H1.displayName = 'H1'

export const H2 = React.forwardRef(({ children, className, ...rest }, ref) => {
  const defaultClass = 'font-display text-3xl tracking-tight sm:text-4xl'
  return (
    <h2 ref={ref} className={clsx(defaultClass, className)} {...rest}>
      {children}
    </h2>
  )
})
H2.displayName = 'H2'
