import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Base Card (shadcn-style)
 */
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-background text-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * Card Content
 */
export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Card Header
 */
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

/**
 * Card Title
 */
export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * Card Description
 */
export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/* =========================================================
   ✅ CUSTOM VARIANTS (FIX FOR YOUR BUILD)
========================================================= */

/**
 * GoldTopCard — premium gold accent
 */
export function GoldTopCard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 via-background to-background shadow-lg",
        className
      )}
      {...props}
    >
      {/* top glow bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-80" />
      {children}
    </Card>
  );
}

/**
 * DarkNavyCard — deep premium dark UI
 */
export function DarkNavyCard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "bg-[#0b1220] text-white border border-blue-900/40 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

/**
 * OutlinedCard — minimal bordered card
 */
export function OutlinedCard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "bg-transparent border border-gray-700/60 shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
export function CardIndigoTop({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 via-background to-background shadow-lg",
        className
      )}
      {...props}
    >
      {/* top indigo glow bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-500 opacity-80" />
      {children}
    </Card>
  );
}