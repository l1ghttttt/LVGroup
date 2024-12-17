import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full border-[1px] border-background  bg-transparent px-4 py-4 text-base shadow-sm placeholder:text-[rgba(150, 150, 150, .5)] ring-0 focus:ring-0 focus:border-background focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-[18px]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
