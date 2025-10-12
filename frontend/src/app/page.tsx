import Image from "next/image";
import EvaluationCriteria from "./components/EvaluationCriteria";
import PrizesSection from "./components/PrizesSection";
import Maps from "./components/Maps";
import Sponsors from "./components/sponsors";
import Subscription from "./components/Subscription";

export default function Home() {
  return (
    <div className="font-roboto min-h-screen">
      <EvaluationCriteria />
      <PrizesSection />
      <Subscription />
      <Maps />
      <Sponsors />
    </div>
  );
}