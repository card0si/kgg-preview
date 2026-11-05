import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "../fonts/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kenton Global Group | Business and Technology Consulting",
    template: "%s",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
