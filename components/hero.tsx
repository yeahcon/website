'use client'
import { Shield, Terminal, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-mono">Currently Enrolled</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Cyber Security{' '}
            <span className="text-primary">Student</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty max-w-2xl mx-auto">
            Passionate about protecting digital infrastructure and exploring the ever-evolving landscape of information security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Terminal className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Penetration Testing</h3>
              <p className="text-sm text-muted-foreground">Ethical hacking and vulnerability assessment</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Lock className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Network Security</h3>
              <p className="text-sm text-muted-foreground">Securing infrastructure and protocols</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Threat Analysis</h3>
              <p className="text-sm text-muted-foreground">Research and malware reverse engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
