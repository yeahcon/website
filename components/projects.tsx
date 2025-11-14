import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Projects() {
  const projects = [
    {
      title: 'Network Vulnerability Scanner',
      description: 'Automated tool for identifying security vulnerabilities in network infrastructure using Python and Nmap.',
      tags: ['Python', 'Nmap', 'Security'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Password Strength Analyzer',
      description: 'Web application that evaluates password security using entropy calculations and common pattern detection.',
      tags: ['JavaScript', 'Cryptography', 'Web Security'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Packet Sniffer Tool',
      description: 'Custom packet analyzer built with Python and Scapy for network traffic analysis and protocol inspection.',
      tags: ['Python', 'Scapy', 'Networking'],
      github: '#',
      demo: '#',
    },
    {
      title: 'CTF Writeups Repository',
      description: 'Collection of detailed writeups from various Capture The Flag competitions and cybersecurity challenges.',
      tags: ['Documentation', 'CTF', 'Learning'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            A showcase of my work in cyber security, ethical hacking, and security tool development.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
