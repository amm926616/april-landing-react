import { motion } from "framer-motion";
import { Wallet } from "lucide-react";
import { PaymentFormPropsType } from "../../../types/paymentform.type";

const PayPalForm: React.FC<PaymentFormPropsType> = ({
  selectedPlan,
  formClasses,
  buttonClasses,
}) => (
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
          {selectedPlan === "one-time" ? "Charged once" : "Recurring monthly"}
        </span>
      </div>
    </div>
    <button
      type="button"
      className={`${buttonClasses} bg-[#0070BA] cursor-pointer`}
    >
      Continue to PayPal
    </button>
  </motion.div>
);

export default PayPalForm;
