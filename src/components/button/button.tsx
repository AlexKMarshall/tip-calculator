import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Box } from '..'
import { button } from './button.css'

type Props = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'disabled'
> & { children: ReactNode }
export function Button({
  type = 'button',
  onClick,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <Box
      component="button"
      padding="2xs"
      background="accentActive"
      type={type}
      onClick={onClick}
      className={button}
      {...props}
    >
      {children}
    </Box>
  )
}
