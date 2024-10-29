import Hero from "@/components/Hero";
import QRGenerator from "@/components/QRGenerator";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Advertisement from "@/components/Advertisement";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Advertisement />
      <QRGenerator />
      <Advertisement />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;