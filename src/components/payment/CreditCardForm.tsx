import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { PaymentFormProps } from "./PaymentFormProps";

const CreditCardForm: React.FC<PaymentFormProps> = ({
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
      <CreditCard className="w-8 h-8 text-[#ff4757] mr-3" />
      <h4 className="text-2xl font-bold text-white">Credit/Debit Card</h4>
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
            {selectedPlan === "one-time" ? "Charged once" : "Recurring monthly"}
          </span>
        </div>
      </div>

      <button className={`${buttonClasses} bg-[#ff4757] mt-4`}>
        {selectedPlan === "one-time" ? "Pay $40" : "Start Installments"}
      </button>
    </form>
  </motion.div>
);

export default CreditCardForm;
