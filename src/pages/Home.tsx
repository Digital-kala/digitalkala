import React from "react";
import { Layout } from "../components";

import heroImage from "../assets/image/logo-white.svg";

const hookTitleClass = "font-bold text-5xl font-['WebsiteFontBold']";

export function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="bg-[#0C3457] text-white h-screen flex flex-col justify-center align-middle items-center">
        <div className="w-[11rem] absolute top-10 left-10 ">
          <img src={heroImage} alt="hero" />
        </div>
        <div className="space-y-5 prevent-select">
          <div className={hookTitleClass}>Empowering Through</div>
          <div className="flex flex-row">
            <div className={hookTitleClass}>Education</div>
            <div className="text-base pl-4">
              Explore Digital Literacy With Us
            </div>
          </div>
          <div className="pt-4">
            <button className="bg-[#FFC632] text-black px-12 py-3 rounded-lg text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
