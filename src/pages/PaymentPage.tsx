import { motion } from "framer-motion";
import {
  Banknote,
  CheckCircle,
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import CreditCardForm from "../components/pages/payment/CreditCardForm";
import PayPalForm from "../components/pages/payment/PaypalForm";
import PayoneerForm from "../components/pages/payment/PayoneerForm";
import OtherPaymentForm from "../components/pages/payment/OtherPaymentForm";
import SectionComponent from "../components/global/SectionComponent";

export default function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit_card");
  const [selectedPlan, setSelectedPlan] = useState<"one-time" | "installment">(
    "one-time",
  );

  // Common styles for payment forms
  const commonFormProps = {
    selectedPlan,
    formClasses:
      "mt-8 p-6 bg-[#1e1e2a] rounded-xl border border-[#3a3a4a] shadow-lg",
    inputClasses:
      "w-full p-3 rounded-lg bg-[#2a2a3a] text-white border border-[#3a3a4a] focus:ring-2 focus:ring-[#ff4757] focus:border-transparent outline-none placeholder-gray-500 transition-all",
    buttonClasses:
      "w-full py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md cursor-pointer",
  };

  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case "credit_card":
        return <CreditCardForm {...commonFormProps} />;
      case "paypal":
        return <PayPalForm {...commonFormProps} />;
      case "payoneer":
        return <PayoneerForm {...commonFormProps} />;
      case "other":
        return <OtherPaymentForm {...commonFormProps} />;
    }
  };

  return (
    <SectionComponent id="/payment" className={"py-16"}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff4757] mb-4">
            Unlock Limitless Music Learning
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the world's most innovative language learning through
            music. We believe in fair pricing - enjoy{" "}
            <span className="text-white font-medium">lifetime access</span> to
            all premium features, including{" "}
            <span className="text-white font-medium">all future updates</span>,
            for just one simple payment.
          </p>
        </motion.div>

        {/* Pricing Cards - Now directly clickable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* One-time Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedPlan("one-time")}
            className={`relative bg-[#1e1e2a] p-8 rounded-2xl shadow-xl border-2 ${
              selectedPlan === "one-time"
                ? "border-[#ff4757]"
                : "border-transparent hover:border-[#3a3a4a]"
            } transition-all cursor-pointer group overflow-hidden`}
          >
            {selectedPlan === "one-time" && (
              <div className="absolute top-0 right-0 w-32 bg-[#ff4757] text-white text-xs font-bold px-3 py-1 text-center transform rotate-45 translate-x-8 translate-y-6 shadow-lg">
                SELECTED
              </div>
            )}
            <div className="relative z-10">
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
                  <span>**Lifetime** ownership</span>
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
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2a2a3a] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </motion.div>

          {/* Installment Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => setSelectedPlan("installment")}
            className={`relative bg-[#1e1e2a] p-8 rounded-2xl shadow-xl border-2 ${
              selectedPlan === "installment"
                ? "border-[#ff4757]"
                : "border-transparent hover:border-[#3a3a4a]"
            } transition-all cursor-pointer group overflow-hidden`}
          >
            {selectedPlan === "installment" && (
              <div className="absolute top-0 right-0 w-32 bg-[#ff4757] text-white text-xs font-bold px-3 py-1 text-center transform rotate-45 translate-x-8 translate-y-6 shadow-lg">
                SELECTED
              </div>
            )}
            <div className="relative z-10">
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
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#2a2a3a] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
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
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedPaymentMethod === "credit_card"
                  ? "bg-[#ff4757] text-white shadow-lg"
                  : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a] hover:text-white"
              }`}
              onClick={() => setSelectedPaymentMethod("credit_card")}
            >
              <CreditCard className="w-5 h-5 mr-2" /> Card
            </button>
            <button
              className={`flex items-center cursor-pointer px-5 py-2.5 rounded-lg font-medium transition-all ${
                selectedPaymentMethod === "paypal"
                  ? "bg-[#ff4757] text-white shadow-lg"
                  : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a] hover:text-white"
              }`}
              onClick={() => setSelectedPaymentMethod("paypal")}
            >
              <Wallet className="w-5 h-5 mr-2" /> PayPal
            </button>
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium  cursor-pointer transition-all ${
                selectedPaymentMethod === "payoneer"
                  ? "bg-[#ff4757] text-white shadow-lg"
                  : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a] hover:text-white"
              }`}
              onClick={() => setSelectedPaymentMethod("payoneer")}
            >
              <Banknote className="w-5 h-5 mr-2" /> Payoneer
            </button>
            <button
              className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all cursor-pointer ${
                selectedPaymentMethod === "other"
                  ? "bg-[#ff4757] text-white shadow-lg"
                  : "bg-[#2a2a3a] text-gray-300 hover:bg-[#3a3a4a] hover:text-white"
              }`}
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
    </SectionComponent>
  );
}
