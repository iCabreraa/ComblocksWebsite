import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ToolCards from "@/components/Sections/ToolCards/ToolCards";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import IntegrationSection from "@/components/Sections/IntegrationSection/IntegrationSection";
import WhatIsManagementSystemSection from "@/components/Sections/WhatIsManagementSystemSection/WhatIsManagementSystemSection";
import ManagementSystemSection from "@/components/Sections/ManagementSystemSection/ManagementSystemSection";
import SupportSection from "@/components/Sections/SupportSection/SupportSection";
import ScrollNarrativeSection from "@/components/Sections/ScrollNarrativeSection/ScrollNarrativeSection";

const HomePage = () => (
  <>
    <Head>
      {" "}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Comblocks | Simplifying your ISMS</title>
      <meta
        name="description"
        content="Comblocks te ayuda a gestionar sistemas de cumplimiento, riesgos y documentos desde una sola plataforma modular, segura y eficiente."
      />
      <meta name="author" content="Comblocks" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <Hero />
    <ToolCards />
    <ScrollNarrativeSection />
    <WhatIsManagementSystemSection />
    <IntegrationSection />
    <ManagementSystemSection />
    <SupportSection />
    <Footer />
  </>
);

export default HomePage;
