import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-system-foreground">
      <Head />
      <ThemeProvider
        attribute="class"
        defaultTheme="root"
        enableSystem
        disableTransitionOnChange
      >
        <body className="bg-system-background">
          <Main />
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  );
}
