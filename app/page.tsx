import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import HowItWorks from "./components/HowItWorks";
import SizeGuide from "./components/SizeGuide";
import Trust from "./components/Trust";
import AllProducts from "./components/AllProducts";
import ColombianProducts from "./components/ColombianProducts";
import Collections from "./components/Collections";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bestsellers />
        <HowItWorks />
        <SizeGuide />
        <Trust />
        <AllProducts />
        <ColombianProducts />
        <Collections />
        <FAQ />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
