import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  background?: "white" | "surface";
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  background = "white",
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        background === "surface" ? "bg-brand-surface" : "bg-white",
        className
      )}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}
