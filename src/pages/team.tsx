import { useQuery } from "@tanstack/react-query";
import TeamMemberCard from "@/components/team/team-member-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { TeamMember } from "@shared/schema";

export default function Team() {
  const { data: members, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team-members"],
  });

  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Our diverse team of passionate students, healthcare professionals, and
            educators is dedicated to making medical education accessible and
            engaging for teens everywhere.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-1/2 mx-auto mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mx-auto mb-6" />
                <div className="flex justify-center space-x-2">
                  <Skeleton className="h-8 w-8 rounded" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
            ))
          ) : (
            members?.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))
          )}
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a
              difference in healthcare education. Join our mission to empower the
              next generation of healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Apply to Volunteer
              </a>
              <a
                href="mailto:hello@medteentalk.org"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
