// _app.tsx
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import AnimatedBackground from "@/components/Hero/AnimatedBackground";
import ScrollNarrative from "@/components/VisualEffects/ScrollNarrative";

function MyApp({ Component, pageProps }: AppProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <GlobalStyles />
      {hasMounted && <AnimatedBackground />}
      {hasMounted && <ScrollNarrative />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
