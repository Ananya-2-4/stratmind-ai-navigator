
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Trial",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for testing the waters",
      features: [
        "3 strategy analyses per month",
        "Basic SWOT analysis",
        "Email support",
        "7-day free trial"
      ],
      cta: "Start Free Trial",
      ctaLink: "/try-free",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Pro",
      price: { monthly: 49, yearly: 39 },
      description: "For growing businesses and consultants",
      features: [
        "Unlimited strategy analyses",
        "Advanced competitor research",
        "Priority matrix & risk mapping",
        "Notion/Asana integration",
        "24/7 chat support",
        "Custom report templates"
      ],
      cta: "Get Started",
      ctaLink: "/try-free",
      popular: true,
      color: "border-brand-teal ring-2 ring-brand-teal/20"
    },
    {
      name: "Business+",
      price: { monthly: 99, yearly: 79 },
      description: "For teams and enterprise needs",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "White-label reports",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics dashboard"
      ],
      cta: "Contact Sales",
      ctaLink: "/try-free",
      popular: false,
      color: "border-gray-200"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Simple, Transparent 
            <span className="text-gradient block">Pricing</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto mb-8">
            Choose the plan that fits your strategic needs. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-full p-1 w-fit mx-auto">
            <button 
              className={`px-4 py-2 rounded-full transition-all duration-200 ${!isYearly ? 'bg-white shadow-sm text-brand-navy' : 'text-brand-gray'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all duration-200 ${isYearly ? 'bg-white shadow-sm text-brand-navy' : 'text-brand-gray'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-brand-teal text-white text-xs rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.color} ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-navy mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-brand-gray text-sm">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-brand-navy">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-brand-gray ml-1">
                    /{isYearly ? 'month' : 'month'}
                  </span>
                  {isYearly && plan.price.yearly > 0 && (
                    <div className="text-sm text-brand-teal mt-1">
                      Billed yearly (${plan.price.yearly * 12})
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link to={plan.ctaLink}>
                  <Button 
                    className={`w-full py-3 rounded-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-brand-teal hover:bg-brand-teal/90 text-white glow-effect' 
                        : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <p className="text-brand-gray mb-4">14-day money-back guarantee • No setup fees • Cancel anytime</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm text-brand-gray">🔒 SSL Secured</div>
            <div className="text-sm text-brand-gray">💳 Secure Payments</div>
            <div className="text-sm text-brand-gray">🛡️ GDPR Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
