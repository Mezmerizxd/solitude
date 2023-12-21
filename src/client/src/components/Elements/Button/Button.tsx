import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '../Spinner';

const variants = {
  primary: 'bg-none text-accent-dark border border-accent-light/50',
  inverse: 'bg-accent-dark/10 text-accent-dark',
  inverse2: 'bg-accent-dark/10 text-accent-dark border border-accent-light/50',
  hidden: 'bg-transparent text-accent-dark',
  hidden2: 'bg-transparent text-white-dark hover:text-accent-light',
  danger: 'bg-red-900 text-white',
};

const sizes = {
  flsm: 'py-1 px-2 sm:py-2 sm:px-4 text-sm',
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed rounded-sm font-medium focus:outline-none hover:opacity-80 duration-150',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';
