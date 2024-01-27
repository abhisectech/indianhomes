"use client";
import Hero from "../components/Hero/page";
import { Fragment } from "react";
import ImageGrid from "../components/ImageGrid/page";
import Brands from "../components/Brands/page";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";
import Display from "../components/Display/page";
import EndToEndImageGrid from "../components/EndToEndImageGrid/page";
import Stepper from "../components/Stepper/page";
import FAQ from "../components/FAQ/page";
import Collection from "../components/Collection/page";
import TabsSection from "../components/TabsSection/page";
import MyForm from "../components/MyForm";
import "../style/hero.css";
import Omsairam from "../components/Navbar/Omsairam";
import PostFooter from "../components/PostFooter/page";
export default function Home() {
  return (
    <>
      <Fragment>
        <Omsairam />
        <Header />
        <Hero />
        <Collection />
        <ImageGrid />

        <Brands />
        <Display />
        <Stepper />
        <TabsSection />
        <EndToEndImageGrid />
        <FAQ />
        {/* <div className="bg-gradient-to-br from-orange-200 to-yellow-300 p-4 dark:text-white"> */}
        <div className="bg-red-500 p-4 dark:text-white">
          <MyForm />
        </div>
        <PostFooter />
        <Footer />
      </Fragment>
    </>
  );
}
