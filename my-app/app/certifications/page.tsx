"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AllCertifications() {
  const allCertifications = [
    {
      title: "PHP with Laravel for Beginners",
      issuer: "Rallison Paints Pvt. Ltd.",
      date: "September 2025",
      year: "2026",
      providerTag: "UDEMY",
      image: "/php_with_laravel.png",
      skills: ["PHP and Laravel fundamentals", "MVC architecture and routing", "CRUD operations and database handling"],
      credentialId: "https://drive.google.com/file/d/1nz88os6MEpH438Y6WSDFrzJaF69SI_Ra/view?usp=sharing",
      verified: true,
    },
    {
      title: "Internship Completion",
      issuer: "Epilepto Systems",
      date: "December 2025",
      year: "2025",
      providerTag: "EPILEPTO SYSTEMS",
      image: "/epilepto_internship.png",
      skills: ["Web Development", "Next.js", "React.js", "TailwindCSS", "Firebase", "Git", "GitHub"],
      credentialId: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S104310253204257956",
      verified: true,
    },
    {
      title: "Certificate of Appreciation",
      issuer: "Rallison Paints Pvt. Ltd.",
      date: "September 2025",
      year: "2025",
      providerTag: "RALLISON PAINTS",
      image: "/rallison_freelance.png",
      skills: ["Full Stack Development", "Next.js", "Firebase"],
      credentialId: "https://drive.google.com/file/d/11R4_fwvrFVzgb4GFOovQPFB_rFv4UGdQ/view?usp=sharing",
      verified: true,
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL (IIT, Kharagpur)",
      date: "May 2025",
      year: "2025",
      providerTag: "NPTEL",
      image: "/cloud_computing.png",
      skills: ["Cloud computing fundamentals", "Cloud services", "Resource and data management"],
      credentialId: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S104310253204257956",
      verified: true,
    },
    {
      title: "Graph Theory Programming Camp",
      issuer: "AlgoUniversity",
      date: "June 2025",
      year: "2025",
      providerTag: "ALGOUNIVERSITY",
      image: "/graph_theory.png",
      skills: ["Graph Algorithms (BFS, DFS, Dijkstra)", "Problem-Solving"],
      credentialId: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/yash-watts.png",
      verified: true,
    },
    {
      title: "Android Development",
      issuer: "Techvanto Academy, New Delhi",
      date: "June 2025",
      year: "2025",
      providerTag: "TECHVANTO ACADEMY",
      image: "/android_development.png",
      skills: ["Android Development", "Java Programming", "Mobile App Development"],
      credentialId: "https://drive.google.com/file/d/1wMPDzMPKVCFq7KKPfyH9FHtHB4A9SsCg/view?usp=sharing",
      verified: true,
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "iamneo, neocolab, LPU",
      date: "December 2024",
      year: "2024",
      providerTag: "GOOGLE",
      image: "/google.png",
      skills: ["Computer Networking Fundamentals", "TCP/IP and OSI Models", "Cloud and Networking Concepts"],
      credentialId: "https://coursera.org/share/24be0c5e5d9356411a9e220d82898e44",
      verified: true,
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "iamneo, neocolab, LPU",
      date: "December 2024",
      year: "2024",
      providerTag: "IBM",
      image: "/ibm.png",
      skills: ["Computer Hardware Fundamentals", "Operating Systems Basics", "Virtualization & IOT Basics"],
      credentialId: "https://coursera.org/share/4f84cc97a6d8dfccc1a17f61757d6f69",
      verified: true,
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "iamneo, neocolab, LPU",
      date: "December 2024",
      year: "2024",
      providerTag: "NEOCOLAB, LPU",
      image: "/DSA.png",
      skills: ["Data Structures Fundamentals", "Algorithm Design and Analysis", "Problem-Solving", "Optimization"],
      credentialId: "https://lpucolab438.examly.io/certificate/U2FsdGVkX19d4pJUkrjEvhyznpS1mkfdOvuJ8Dmok3Q%3D",
      verified: true,
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamneo, neocolab, LPU",
      date: "December 2024",
      year: "2024",
      providerTag: "NEOCOLAB, LPU",
      image: "/OOP.png",
      skills: ["C++", "OOPs", "Programming"],
      credentialId: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BsbuV1YLVr%2B5MA7ks9XRJjNScE2S8CkXk%3D",
      verified: true,
    },
    {
      title: "Computer Programming",
      issuer: "iamneo, neocolab, LPU",
      date: "May 2024",
      year: "2024",
      providerTag: "NEOCOLAB, LPU",
      image: "/computer_programming.png",
      skills: ["C", "OOPs", "Programming"],
      credentialId: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FD%2FftyPEzs%2FDUhJSe%2BeaU97U45zplebh8%3D",
      verified: true,
    },
    {
      title: "Organized Hack Quest - CTF Challenge",
      issuer: "upGrad Campus",
      date: "April 2024",
      year: "2024",
      providerTag: "UPGRAD CAMPUS",
      image: "/upgrad.png",
      skills: ["Leadership", "Event Management", "Public Speaking"],
      credentialId: "https://verification.givemycertificate.com/v/a0a07bb6-4b9c-48b0-84e6-e3db2a42ecee",
      verified: true,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "October 2023",
      year: "2023",
      providerTag: "FREECODECAMP",
      image: "/certificate1.jpg",
      skills: ["Responsive Web Design", "HTML5", "CSS3"],
      credentialId: "https://freecodecamp.org/certification/wattsyash21/responsive-web-design",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/#skills">
              <Button variant="outline" size="sm" className="group/btn mr-4 bg-transparent text-primary hover:text-white transition-colors duration-200">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
                <span className="relative inline-block">
                  Back to Home
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/btn:w-full"></span>
                </span>
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-3">Credentials</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              All Certifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A complete collection of verified credentials showcasing expertise across full-stack development, cloud computing, and modern technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allCertifications.map((cert, index) => (
              <Card
                key={index}
                className="group h-full overflow-hidden border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                <div className="relative h-56 overflow-hidden border-b border-border/60">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 bottom-3 inline-flex items-center rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary backdrop-blur-sm">
                    {cert.providerTag}
                  </span>
                </div>

                <CardContent className="p-5 bg-card flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-lg font-bold text-card-foreground leading-snug break-words">
                      {cert.title}
                    </h4>
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-1 text-[10px] font-semibold text-emerald-500 shrink-0">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-3">Skills Gained</p>
                  <div className="flex flex-wrap content-start gap-2 mb-6 min-h-[70px]">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-border/60 pt-3 mt-auto">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-semibold text-primary hover:text-white transition-colors duration-200"
                      onClick={() => window.open(cert.credentialId, "_blank")}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      View Certificate
                    </Button>
                    <span className="text-base font-bold text-primary">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}