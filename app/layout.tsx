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
  title: "Sandeep Yadav - Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience in Django, React, Next.js and AI integration. Building the future of web applications.",
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "Django Expert",
    "React Specialist",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Prompt Engineering",
  ],
  authors: [{ name: "Sandeep Yadav" }],
  creator: "Sandeep Yadav",
  publisher: "Sandeep Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sandeep-yadav-developer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sandeep Yadav - Full Stack Developer",
    description:
      "Full Stack Developer with 4+ years of experience in Django, React, Next.js and AI integration. Building the future of web applications.",
    url: "https://sandeep-yadav-developer.vercel.app",
    siteName: "Sandeep Yadav - Developer Portfolio",
    images: [
      {
        url: "/og-image-premium.jpg",
        width: 1200,
        height: 630,
        alt: "Sandeep Yadav - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Yadav - Full Stack Developer",
    description: "Building the future with AI-powered web applications.",
    images: ["/og-image-premium.jpg"],
    creator: "@_sandeepyadav1_",
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
