const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">FixPay</h2>
          <p className="text-gray-600 mb-4">
            Making UPI payments simple and accessible
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FixPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;