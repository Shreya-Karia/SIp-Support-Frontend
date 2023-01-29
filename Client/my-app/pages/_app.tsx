import "@/styles/globals.css";
// import "tailwindcss/dist/base.css";
import ContextProvider from "../context/Context";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart);
config.autoAddCss = false;

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
