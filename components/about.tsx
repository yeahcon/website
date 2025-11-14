import { GraduationCap, BookOpen, Code } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
            <p>
              {'I\'m currently pursuing my degree in Cyber Security, diving deep into the fascinating world of information security, ethical hacking, and digital forensics. My journey in cybersecurity began with a curiosity about how systems work and how they can be protected.'}
            </p>
            <p>
              Through my studies and hands-on projects, I've developed expertise in penetration testing, network security, cryptography, and secure software development. I'm constantly learning and adapting to the evolving threat landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Education</h3>
              <p className="text-muted-foreground">
                Pursuing Bachelor's in Cyber Security
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Learning</h3>
              <p className="text-muted-foreground">
                Continuously studying emerging threats and defense mechanisms
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Practice</h3>
              <p className="text-muted-foreground">
                Building projects and participating in CTF competitions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
