
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";

const Demo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <DemoSection />
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
