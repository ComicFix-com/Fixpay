import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container px-3 sm:px-4 py-6 sm:py-8 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6"
          >
            Generate UPI QR Codes
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-accent block mt-2"
            >
              In Seconds
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2"
          >
            Create custom QR codes for your business instantly. Simple, secure, and
            seamless UPI payments for everyone.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors touch-manipulation"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;