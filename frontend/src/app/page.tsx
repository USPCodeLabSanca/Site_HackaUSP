import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import About from "./components/About"
import EvaluationCriteria from "./components/EvaluationCriteria";
import PrizesSection from "./components/PrizesSection";
import Maps from "./components/Maps";
import Sponsors from "./components/sponsors";
import Subscription from "./components/Subscription";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-roboto min-h-screen">
      <Navbar />
      <Header />
      <About />
      <EvaluationCriteria />
      <PrizesSection />
      <Subscription />
      <Maps />
      <Sponsors />
      <Footer />
    </div>
  );
}
