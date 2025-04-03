// _app.tsx

import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import AnimatedBackground from "@/components/Hero/AnimatedBackground";
import ScrollNarrative from "@/components/VisualEffects/ScrollNarrative";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AnimatedBackground />
      <ScrollNarrative />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
