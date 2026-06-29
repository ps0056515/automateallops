import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutomateAllOps — DevOps & SRE Bench Teams",
  description:
    "Pre-trained DevOps, Cloud, and SRE squads on the bench — ready to deploy on your project in weeks. Kubernetes, CI/CD, Terraform, and more.",
  keywords: [
    "DevOps", "SRE", "Kubernetes", "Cloud teams",
    "DevOps bench", "SRE squad", "AWS", "GCP", "Azure",
  ],
  openGraph: {
    title: "AutomateAllOps — Bench-Trained DevOps, Cloud & SRE Teams",
    description: "Ready-made squads trained on DevOps, Cloud, and SRE — deploy in weeks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${jetbrainsMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] font-[family-name:var(--font-inter)] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
