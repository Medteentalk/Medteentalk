import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertVolunteerSchema } from "@shared/schema";
import { Heart, Sparkles, Users, Target } from "lucide-react";

const formSchema = insertVolunteerSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const roles = [
  { value: "writer", label: "Content Writer" },
  { value: "editor", label: "Editor" },
  { value: "researcher", label: "Researcher" },
  { value: "social-media", label: "Social Media" },
  { value: "design", label: "Design & Graphics" },
  { value: "outreach", label: "Community Outreach" },
  { value: "other", label: "Other" },
];

export default function VolunteerForm() {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/volunteers", data);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering. We'll be in touch soon.",
      });
      reset();
      setSelectedRole("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="space-y-8">
      {/* Fun stats section */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 text-soft-pink" />
          </div>
          <div className="text-2xl font-bold text-soft-pink">200+</div>
          <div className="text-sm text-warm-gray">Hours of Impact</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-sage" />
          </div>
          <div className="text-2xl font-bold text-sage">50+</div>
          <div className="text-sm text-warm-gray">Active Volunteers</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-coral" />
          </div>
          <div className="text-2xl font-bold text-coral">10K+</div>
          <div className="text-sm text-warm-gray">Students Reached</div>
        </div>
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">95%</div>
          <div className="text-sm text-warm-gray">Volunteer Satisfaction</div>
        </div>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-charcoal">
            Join Our Amazing Team! 🚀
          </CardTitle>
          <p className="text-warm-gray">
            Ready to make a real difference? Join our passionate community of teen changemakers 
            and help revolutionize healthcare education. Every volunteer brings unique skills 
            that create meaningful impact!
          </p>
        </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                className="rounded-xl"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className="rounded-xl"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role You're Interested In *</Label>
            <Select
              value={selectedRole}
              onValueChange={(value) => {
                setSelectedRole(value);
                register("role").onChange({ target: { value } });
              }}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" {...register("role")} value={selectedRole} />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Relevant Experience *</Label>
            <Textarea
              id="experience"
              {...register("experience")}
              placeholder="Tell us about your relevant experience, skills, or background..."
              className="rounded-xl min-h-[100px]"
            />
            {errors.experience && (
              <p className="text-sm text-red-500">{errors.experience.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
            <Textarea
              id="motivation"
              {...register("motivation")}
              placeholder="Share your motivation for joining Med Teen Talk..."
              className="rounded-xl min-h-[100px]"
            />
            {errors.motivation && (
              <p className="text-sm text-red-500">{errors.motivation.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Availability *</Label>
            <Textarea
              id="availability"
              {...register("availability")}
              placeholder="How many hours per week can you contribute? Any specific time constraints?"
              className="rounded-xl"
            />
            {errors.availability && (
              <p className="text-sm text-red-500">{errors.availability.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-soft-pink hover:bg-soft-pink/80 text-white py-3 rounded-xl font-medium transition-all duration-300"
          >
            {mutation.isPending ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}
