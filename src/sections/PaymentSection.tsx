import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  CreditCard,
  Wallet,
  Landmark,
  Banknote,
  CheckCircle,
} from "lucide-react";

interface PaymentSectionProps {
  id?: string;
  className?: string;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ id, className }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"one-time" | "installment">(
    "one-time",
  );

  const renderPaymentForm = () => {
    const formClasses =
      "mt-8 p-6 bg-[#1e1e2a] rounded-xl border border-[#3a3a4a] shadow-lg";
    const inputClasses =
      "w-full p-3 rounded-lg bg-[#2a2a3a] text-white border border-[#3a3a4a] focus:ring-2 focus:ring-[#ff4757] focus:border-transparent outline-none placeholder-gray-500 transition-all";
    const buttonClasses =
      "w-full py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md";

    switch (selectedPaymentMethod) {
      case "paypal":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={formClasses}
          >
            <div className="flex items-center mb-4">
              <Wallet className="w-8 h-8 text-[#0070BA] mr-3" />
              <h4 className="text-2xl font-bold text-white">PayPal Checkout</h4>
            </div>
            <p className="text-gray-400 mb-6">
              You'll be redirected to PayPal to complete your purchase securely.
            </p>
            <div className="bg-[#2a2a3a] p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Plan:</span>
                <span className="font-medium text-white">
                  {selectedPlan === "one-time"
                    ? "One-Time ($40)"
                    : "Installment ($15/month)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Billing:</span>
                <span className="font-medium text-white">
                  {selectedPlan === "one-time"
                    ? "Charged once"
                    : "Recurring monthly"}
                </span>
              </div>
            </div>
            <button className={`${buttonClasses} bg-[#0070BA] cursor-pointer`}>
              Continue to PayPal
            </button>
          </motion.div>
        );

      case "payoneer":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={formClasses}
          >
            <div className="flex items-center mb-4">
              <Banknote className="w-8 h-8 text-[#FF4800] mr-3" />
              <h4 className="text-2xl font-bold text-white">
                Payoneer Payment
              </h4>
            </div>
            <p className="text-gray-400 mb-6">
              You'll be redirected to Payoneer's secure portal to complete your
              purchase.
            </p>
            <div className="bg-[#2a2a3a] p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Plan:</span>
                <span className="font-medium text-white">
                  {selectedPlan === "one-time"
                    ? "One-Time ($40)"
                    : "Installment ($15/month)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Billing:</span>
                <span className="font-medium text-white">
                  {selectedPlan === "one-time"
                    ? "Charged once"
                    : "Recurring monthly"}
                </span>
              </div>
            </div>
            <button className={`${buttonClasses} bg-[#FF4800] cursor-pointer`}>
              Continue to Payoneer
            </button>
          </motion.div>
        );

      case "credit_card":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={formClasses}
          >
            <div className="flex items-center mb-4">
              <CreditCard className="w-8 h-8 text-[#ff4757] mr-3" />
              <h4 className="text-2xl font-bold text-white">
                Credit/Debit Card
              </h4>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className={inputClasses}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className={inputClasses}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className={inputClasses}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cardholderName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  className={inputClasses}
                  placeholder="John Smith"
                />
              </div>

              <div className="bg-[#2a2a3a] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Plan:</span>
                  <span className="font-medium text-white">
                    {selectedPlan === "one-time"
                      ? "One-Time ($40)"
                      : "Installment ($15/month)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Billing:</span>
                  <span className="font-medium text-white">
                    {selectedPlan === "one-time"
                      ? "Charged once"
                      : "Recurring monthly"}
                  </span>
                </div>
              </div>

              <button
                className={`${buttonClasses} bg-[#ff4757] mt-4 cursor-pointer`}
              >
                {selectedPlan === "one-time" ? "Pay $40" : "Start Installments"}
              </button>
            </form>
          </motion.div>
        );

      case "other":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={formClasses}
          >
            <div className="flex items-center mb-4">
              <Landmark className="w-8 h-8 text-[#ff4757] mr-3" />
              <h4 className="text-2xl font-bold text-white">
                Other Payment Method
              </h4>
            </div>

            <p className="text-gray-400 mb-6">
              Please specify your preferred payment method and we'll contact you
              with instructions.
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="otherMethod"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Payment Method
                </label>
                <input
                  type="text"
                  id="otherMethod"
                  className={inputClasses}
                  placeholder="e.g., Bank Transfer, Cryptocurrency"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={inputClasses}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="bg-[#2a2a3a] p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-400">Selected Plan:</span>
                  <span className="font-medium text-white">
                    {selectedPlan === "one-time"
                      ? "One-Time ($40)"
                      : "Installment ($15/month)"}
                  </span>
                </div>
              </div>

              <button
                className={`${buttonClasses} bg-[#ff4757] cursor-pointer`}
              >
                Request Payment Instructions
              </button>
            </form>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-8 bg-[#1e1e2a] rounded-xl border-2 border-dashed border-[#3a3a4a] text-center"
          >
            <div className="text-gray-400 text-lg">
              Select a payment method to continue
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section
      id={id}
      className={`${className} py-16 bg-gradient-to-b from-[#0d0d12] to-[#1a1a24]`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff4757] mb-4">
            Upgrade to April Music Player Pro
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Get <strong>lifetime access</strong> to all premium features and
            future updates with our flexible payment options.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#1e1e2a] p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${selectedPlan === "one-time" ? "bg-[#ff4757] text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setSelectedPlan("one-time")}
            >
              One-Time Payment
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${selectedPlan === "installment" ? "bg-[#ff4757] text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setSelectedPlan("installment")}
            >
              Installment Plan
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* One-time Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`bg-[#1e1e2a] p-8 rounded-2xl shadow-xl border-2 ${selectedPlan === "one-time" ? "border-[#ff4757]" : "border-transparent"} transition-all`}
          >
            {selectedPlan === "one-time" && (
              <div className="absolute top-0 right-0 bg-[#ff4757] text-white text-xs font-bold py-1 px-4 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-4">
              One-Time Payment
            </h3>

            <p className="text-gray-400 mb-6">
              Pay once and get lifetime access to all features and updates.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$40</span>
              <span className="text-gray-500 ml-2">one time</span>
            </div>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Full access to all Pro features</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Lifetime</strong> ownership
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Free updates forever</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-bold cursor-pointer ${selectedPlan === "one-time" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-400"} shadow-md`}
              onClick={() => setSelectedPaymentMethod("credit_card")}
            >
              {selectedPlan === "one-time"
                ? "Get Lifetime Access"
                : "Select One-Time"}
            </motion.button>
          </motion.div>

          {/* Installment Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={`bg-[#1e1e2a] p-8 rounded-2xl shadow-xl border-2 ${selectedPlan === "installment" ? "border-[#ff4757]" : "border-transparent"} transition-all`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Installment Plan
            </h3>

            <p className="text-gray-400 mb-6">
              Spread your payment over 3 months with convenient installments.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$15</span>
              <span className="text-gray-500 ml-2">/month</span>
              <div className="text-gray-400 text-sm mt-1">
                (Total $45 after 3 months)
              </div>
            </div>

            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Access to all Pro features</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Full ownership after final payment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Free updates included</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#ff4757] mr-3 mt-0.5 flex-shrink-0" />
                <span>Cancel anytime</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-bold cursor-pointer ${selectedPlan === "installment" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-400"} shadow-md`}
              onClick={() => setSelectedPaymentMethod("credit_card")}
            >
              {selectedPlan === "installment"
                ? "Start Installments"
                : "Select Installments"}
            </motion.button>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Secure Payment Methods
          </h3>

          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            All payments are processed securely. We never store your payment
            details.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${selectedPaymentMethod === "credit_card" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a]"}`}
              onClick={() => setSelectedPaymentMethod("credit_card")}
            >
              <CreditCard className="w-5 h-5 mr-2" /> Card
            </button>
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${selectedPaymentMethod === "paypal" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a]"}`}
              onClick={() => setSelectedPaymentMethod("paypal")}
            >
              <Wallet className="w-5 h-5 mr-2" /> PayPal
            </button>
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${selectedPaymentMethod === "payoneer" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a]"}`}
              onClick={() => setSelectedPaymentMethod("payoneer")}
            >
              <Banknote className="w-5 h-5 mr-2" /> Payoneer
            </button>
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${selectedPaymentMethod === "other" ? "bg-[#ff4757] text-white" : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a]"}`}
              onClick={() => setSelectedPaymentMethod("other")}
            >
              <Landmark className="w-5 h-5 mr-2" /> Other
            </button>
          </div>

          {/* Payment Form */}
          {renderPaymentForm()}

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>All plans include a 30-day money-back guarantee.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
