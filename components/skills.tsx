'use client'

import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skills = {
    'Security Tools': [
      'Metasploit',
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'John the Ripper',
      'Hashcat',
    ],
    'Programming': [
      'Python',
      'Bash',
      'JavaScript',
      'C/C++',
      'SQL',
      'PowerShell',
    ],
    'Operating Systems': [
      'Kali Linux',
      'Ubuntu',
      'Windows',
      'Parrot OS',
    ],
    'Concepts': [
      'Penetration Testing',
      'Network Security',
      'Web Application Security',
      'Cryptography',
      'Malware Analysis',
      'Incident Response',
      'Digital Forensics',
      'OWASP Top 10',
    ],
  }

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
            Skills & <span className="text-primary">Expertise</span>
          </h2>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
