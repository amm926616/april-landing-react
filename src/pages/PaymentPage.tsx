import GeneralPageLayout from "../layouts/GeneralPageLayout";
import PaymentSection from "../sections/payment/PaymentSection";

export default function PaymentPage() {
  const sections = [{ id: "payment", component: PaymentSection }];
  return <GeneralPageLayout sections={sections}></GeneralPageLayout>;
}
