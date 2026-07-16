import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "mx-auto max-w-3xl text-center"
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}