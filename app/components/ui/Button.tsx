import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-3.5 rounded-full px-6 py-3.5 text-sm font-extrabold shadow-chip transition duration-200";

const variants = {
  primary: "bg-ink text-paper hover:-translate-y-0.5 hover:bg-lime hover:text-ink",
  ghost: "border border-ink hover:-translate-y-0.5 hover:bg-ink hover:text-paper",
};

export default function Button({ href, variant = "primary", external = false, children }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]}`} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}
