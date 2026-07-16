import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-24 xl:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}