import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-wk-maroon text-white",
        gold: "border-amber-300 bg-wk-gold text-wk-dark-maroon",
        secondary: "border-transparent bg-slate-100 text-slate-900",
        destructive: "border-transparent bg-rose-600 text-white",
        outline: "text-slate-950 border-slate-200",
        shopee: "bg-[#EE4D2D]/10 text-[#EE4D2D] border-[#EE4D2D]/30",
        gofood: "bg-[#00AA13]/10 text-[#00AA13] border-[#00AA13]/30",
        grabfood: "bg-[#00B14F]/10 text-[#00B14F] border-[#00B14F]/30",
        offline: "bg-amber-100 text-amber-900 border-amber-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
