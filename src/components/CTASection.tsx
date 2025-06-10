
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-teal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-brand-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-10 w-10 text-brand-teal" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Making Smarter 
            <span className="text-brand-teal block">Decisions Today</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Join thousands of entrepreneurs and consultants who trust StratMind.ai to transform uncertainty into strategic advantage.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/try-free">
              <Button 
                size="lg" 
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg rounded-xl glow-effect transition-all duration-300 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
              <span className="text-gray-200">No credit card required</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
              <span className="text-gray-200">7-day free trial</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
              <span className="text-gray-200">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
