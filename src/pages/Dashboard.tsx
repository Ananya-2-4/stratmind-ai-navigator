import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  Download,
  Sparkles,
  ArrowRight,
  Brain,
  FileText,
  Users
} from "lucide-react";

const Dashboard = () => {
  const [currentGoal, setCurrentGoal] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [constraints, setConstraints] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    if (!currentGoal || !currentState) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const mockResults = {
    swotAnalysis: {
      strengths: ["Strong product-market fit", "Experienced team", "Unique value proposition"],
      weaknesses: ["Limited marketing budget", "Small team size", "Brand awareness"],
      opportunities: ["Growing market demand", "Partnership potential", "New customer segments"],
      threats: ["Increasing competition", "Economic uncertainty", "Technology changes"]
    },
    recommendations: [
      {
        priority: "High",
        action: "Focus on content marketing to build brand awareness",
        impact: "Increase brand visibility by 40%",
        timeline: "2-3 months"
      },
      {
        priority: "Medium",
        action: "Develop strategic partnerships with complementary businesses",
        impact: "Expand customer base by 25%",
        timeline: "3-6 months"
      },
      {
        priority: "Low",
        action: "Invest in customer retention programs",
        impact: "Improve customer lifetime value by 15%",
        timeline: "6+ months"
      }
    ],
    riskAssessment: [
      { risk: "Market saturation", probability: "Medium", impact: "High" },
      { risk: "Key team member departure", probability: "Low", impact: "High" },
      { risk: "Economic downturn", probability: "Medium", impact: "Medium" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-navy mb-2">Strategic Decision Assistant</h1>
          <p className="text-brand-gray">Get AI-powered insights for your business challenges</p>
        </div>

        {!showResults ? (
          /* Input Form */
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-brand-teal" />
                  <span>Tell us about your business situation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    What is your main business goal or challenge? *
                  </label>
                  <Textarea
                    placeholder="e.g., Increase customer acquisition, expand to new markets, improve profitability..."
                    value={currentGoal}
                    onChange={(e) => setCurrentGoal(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    Describe your current business state *
                  </label>
                  <Textarea
                    placeholder="e.g., Revenue, team size, market position, current strategies..."
                    value={currentState}
                    onChange={(e) => setCurrentState(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">
                    What constraints or limitations do you have? (Optional)
                  </label>
                  <Textarea
                    placeholder="e.g., Budget limitations, time constraints, resource availability..."
                    value={constraints}
                    onChange={(e) => setConstraints(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={!currentGoal || !currentState || isAnalyzing}
                  className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-3"
                >
                  {isAnalyzing ? (
                    <>
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Your Strategy...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Generate Strategic Analysis
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Results Display */
          <div className="max-w-6xl mx-auto space-y-6">
            {/* SWOT Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-brand-blue" />
                  <span>SWOT Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                      <ul className="space-y-1">
                        {mockResults.swotAnalysis.strengths.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Opportunities</h4>
                      <ul className="space-y-1">
                        {mockResults.swotAnalysis.opportunities.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Weaknesses</h4>
                      <ul className="space-y-1">
                        {mockResults.swotAnalysis.weaknesses.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Threats</h4>
                      <ul className="space-y-1">
                        {mockResults.swotAnalysis.threats.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-brand-teal" />
                  <span>Strategic Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockResults.recommendations.map((rec, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={rec.priority === "High" ? "destructive" : rec.priority === "Medium" ? "default" : "secondary"}>
                          {rec.priority} Priority
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-brand-gray">
                          <Calendar className="h-4 w-4" />
                          <span>{rec.timeline}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">{rec.action}</h4>
                      <p className="text-sm text-brand-gray">{rec.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span>Risk Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockResults.riskAssessment.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-brand-navy">{risk.risk}</span>
                      <div className="flex space-x-4">
                        <Badge variant="outline">
                          Probability: {risk.probability}
                        </Badge>
                        <Badge variant="outline">
                          Impact: {risk.impact}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => setShowResults(false)}
                variant="outline"
                className="px-6"
              >
                New Analysis
              </Button>
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
