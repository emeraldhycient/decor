import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import HeroSection from "../components/home/heroSection";
import OfferSection from "../components/home/offerSection";

export default function Home() {
  return (
    <Layout
      title="Mpdesigns - home of decoration and home designs"
      description="Mpdesigns - home of decoration and home designs"
    >
      <Navbar />
      <HeroSection />
      <OfferSection />
      <Footer />
    </Layout>
  );
}
