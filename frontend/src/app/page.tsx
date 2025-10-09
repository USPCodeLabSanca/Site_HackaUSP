import Image from "next/image";
import Maps from "./components/Maps";
import Sponsors from "./components/sponsors";

export default function Home() {
  return (
    <div className="font-roboto min-h-screen">
      <Maps />
      <Sponsors />
    </div>
  );
}