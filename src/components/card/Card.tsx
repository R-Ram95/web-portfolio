import clsx from "clsx";
import React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "flex flex-row flex-wrap md:flex-nowrap hover:bg-slate-400/5 hover:shadow-2xl rounded-md hover:backdrop-blur-md p-2",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx("font-medium text-slate-200", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardSubTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx("leading-none tracking-tight text-slate-200", className)}
    {...props}
  />
));
CardSubTitle.displayName = "CardSubTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-slate-400 tracking-tight ", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex items-center mt-2", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardTitle, CardSubTitle, CardDescription, CardFooter };
