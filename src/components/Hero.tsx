import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container px-4 py-8 md:py-16 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
            Generate UPI QR Codes
            <span className="text-accent block mt-2">In Seconds</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-2">
            Create custom QR codes for your business instantly. Simple, secure, and
            seamless UPI payments for everyone.
          </p>
          <button
            onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-4 md:px-6 py-3 text-base md:text-lg font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;