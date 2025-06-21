import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ResourceCard from "@/components/resources/resource-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Star } from "lucide-react";
import type { Resource } from "@shared/schema";

const categories = ["All", "Education", "Reference", "Mental Health", "Tools"];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const filteredResources = resources?.filter((resource) => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesFeatured = !showFeatured || resource.featured;
    const matchesSearch = searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesFeatured && matchesSearch;
  }) || [];

  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Resources
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Discover a curated collection of educational tools, references, and
            resources to support your healthcare journey. From study materials to
            mental health support, find everything you need in one place.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray w-4 h-4" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-soft-pink/20"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={showFeatured ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFeatured(!showFeatured)}
                className={`rounded-full ${
                  showFeatured
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                }`}
              >
                <Star className="w-4 h-4 mr-1" />
                Featured
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${
                    selectedCategory === category
                      ? "bg-soft-pink hover:bg-soft-pink/80 text-white"
                      : "border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-warm-gray">
            {isLoading ? "Loading..." : `${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))
          ) : filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-warm-gray text-lg">
                No resources found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setShowFeatured(false);
                  setSearchQuery("");
                }}
                className="mt-4 bg-soft-pink hover:bg-soft-pink/80 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Suggest a Resource Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Know a Great Resource?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Help us expand our collection! If you know of a helpful resource
              that would benefit our community, let us know and we'll consider
              adding it to our curated list.
            </p>
            <a
              href="mailto:resources@medteentalk.org?subject=Resource Suggestion"
              className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Suggest a Resource
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
