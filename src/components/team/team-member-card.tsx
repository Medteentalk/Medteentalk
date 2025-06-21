import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import type { TeamMember } from "@shared/schema";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={member.imageUrl} alt={member.name} />
          <AvatarFallback className="bg-soft-pink text-white text-xl">
            {member.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold text-charcoal mb-2">
          {member.name}
        </h3>
        <p className="text-soft-pink font-medium mb-4">{member.role}</p>
        <p className="text-warm-gray text-sm mb-6 leading-relaxed">
          {member.bio}
        </p>
        <div className="flex justify-center space-x-2">
          {member.email && (
            <Button
              variant="outline"
              size="sm"
              className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white"
              onClick={() => window.open(`mailto:${member.email}`)}
            >
              <Mail className="w-4 h-4" />
            </Button>
          )}
          {member.linkedinUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white"
              onClick={() => window.open(member.linkedinUrl, "_blank")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
