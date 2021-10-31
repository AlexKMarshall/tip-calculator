import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Box } from '..'
import { button } from './button.css'

type Props = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick'
> & { children: ReactNode }
export function Button({
  type = 'button',
  onClick,
  children,
}: Props): JSX.Element {
  return (
    <Box
      component="button"
      padding="xs"
      background="accentActive"
      type={type}
      onClick={onClick}
      className={button}
    >
      {children}
    </Box>
  )
}
