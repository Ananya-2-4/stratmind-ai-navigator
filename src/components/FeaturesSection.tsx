
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Clock, 
  Puzzle, 
  FileText 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Builder",
      description: "Intelligent analysis of your business context to generate custom strategic frameworks and action plans.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "SWOT + Competitor Analysis",
      description: "Comprehensive market positioning analysis with real-time competitor insights and opportunity mapping.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "Priority Matrix & Risk Mapping",
      description: "Visual prioritization tools with risk assessment to help you focus on high-impact, low-risk initiatives.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Execution Timeline Generator",
      description: "Automated project timelines with milestones, dependencies, and resource allocation recommendations.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Puzzle,
      title: "Notion/Asana Integration",
      description: "Seamless workflow integration with your existing project management and documentation tools.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Smart Business Report Generator",
      description: "Professional strategy documents and presentations generated automatically from your analysis.",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Powerful Features for 
            <span className="text-gradient block">Strategic Excellence</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Everything you need to transform uncertainty into clear, actionable business strategies
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-brand-blue font-medium text-sm">
                    Learn more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
