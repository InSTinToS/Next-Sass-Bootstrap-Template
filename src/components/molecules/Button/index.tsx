import { HTMLAttributes } from 'react'

const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => (
  <button type='button' {...props}>
    <span className='text-bg-primary'>{children}</span>
  </button>
)

export default Button
