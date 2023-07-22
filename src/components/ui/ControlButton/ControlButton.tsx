import { ButtonHTMLAttributes, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

const controlButtonVariants = cva(
  'absolute grid place-items-center z-10 rounded-full shadow shadow-slate-500',
  {
    variants: {
      variant: {
        primary: 'bg-slate-100 text-gray-700 text-lg',
        secondary: 'bg-slate-400 text-slate-800 text-lg',
      },
      size: {
        sm: 'h-11 w-11',
        md: 'h-11 w-11',
        lg: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ControlButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof controlButtonVariants> {}

const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          controlButtonVariants({
            className,
            variant,
            size,
          })
        )}
        {...props}
      />
    );
  }
);

ControlButton.displayName = 'ControlButton';
export { ControlButton };
