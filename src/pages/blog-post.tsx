import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug,
  });

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The blog post link has been copied to your clipboard.",
        });
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-creme">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-4 w-3/4 mb-8" />
          <Skeleton className="h-64 w-full rounded-2xl mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-creme flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-warm-gray mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button
            onClick={() => setLocation("/blog")}
            className="bg-soft-pink hover:bg-soft-pink/80 text-white"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    Medicine: "bg-soft-pink/20 text-soft-pink",
    "Mental Health": "bg-coral/20 text-coral",
    "Career Path": "bg-sage/20 text-sage",
    default: "bg-warm-gray/20 text-warm-gray",
  };

  const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || categoryColors.default;

  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => setLocation("/blog")}
          className="mb-8 text-warm-gray hover:text-soft-pink"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        {/* Article header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge className={`${categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
              {post.category}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-warm-gray">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-sage text-white text-sm font-medium">
                  {post.authorInitial}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.authorName}</span>
            </div>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-warm-gray mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="text-charcoal leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Author info */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-sage text-white text-xl font-medium">
                {post.authorInitial}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-charcoal">
                {post.authorName}
              </h3>
              <p className="text-warm-gray">
                Contributing writer at Med Teen Talk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
