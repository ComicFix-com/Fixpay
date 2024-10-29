import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container px-4 py-16 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Generate UPI QR Codes
            <span className="text-accent block mt-2">In Seconds</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create custom QR codes for your business instantly. Simple, secure, and
            seamless UPI payments for everyone.
          </p>
          <button
            onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;