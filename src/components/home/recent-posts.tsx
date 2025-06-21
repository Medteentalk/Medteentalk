import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import BlogCard from "@/components/blog/blog-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";

export default function RecentPosts() {
  const [, setLocation] = useLocation();

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  const recentPosts = posts?.slice(0, 3) || [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Discover the latest insights, stories, and educational content from
            our teen contributors and guest experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-2xl" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          )}
        </div>

        <div className="text-center">
          <Button
            className="bg-sage hover:bg-sage/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => setLocation("/blog")}
          >
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
