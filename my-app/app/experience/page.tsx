import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExperiencePage() {
  const allExperiences = [
    {
      title: "Full Stack Developer",
      company: "Rallison Paints Pvt. Ltd.",
      period: "Aug 2025 - Sep 2025",
      status: "Completed",
      description:
        "As a Full Stack Developer at Rallison Paints Pvt. Ltd., I was responsible for designing, developing and maintaining end-to-end web applications to support the company's business operations. Successfully delivered a comprehensive website with modern design, enhanced user experience, and robust business functionality. Implemented responsive design and optimized for performance and SEO.",
      technologies: ["Next.js", "Firebase", "Cloud Firestore"],
      logo: "/rallison-logo.png",
      side: "left",
    },
    {
      title: "Full Stack Developer",
      company: "BhatiaSales",
      period: "Feb 2025 - Apr 2025",
      status: "Completed",
      description:
        "Developed a complete website for BhatiaSales, a motorcycle dealer in Kalka, Haryana, featuring buy/sell functionality for second-hand vehicles, service booking, online vehicle reservations, and accessories showcase. Built an admin dashboard to manage product listings, handle customer requests, and approve/decline submissions — providing a seamless digital experience for both customers and administrators.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      logo: "/bhatia-sales-logo.png",
      side: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-6 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Professional Experience</h1>
          <p className="text-lg text-muted-foreground text-center">
            Complete overview of my professional journey and work experience
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>

          <div className="space-y-12">
            {allExperiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {experience.side === "left" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Image
                              src={experience.logo || "/placeholder.svg"}
                              alt={`${experience.company} logo`}
                              width={100}
                              height={500}
                              className="rounded-lg"
                            />
                            <span
                              className={`px-3 py-1 text-xs rounded-full font-medium ${
                                experience.status === "Current"
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                  : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                              }`}
                            >
                              {experience.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-card-foreground mb-2">{experience.title}</h3>
                          <h4 className="text-lg font-semibold text-destructive mb-3">{experience.company}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                          <div className="flex flex-wrap gap-2 justify-end mb-3">
                            {experience.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground text-right">{experience.period}</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-1/2 pl-8">
                      <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`px-3 py-1 text-xs rounded-full font-medium ${
                                experience.status === "Current"
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                  : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                              }`}
                            >
                              {experience.status}
                            </span>
                            <Image
                              src={experience.logo || "/placeholder.svg"}
                              alt={`${experience.company} logo`}
                              width={100}
                              height={500}
                              className="rounded-lg"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-card-foreground mb-2">{experience.title}</h3>
                          <h4 className="text-lg font-semibold text-destructive mb-3">{experience.company}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground">{experience.period}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
