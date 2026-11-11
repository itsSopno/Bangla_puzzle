import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Stats from "./component/Stats/Stats";
import PopularLinks from "./component/PopularLinks/PopularLinks";
import Growth from "./component/Growth/Growth";
import Pricing from "./component/Pricing/Pricing";
import Testimonials from "./component/Testimonials/Testimonials";
import WhyChoose from "./component/WhyChoose/WhyChoose";
import Footer from "./component/Footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#5b21f0] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PopularLinks />
        <Growth />
        <Pricing />
        <Testimonials />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
}
