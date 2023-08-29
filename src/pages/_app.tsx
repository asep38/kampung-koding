import AppShell from "@/components/Layout/AppShell";
import "@/styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
