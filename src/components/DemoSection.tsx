
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-navy to-brand-blue">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See How StratMind.ai 
              <span className="text-brand-teal block">Turns Goals into Game Plans</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Watch how our AI analyzes your business context and generates comprehensive strategic plans in minutes, not weeks.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span className="text-gray-200">Real-time strategy generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span className="text-gray-200">Interactive decision trees</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span className="text-gray-200">Automated report generation</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 text-lg rounded-xl glow-effect transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Live Demo
            </Button>
          </div>

          {/* Demo Mockup */}
          <div className="relative">
            {/* Browser Window */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500 ml-4">
                  app.stratmind.ai/dashboard
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-navy">Strategic Analysis</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600 w-24">Market Analysis</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-blue h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600 w-24">Risk Assessment</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-teal h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600 w-24">Strategy Plan</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="h-32 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded flex items-end justify-around">
                      <div className="w-8 bg-brand-blue h-20 rounded-t"></div>
                      <div className="w-8 bg-brand-teal h-16 rounded-t"></div>
                      <div className="w-8 bg-green-500 h-24 rounded-t"></div>
                      <div className="w-8 bg-orange-500 h-12 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-teal/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-blue/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
