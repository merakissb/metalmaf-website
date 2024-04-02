import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAF",
  description: "Somo una empresa Chilena dedicada a la manufactura de productos metálicos. Ofrecemos servicios de corte laser, plegados, matrices, soldadura Laser / MIG /TIG.",
  keywords: ["manufactura", "corte laser", "plegados", "matrices", "soldadura", "MAF", "Chile"]
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Video />
      {/* <Hero /> */}
      <Features />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
