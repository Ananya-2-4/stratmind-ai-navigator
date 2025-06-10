
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
