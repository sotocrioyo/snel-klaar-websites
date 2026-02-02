import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import PricingHighlight from "@/components/home/PricingHighlight";
import ForWho from "@/components/home/ForWho";
import Process from "@/components/home/Process";
import PortfolioTeaser from "@/components/home/PortfolioTeaser";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <PricingHighlight />
      <ForWho />
      <Process />
      <PortfolioTeaser />
      <Testimonials />
      <FAQ />
      <CTASection />
    </Layout>
  );
};

export default Index;
