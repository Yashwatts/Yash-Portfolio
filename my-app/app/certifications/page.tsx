"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, ArrowLeft, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

export default function AllCertifications() {
  const allCertifications = [
    {
      title: "Certificate of Appreciation",
      topic: "Designed and Developed the Official Website for Rallison Paints Pvt. Ltd.",
      issuer: "Rallison Paints Pvt. Ltd.",
      date: "September 2025",
      credentialId: "N/A",
      verified: true,
      skills: ["Full Stack Development", "Next.js", "Firebase", "Cloud Firestore"],
      certificateUrl: "https://drive.google.com/file/d/11R4_fwvrFVzgb4GFOovQPFB_rFv4UGdQ/view?usp=sharing",
    },
    {
      title: "Responsive Web Design",
      topic: "Web Development & Design",
      issuer: "freeCodeCamp",
      date: "October 2023",
      credentialId: "https://freecodecamp.org/certification/wattsyash21/responsive-web-design",
      verified: true,
      skills: ["Responsive Web Design", "HTML5", "CSS3"],
      certificateUrl: "https://freecodecamp.org/certification/wattsyash21/responsive-web-design",
    },
    {
      title: "6-Week Live Training in Android Development",
      topic: "Android Development",
      issuer: "Techvanto Academy, New Delhi",
      date: "July 2025",
      credentialId: "TA24ADI25011",
      verified: true,
      skills: ["Android Development", "Java Programming", "Mobile Application Design"],
      certificateUrl: "https://drive.google.com/file/d/1wMPDzMPKVCFq7KKPfyH9FHtHB4A9SsCg/view?usp=sharing",
    },
    {
      title: "Cloud Computing",
      topic: "Cloud Computing & Distributed Systems",
      issuer: "NPTEL (IIT, Kharagpur)",
      date: "May 2025",
      credentialId: "NPTEL25CS11S1043102532",
      verified: true,
      skills: ["Cloud Computing", "Virtualization & Distributed Systems", "Cloud Security & Resource Management"],
      certificateUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S104310253204257956",
    },
    {
      title: "Certificate of Merit",
      topic: "Hack-IoT (Third Position, Team Leader)",
      issuer: "Lovely Professional University (School of Electronics and Electrical Engineering)",
      date: "March 2024",
      credentialId: "315769",
      verified: true,
      skills: ["HTML", "CSS", "JavaScript"],
      certificateUrl: "https://media.licdn.com/dms/image/v2/D5622AQFYVHpuX_fuBQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1716893684619?e=1758758400&v=beta&t=ErR2d5WdWkSWSBLvF9d2TLid24_wvGaiDzu-BPfbyQM",
    },
    {
      title: "Certificate of Achievement",
      topic: "IEEE SSH 2024 - Healthcare Track",
      issuer: "IEEE Region 10, IEEE India Council, KIET Group of Institutions",
      date: "September 2024",
      credentialId: "N/A",
      verified: true,
      skills: ["HTML/CSS/JS", "PHP", "MySQL"],
      certificateUrl: "https://drive.google.com/file/d/1GlthrqtMZ4ASV5ujV_UmQfi1bhCCPToS/view?usp=sharing",
    },
    {
      title: "Certificate of Completion",
      topic: "Data Structures and Algorithms",
      issuer: "iamneo, neocolab, Lovely Professional University",
      date: "December 2024",
      credentialId: "31D730N8cO6cP60Q8",
      verified: true,
      skills: ["DSA", "OOPs", "Programming"],
      certificateUrl: "https://lpucolab438.examly.io/certificate/U2FsdGVkX19d4pJUkrjEvhyznpS1mkfdOvuJ8Dmok3Q%3D",
    },
    {
      title: "Certificate of Completion",
      topic: "Object Oriented Programming",
      issuer: "iamneo, neocolab, Lovely Professional University",
      date: "December 2024",
      credentialId: "24aL4CM2aj4dk7dl7",
      verified: true,
      skills: ["C++", "OOPs", "Programming"],
      certificateUrl: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BsbuV1YLVr%2B5MA7ks9XRJjNScE2S8CkXk%3D",
    },
    {
      title: "Certificate of Completion",
      topic: "Computer Programming",
      issuer: "iamneo, neocolab, Lovely Professional University",
      date: "May 2024",
      credentialId: "37co60p85q9038c86",
      verified: true,
      skills: ["C", "OOPs", "Programming"],
      certificateUrl: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2FD%2FftyPEzs%2FDUhJSe%2BeaU97U45zplebh8%3D",
    },
    {
      title: "Certificate of Appreciation",
      topic: "Organizing the Hack Quest - 24 Hours CTF Challenge",
      issuer: "Department of Youth Capital, LPU in Collaboration with upGrad Campus",
      date: "April 2024",
      credentialId: "https://verification.givemycertificate.com/v/a0a07bb6-4b9c-48b0-84e6-e3db2a42ecee",
      verified: true,
      skills: ["Leadership", "Event Management", "Public Speaking"],
      certificateUrl: "https://drive.google.com/file/d/1Z6dv1y2JSQjJ7Ole6xWE9NIosnz5DhzR/view?usp=sharing",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="outline" size="sm" className="mr-4 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Certifications</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials that validate my expertise across various technologies
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  (Haven&apos;t uploaded any participation certificate)
</p>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCertifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-foreground">{cert.topic}</p>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Issued: {cert.date}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-3">ID: {cert.credentialId}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs bg-transparent"
                        onClick={() => window.open(cert.certificateUrl, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Certificate
                      </Button>
                    </div>
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