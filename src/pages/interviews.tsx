import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/interviews/interview-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import type { Interview } from "@shared/schema";

export default function Interviews() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: interviews, isLoading } = useQuery<Interview[]>({
    queryKey: searchQuery ? ["/api/interviews", { q: searchQuery }] : ["/api/interviews"],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The query will automatically refetch when searchQuery changes
  };

  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Interview Archive
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Explore conversations with healthcare professionals, researchers, and
            industry experts who share their insights, experiences, and advice for
            aspiring healthcare professionals.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray w-5 h-5" />
              <Input
                type="text"
                placeholder="Search interviews by name, role, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-soft-pink/20 text-lg"
              />
            </div>
          </form>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-warm-gray">
            {isLoading ? "Loading..." : `${interviews?.length || 0} interview${interviews?.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        {/* Interviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-6 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-12" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            ))
          ) : interviews && interviews.length > 0 ? (
            interviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-warm-gray text-lg">
                {searchQuery ? "No interviews found matching your search." : "No interviews available yet."}
              </p>
              {searchQuery && (
                <Button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 bg-soft-pink hover:bg-soft-pink/80 text-white"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Suggest an Interview Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Know Someone We Should Interview?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Help us connect with inspiring healthcare professionals who would
              love to share their story with our community. We're always looking
              for diverse voices and perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:interviews@medteentalk.org?subject=Interview Suggestion"
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Suggest an Interview
              </a>
              <a
                href="/get-involved"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-block"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
