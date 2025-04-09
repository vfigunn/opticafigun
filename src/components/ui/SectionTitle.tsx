
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center, className }: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12", 
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        "h-1 w-20 bg-primary mt-4",
        center && "mx-auto"
      )} />
    </div>
  );
};

export default SectionTitle;
