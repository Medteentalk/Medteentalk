import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, FileText, Headphones } from "lucide-react";
import type { Interview } from "@shared/schema";

interface InterviewCardProps {
  interview: Interview;
}

export default function InterviewCard({ interview }: InterviewCardProps) {
  return (
    <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge className="bg-soft-pink/20 text-soft-pink px-3 py-1 rounded-full text-sm font-medium">
            Interview
          </Badge>
          <span className="text-warm-gray text-sm ml-auto">
            {interview.publishedAt}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-charcoal mb-2 line-clamp-2">
          {interview.title}
        </h3>
        
        <div className="mb-3">
          <p className="text-soft-pink font-medium">{interview.intervieweeName}</p>
          <p className="text-warm-gray text-sm">{interview.intervieweeRole}</p>
        </div>
        
        <p className="text-warm-gray mb-4 line-clamp-3">
          {interview.description}
        </p>
        
        {interview.tags && interview.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {interview.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-sage/20 text-sage text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-2">
          {interview.videoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white"
              onClick={() => window.open(interview.videoUrl!, "_blank")}
            >
              <Play className="w-4 h-4 mr-1" />
              Video
            </Button>
          )}
          
          {interview.audioUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-sage text-sage hover:bg-sage hover:text-white"
              onClick={() => window.open(interview.audioUrl!, "_blank")}
            >
              <Headphones className="w-4 h-4 mr-1" />
              Audio
            </Button>
          )}
          
          {interview.transcriptUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-coral text-coral hover:bg-coral hover:text-white"
              onClick={() => window.open(interview.transcriptUrl!, "_blank")}
            >
              <FileText className="w-4 h-4 mr-1" />
              Transcript
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
