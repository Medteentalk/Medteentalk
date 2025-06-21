import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocation } from "wouter";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors = {
  Medicine: "bg-soft-pink/20 text-soft-pink",
  "Mental Health": "bg-coral/20 text-coral",
  "Career Path": "bg-sage/20 text-sage",
  default: "bg-warm-gray/20 text-warm-gray",
};

export default function BlogCard({ post }: BlogCardProps) {
  const [, setLocation] = useLocation();

  const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || categoryColors.default;

  return (
    <Card className="bg-creme rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge className={`${categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
            {post.category}
          </Badge>
          <span className="text-warm-gray text-sm ml-auto">
            {post.publishedAt}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-warm-gray mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-sage text-white text-sm font-medium">
                {post.authorInitial}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-warm-gray">{post.authorName}</span>
          </div>
          <Button
            variant="ghost"
            className="text-soft-pink hover:text-coral transition-colors font-medium text-sm p-0"
            onClick={() => setLocation(`/blog/${post.slug}`)}
          >
            Read More →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
