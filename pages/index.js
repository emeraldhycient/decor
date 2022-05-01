import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import HeroSection from "../components/home/heroSection";
import OfferSection from "../components/home/offerSection";
import WhatwesellSection from "../components/home/whatwesellSection";
import Projects from "../components/home/Projects";
import DecorHimself from "../components/home/decorHimself";

export default function Home() {
  const [projects, setprojects] = useState([
    { id: 45, link: "/", src: "/images/apart2.png" },
    { id: 56, link: "/", src: "/images/apart4.png" },
    { id: 23, link: "/", src: "/images/apart3.png" },
    { id: 34, link: "/", src: "/images/apart1.png" },
    { id: 21, link: "/", src: "/images/apart2.png" },
    { id: 2, link: "/", src: "/images/apart4.png" },
    { id: 40, link: "/", src: "/images/apart3.png" },
    { id: 25, link: "/", src: "/images/apart1.png" },
  ]);
  return (
    <Layout
      title="Mpdesigns - home of decoration and home designs"
      description="Mpdesigns - home of decoration and home designs"
    >
      <Navbar />
      <HeroSection />
      <OfferSection />
      <div className="mt-10" id="whatwesellSection">
        <WhatwesellSection />
      </div>
      <div className="mt-10">
        <Projects projects={projects} />
      </div>
      <div className="mt-20">
        <DecorHimself />
      </div>
      <Footer />
    </Layout>
  );
}
