import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "text";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const variants: Record<string, string> = {
      default: "web-btn web-btn-primary",
      destructive:
        "web-btn border-transparent bg-red-600 text-white hover:bg-red-600/90 hover:opacity-95",
      outline: "web-btn web-btn-outline",
      secondary: "web-btn web-btn-secondary",
      ghost: "web-btn web-btn-ghost",
      link: "web-btn web-btn-ghost !min-h-0 rounded-none !px-0 !py-0 underline-offset-4 hover:underline",
      text: "web-btn web-btn-ghost !min-h-0 rounded-none !px-0 !py-0",
    };

    const sizes: Record<string, string> = {
      default: "",
      sm: "",
      lg: "",
      icon: "web-btn--icon !p-0",
    };

    const computedClass = cn(
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      const { children, ...restProps } = props;
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        ...restProps,
        className: cn(computedClass, child.props.className),
        ref: ref as any,
      });
    }

    return (
      <button
        className={computedClass}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
