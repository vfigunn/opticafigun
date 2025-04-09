
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl,
  className
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="h-0.5 w-12 bg-primary transition-all duration-300 group-hover:w-16" />
      </div>
    </div>
  );
};

export default ServiceCard;
