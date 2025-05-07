import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
                         children,
                         variant = "primary",
                         className,
                         ...props
                       }: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative flex h-10 items-center justify-center rounded-xl px-6 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary"
          ? "bg-[#c9ff36] text-black hover:bg-[#b8ee25] focus:ring-[#c9ff36]"
          : "bg-white text-[#c9ff36] border border-[#c9ff36] hover:bg-gray-50 focus:ring-[#c9ff36]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;