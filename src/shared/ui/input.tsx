import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border-[1px] border-background bg-transparent px-5 py-6 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground ring-0 focus:ring-0 placeholder:text-[rgba(150, 150, 150, .5)]  focus:border-background focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-[20px]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
