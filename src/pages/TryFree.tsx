
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const TryFree = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate account creation
    console.log("Creating account with:", formData);
    // Redirect to dashboard
    navigate("/dashboard");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-brand-navy mb-4">
                Start Your Free Trial
              </h1>
              <p className="text-xl text-brand-gray">
                Get 7 days of full access to StratMind.ai. No credit card required.
              </p>
            </div>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-navy">
                  Create Your Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">First Name</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-2">Last Name</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Company (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Password</label>
                    <input 
                      type="password" 
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Create a strong password"
                      required
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-3">Your 7-day trial includes:</h3>
                    <ul className="space-y-2">
                      {[
                        "Unlimited strategy analyses",
                        "AI-powered SWOT analysis",
                        "Priority matrix & risk mapping",
                        "Execution timeline generator",
                        "Smart report generation"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-brand-teal" />
                          <span className="text-brand-gray text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-3">
                    Start Free Trial
                  </Button>
                </form>
                
                <p className="text-center text-sm text-brand-gray mt-4">
                  Already have an account? <a href="/signin" className="text-brand-blue hover:underline">Sign in</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TryFree;
