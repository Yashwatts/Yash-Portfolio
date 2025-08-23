"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, ArrowLeft, Calendar, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AllAchievements() {
  const allAchievements = [
    {
      title: "Patent Filed",
      slug: "patent-filing-2025",
      subtitle: "Self-evolving AI System Utilizing Quantum Computing",
      date: "August 2025",
      location: "DRD (Department of Research and Development)",
      type: "patent",
      status: "Pending Verification",
      description:
        "Successfully filed Intellectual Property Rights (IPR) request with DRD for autonomous learning and adaptive decision-making system. Currently pending verification for official recognition.",
      image: null,
      technologies: [],
    },
    {
      title: "IEEE SSH 2024",
      slug: "1st-position-winner",
      subtitle: "MedEase Healthcare WebApp",
      date: "October 2024",
      location: "KIET Group of Institutions, Ghaziabad",
      type: "hackathon",
      status: "Winner",
      description:
        "Secured 1st position in healthcare track organized by IEEE, KIET Group of Institutions. Made healthcare web-application to bring together patient care, provider tools, and collaboration between hospitals into one user-friendly system.",
      image: "/ieee2024.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "HACK IOT",
      slug: "2nd-runner-up",
      subtitle: "WriteTheRights Gaming Website",
      date: "February 2024",
      location: "Lovely Professional University, Punjab",
      type: "hackathon",
      status: "Runner-Up",
      description:
        "Secured 2nd Runner-Up position in hackathon organized by ECE School of LPU. It showcased web-application making and leadership skills. Made a gaming webapp WriteTheRights for kids to aware them about their rights.",
      image: "/hackiot.png",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frontend Fusion",
      slug: "1st-runner-up",
      subtitle: "Event Management Platform",
      date: "December 2023",
      location: "Lovely Professional University, Punjab",
      type: "hackathon",
      status: "Runner-Up",
      description:
        "Secured 1st Runner-Up position in the competition which showcased Frontend skills and Presentation skills. Made an event management website in which users can able to book tickets of movies, concerts, standup shows, etc. in their respective locations and can also list their events in our website.",
      image: "/frontend.png",
      technologies: ["HTML", "CSS", "JavaScript"],
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Achievements</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Awards, competitions, patents, and milestones that define my journey in technology and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {allAchievements.map((achievement, index) => (
              <Card
                key={index}
                className={`${
                  achievement.type === "patent"
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30"
                    : "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30"
                } shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  {/* Achievement Image */}
                  {achievement.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.subtitle}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      {achievement.type === "patent" ? (
                        <Award className="h-6 w-6 text-white" />
                      ) : (
                        <Trophy className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                        <Badge
                          variant={
                            achievement.status === "Winner"
                              ? "default"
                              : achievement.status === "Runner-Up"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {achievement.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{achievement.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-foreground mb-3 text-lg">{achievement.subtitle}</h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>

                  {achievement.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {achievement.type === "hackathon" && (
                    <div className="mt-6">
                      <Link
                        href={`/achievements/${achievement.slug}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}

                  {achievement.type === "patent" && (
                    <div className="flex items-center space-x-2 mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
                        {achievement.status}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
