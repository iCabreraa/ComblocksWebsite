import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ToolCards from "@/components/Sections/ToolCards/ToolCards";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import WhatIsManagementSystemSection from "@/components/Sections/WhatIsManagementSystemSection/WhatIsManagementSystemSection";
import SupportSection from "@/components/Sections/SupportSection/SupportSection";
import ScrollNarrativeSection from "@/components/Sections/ScrollNarrativeSection/ScrollNarrativeSection";

// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStaticPropsContext } from "next";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  console.log("Cargando traducciones para:", locale);
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};

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
    <Hero /> {/*Impacto visual inicial + claim */}
    <ScrollNarrativeSection /> {/* Transición del caos al orden*/}
    <ToolCards /> {/*Presentación de herramientas organizadas*/}
    <WhatIsManagementSystemSection /> {/* Concepto educativo reforzado*/}
    <SupportSection /> {/* (si se mantiene: breve, útil, visual)*/}
    <Footer /> {/* Legal + enlaces + redes*/}
  </>
);

export default HomePage;
