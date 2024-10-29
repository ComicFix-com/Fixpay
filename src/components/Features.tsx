import { QrCode, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Instant Generation",
    description: "Create QR codes in seconds with our intuitive interface",
  },
  {
    icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Secure Payments",
    description: "Built on UPI's secure infrastructure for safe transactions",
  },
  {
    icon: <QrCode className="h-6 w-6 md:h-8 md:w-8" />,
    title: "Customizable",
    description: "Add amounts, notes, and merchant details to your QR codes",
  },
];

const Features = () => {
  return (
    <div className="bg-muted py-6 sm:py-8 md:py-16">
      <div className="container px-3 sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Choose FixPay?
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Simple, secure, and efficient payment solutions for your business
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm text-center touch-manipulation"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-3 md:mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;