import Image from "next/image";
import EvaluationCriteria from "./components/EvaluationCriteria";
import PrizesSection from "./components/PrizesSection";

export default function Home() {
  return (
    <div className="font-roboto min-h-screen">
      <EvaluationCriteria />
      <PrizesSection />
    </div>
  );
}
