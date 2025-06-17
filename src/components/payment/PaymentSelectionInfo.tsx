import { motion } from "framer-motion";

const PaymentSelectionInfo: React.FC = () => (
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

export default PaymentSelectionInfo;
