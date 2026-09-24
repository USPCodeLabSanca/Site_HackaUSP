import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import About from "./components/About"
import Previous from './components/Previous';
//import EvaluationCriteria from "./components/EvaluationCriteria";
//import PrizesSection from "./components/PrizesSection";
import Subscription from "./components/Subscription";
//import Maps from "./components/Maps";
//import Sponsors from "./components/sponsors";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-roboto min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Previous />
      {/*<EvaluationCriteria />*/}
      {/*<PrizesSection />*/}
      <Subscription />
      {/*<Maps />*/}
      {/*<Sponsors />*/}
      <Footer />
    </div>
  );
}
