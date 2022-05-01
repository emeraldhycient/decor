import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import HeroSection from "../components/home/heroSection";
import OfferSection from "../components/home/offerSection";
import WhatwesellSection from "../components/home/whatwesellSection";

export default function Home() {
  return (
    <Layout
      title="Mpdesigns - home of decoration and home designs"
      description="Mpdesigns - home of decoration and home designs"
    >
      <Navbar />
      <HeroSection />
      <OfferSection />
      <div className="mt-10">
        <WhatwesellSection />
      </div>
      <Footer />
    </Layout>
  );
}
