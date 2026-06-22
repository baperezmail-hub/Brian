import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import BookingCta from "@/components/BookingCta";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import TrustStrip from "@/components/TrustStrip";
import WhyUs from "@/components/WhyUs";
import InsuredBanner from "@/components/InsuredBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ServiceArea />
      <BookingCta />
      <Gallery />
      <Reviews />
      <HowItWorks />
      <TrustStrip />
      <WhyUs />
      <InsuredBanner />
      <Faq />
      <Footer />
    </>
  );
}
