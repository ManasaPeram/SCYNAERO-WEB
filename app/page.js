import HeroSection from "@/components/HeroSection";
import AboutComponent from "@/components/ui/AboutComponent";
import CatalogueSection from "@/components/ui/CatalogueSection";
import CatalogueSwiperSection from "@/components/ui/CatalogueSwiperSection";
import CompanySection from "@/components/ui/CompanySection";
import ContactSection from "@/components/ui/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <CompanySection/>
   <AboutComponent/>
   <CatalogueSection/>
   <CatalogueSwiperSection/>
   <ContactSection/>
   </>
  );
}
