import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import type { Resource } from "@shared/schema";

interface ResourceCardProps {
  resource: Resource;
}

const categoryColors = {
  Education: "bg-soft-pink/20 text-soft-pink",
  Reference: "bg-sage/20 text-sage",
  "Mental Health": "bg-coral/20 text-coral",
  Tools: "bg-warm-gray/20 text-warm-gray",
  default: "bg-warm-gray/20 text-warm-gray",
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const categoryColor = categoryColors[resource.category as keyof typeof categoryColors] || categoryColors.default;

  return (
    <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge className={`${categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
            {resource.category}
          </Badge>
          {resource.featured && (
            <div className="ml-auto">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
          {resource.title}
        </h3>
        
        <p className="text-warm-gray mb-4 line-clamp-3">
          {resource.description}
        </p>
        
        <Button
          className="w-full bg-soft-pink hover:bg-soft-pink/80 text-white rounded-xl font-medium transition-all duration-300"
          onClick={() => window.open(resource.url, "_blank")}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Resource
        </Button>
      </CardContent>
    </Card>
  );
}
