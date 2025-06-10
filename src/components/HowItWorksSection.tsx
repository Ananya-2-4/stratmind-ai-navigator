
import { Brain, Target, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Input Goals + Challenges",
      description: "Share your business objectives, current situation, and key challenges with our AI assistant.",
      step: "01"
    },
    {
      icon: Brain,
      title: "Get AI-Generated Strategy",
      description: "Receive comprehensive analysis, risk assessments, and strategic recommendations tailored to your needs.",
      step: "02"
    },
    {
      icon: Zap,
      title: "Execute with Confidence",
      description: "Follow step-by-step execution plans with timeline, priorities, and integration tools.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Transform your business challenges into actionable strategies in just three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="text-6xl font-bold text-brand-teal/20 mb-4 group-hover:text-brand-teal/40 transition-colors duration-300">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <step.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <span className="text-brand-gray mr-2">Ready to get started?</span>
            <span className="text-brand-blue font-semibold">Create your first strategy →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
