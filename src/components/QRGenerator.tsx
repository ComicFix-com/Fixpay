import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QRGenerator = () => {
  const [merchantName, setMerchantName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const generateUPILink = () => {
    // This is a simplified UPI link format - in production, you'd need to follow the exact UPI specifications
    return `upi://pay?pa=${merchantName}&am=${amount}&tn=${note}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generateUPILink());
    toast.success("UPI link copied to clipboard!");
  };

  return (
    <div id="generator" className="container px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Create Your QR Code
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="merchant">UPI ID / Merchant Name</Label>
                <Input
                  id="merchant"
                  placeholder="example@upi"
                  value={merchantName}
                  onChange={(e) => setMerchantName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note">Note (Optional)</Label>
                <Input
                  id="note"
                  placeholder="Payment for..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            {merchantName ? (
              <>
                <QRCodeSVG
                  value={generateUPILink()}
                  size={256}
                  className="mx-auto mb-6"
                  includeMargin
                />
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Copy UPI Link
                </button>
              </>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400">
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