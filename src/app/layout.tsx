import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
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
