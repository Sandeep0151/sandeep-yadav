import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Testimonials } from "@/components/testimonials"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticleSystem } from "@/components/particle-system"
import { ScrollProgress } from "@/components/scroll-progress"
import { Cursor } from "@/components/cursor"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <ParticleSystem />
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
