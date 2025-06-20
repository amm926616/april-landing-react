import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { PaymentFormProps } from "./PaymentFormProps";

const OtherPaymentForm: React.FC<PaymentFormProps> = ({
  selectedPlan,
  formClasses,
  inputClasses,
  buttonClasses,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={formClasses}
  >
    <div className="flex items-center mb-4">
      <Landmark className="w-8 h-8 text-[#ff4757] mr-3" />
      <h4 className="text-2xl font-bold text-white">Other Payment Method</h4>
    </div>

    <p className="text-gray-400 mb-6">
      Please specify your preferred payment method and we'll contact you with
      instructions.
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

      <button className={`${buttonClasses} bg-[#ff4757]  cursor-pointer`}>
        Request Payment Instructions
      </button>
    </form>
  </motion.div>
);

export default OtherPaymentForm;
