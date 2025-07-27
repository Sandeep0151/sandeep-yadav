import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alex Rivera - Senior Full Stack Developer | AI & Web3 Specialist",
  description:
    "Award-winning Senior Full Stack Developer with 8+ years of experience in Django, React, Next.js, AI integration, and Web3 technologies. Building the future of web applications.",
  keywords: [
    "Senior Full Stack Developer",
    "AI Integration",
    "Web3 Developer",
    "Django Expert",
    "React Specialist",
    "Next.js",
    "TypeScript",
    "Python",
    "Blockchain",
    "Machine Learning",
  ],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  publisher: "Alex Rivera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alexrivera-dev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Rivera - Senior Full Stack Developer | AI & Web3 Specialist",
    description:
      "Award-winning Senior Full Stack Developer building cutting-edge web applications with AI and Web3 integration. Let's create something extraordinary together!",
    url: "https://alexrivera-dev.vercel.app",
    siteName: "Alex Rivera - Developer Portfolio",
    images: [
      {
        url: "/og-image-premium.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Rivera - Senior Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera - Senior Full Stack Developer",
    description: "Building the future with AI-powered web applications and Web3 technologies.",
    images: ["/og-image-premium.jpg"],
    creator: "@alexrivera_dev",
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
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f0f23" />
      </head>
      <body className="font-inter antialiased">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
