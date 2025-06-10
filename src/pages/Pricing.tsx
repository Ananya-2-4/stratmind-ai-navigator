
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
