import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const headerVariants = cva("w-full select-none flex items-center gap-4", {
  variants: {
    variant: {
      primary: "bg-gray-600 text-gray-100 text-lg",
      secondary: "bg-slate-400 text-slate-800",
    },
    size: {
      sm: "h-14 px-2",
      md: "h-14 px-4",
      lg: "h-14 px-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface HeaderProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          headerVariants({
            className,
            variant,
            size,
          }),
        )}
        {...props}
      />
    );
  },
);

Header.displayName = "Header";
export { Header };
