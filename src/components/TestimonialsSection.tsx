
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow Startup",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      content: "StratMind.ai helped us pivot our entire business strategy in just 2 weeks. The AI insights were spot-on and saved us months of expensive consulting.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "I use StratMind.ai with all my clients now. It's like having a senior strategy consultant available 24/7. The quality of analysis is incredible.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Manager, InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The execution timelines and priority matrix features are game-changers. We've reduced our planning cycles by 60% while improving strategy quality.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "As a solo entrepreneur, StratMind.ai gives me the strategic depth I couldn't afford with traditional consulting. It's transformed how I make decisions.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Strategy Lead, GrowthCo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The SWOT analysis and competitor insights are incredibly detailed. It's like having a research team at your fingertips.",
      rating: 5
    },
    {
      name: "Alex Johnson",
      role: "Consultant, Future Ventures",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Client presentations have never been easier. The automated reports look professional and the insights are always actionable.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Trusted by Strategic 
            <span className="text-gradient block">Decision Makers</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            See what founders, consultants, and business leaders say about StratMind.ai
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-brand-gray mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-brand-gray">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "1000+", label: "Active Users" },
            { number: "50k+", label: "Strategies Created" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "AI Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                {stat.number}
              </div>
              <div className="text-brand-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
