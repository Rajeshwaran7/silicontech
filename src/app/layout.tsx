import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiliconTechie.ai — We Build What Comes Next",
  description:
    "SiliconTechie.ai builds digital products, scalable software systems and AI-powered solutions for modern businesses.",
  keywords: [
    "AI Studio",
    "Software Engineering",
    "Intelligent Systems",
    "Digital Products",
    "SiliconTechie",
    "Next-Gen Software",
    "Autonomous Agents",
    "Cloud Architecture"
  ],
  authors: [{ name: "SiliconTechie.ai" }],
  creator: "SiliconTechie.ai",
  publisher: "SiliconTechie.ai",
  metadataBase: new URL("https://silicontechie.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SiliconTechie.ai — We Build What Comes Next",
    description:
      "SiliconTechie.ai builds digital products, scalable software systems and AI-powered solutions for modern businesses.",
    url: "https://silicontechie.ai",
    siteName: "SiliconTechie.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SiliconTechie.ai — Software, Systems & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiliconTechie.ai — We Build What Comes Next",
    description:
      "SiliconTechie.ai builds digital products, scalable software systems and AI-powered solutions for modern businesses.",
    creator: "@silicontechie",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-orange-500/20 selection:text-orange-400">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#060709" />
      </head>
      <body className="min-h-screen bg-[#060709] text-[#e4e4e7] antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
