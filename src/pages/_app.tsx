import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import AnimatedBackground from "@/components/Hero/AnimatedBackground";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AnimatedBackground isDarkMode={true} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
