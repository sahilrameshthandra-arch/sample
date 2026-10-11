'use client'

import { clsx } from 'clsx'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'outline'
  size?: 'sm' | 'md'
}

export function Badge({ className, variant = 'primary', size = 'md', children, ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-100 text-accent-700',
    neutral: 'bg-neutral-100 text-neutral-700',
    outline: 'border border-neutral-300 bg-transparent text-neutral-700',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-3 py-1 text-caption',
  }

  return (
    <span
      className={clsx('inline-flex items-center rounded-full font-medium', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  )
}