import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";

const QRGenerator = () => {
  const [merchantName, setMerchantName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const generateUPILink = () => {
    return `upi://pay?pa=${merchantName}&am=${amount}&tn=${note}`;
  };

  const handleCopyLink = async () => {
    setIsGenerating(true);
    try {
      await navigator.clipboard.writeText(generateUPILink());
      setIsGenerated(true);
      setTimeout(() => setIsGenerated(false), 2000);
      toast.success("UPI link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link");
    }
    setTimeout(() => setIsGenerating(false), 500);
  };

  return (
    <div id="generator" className="container px-3 sm:px-4 py-6 sm:py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Create Your QR Code
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <Label htmlFor="merchant" className="text-sm sm:text-base">UPI ID / Merchant Name</Label>
                <Input
                  id="merchant"
                  placeholder="example@upi"
                  value={merchantName}
                  onChange={(e) => setMerchantName(e.target.value)}
                  className="h-11 sm:h-12 text-base sm:text-lg p-2 sm:p-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm sm:text-base">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-11 sm:h-12 text-base sm:text-lg p-2 sm:p-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note" className="text-sm sm:text-base">Note (Optional)</Label>
                <Input
                  id="note"
                  placeholder="Payment for..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="h-11 sm:h-12 text-base sm:text-lg p-2 sm:p-3"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-3 sm:p-4 md:p-8 rounded-lg shadow-lg text-center mt-4 sm:mt-6 md:mt-0">
            {merchantName ? (
              <>
                <div className="relative">
                  <QRCodeSVG
                    value={generateUPILink()}
                    size={200}
                    className={`mx-auto mb-3 sm:mb-4 md:mb-6 w-40 sm:w-48 md:w-64 transition-opacity duration-200 ${
                      isGenerating ? 'opacity-50' : 'opacity-100'
                    }`}
                    includeMargin
                  />
                  {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
                    </div>
                  )}
                  {isGenerated && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 animate-in zoom-in duration-200" />
                    </div>
                  )}
                </div>
                <button
                  onClick={handleCopyLink}
                  disabled={isGenerating}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors disabled:opacity-50 touch-manipulation"
                >
                  {isGenerating ? 'Copying...' : 'Copy UPI Link'}
                </button>
              </>
            ) : (
              <div className="h-40 sm:h-48 md:h-64 flex items-center justify-center text-gray-400 text-sm sm:text-base">
                Enter merchant details to generate QR code
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;