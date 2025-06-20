import GeneralPageLayout from "../layouts/GeneralPageLayout";
import CopyrightAgreementSection from "../sections/CopyRightAggrementSection";

const sections = [{ id: "copyright", component: CopyrightAgreementSection }];

export default function CopyRightPage() {
  return (
    <>
      <GeneralPageLayout sections={sections} />
    </>
  );
}
