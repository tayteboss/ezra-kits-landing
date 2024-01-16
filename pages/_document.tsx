import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextSeo } from "next-seo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextSeo title="Ezra Kits - Landing" description="TBC" />
      <ThemeProvider
        attribute="class"
        defaultTheme="root"
        enableSystem
        disableTransitionOnChange
      >
        <body className="bg-system-background">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  );
}
