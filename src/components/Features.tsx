import { QrCode, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Generation",
    description: "Create QR codes in seconds with our intuitive interface",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Payments",
    description: "Built on UPI's secure infrastructure for safe transactions",
  },
  {
    icon: <QrCode className="h-8 w-8" />,
    title: "Customizable",
    description: "Add amounts, notes, and merchant details to your QR codes",
  },
];

const Features = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose FixPay?
          </h2>
          <p className="text-gray-600">
            Simple, secure, and efficient payment solutions for your business
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;