import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Jeremy Poh",
  description:
    "Portfolio website of Jeremy Poh, a Software and Data Engineer specializing in full-stack development, data analytics, and machine learning.",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
