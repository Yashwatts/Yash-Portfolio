"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft, Filter } from "lucide-react"
import Link from "next/link"

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allProjects = [
    {
      id: 1,
      title: "DermaSense.ai",
      category: "ai-ml",
      description:
        "AI-powered web app using deep learning to analyze skin images and detect potential diseases. Features offered: Image upload for diagnosis, AI-driven prediction, detailed insights on disease causes and treatments, and assistance in finding and consulting nearby dermatologists.",
      image: "/derma.png",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Node.js", "MongoDB", "Google Colab"],
      githubUrl: "https://github.com/Yashwatts/DermaSense.ai",
      liveUrl: "/",
      status: "Not Live",
      year: "2025",
    },
    {
      id: 2,
      title: "BhatiaSales Website",
      category: "e-commerce",
      description:
        "E-commerce platform for a motorcycle dealer in Kalka, Haryana, featuring buy/sell functionality for second-hand vehicles, service booking, online vehicle reservations, and accessories showcase. Built an admin dashboard to manage product listings, handle customer requests, and approve/decline submissions — providing a seamless digital experience for both customers and administrators.",
      image: "/bhatiasales.png",
      technologies: ["HTML", "Tailwind CSS", "Javascript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Yashwatts/bhatiasales",
      liveUrl: "http://www.bhatiasales.shop",
      status: "Live",
      year: "2025",
    },
    {
      id: 3,
      title: "Intelligent CPU Scheduler Simulator",
      category: "education",
      description:
        "Interactive web application built with Streamlit to simulate and visualize various CPU scheduling algorithms including FCFS, SJF (Non-Preemptive and Preemptive), Round Robin, Priority (Preemptive and Non-Preemptive), and Multilevel Queue. Features real-time execution simulation, Gantt chart visualization using Matplotlib, performance metrics calculation (waiting time, turnaround time), and tabular results display.",
      image: "/cpu.png",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/Yashwatts/Intelligent-CPU-Scheduler-Simulator",
      liveUrl: "https://cpu-scheduler.streamlit.app",
      status: "Live",
      year: "2025",
    },
    {
      id: 4,
      title: "Expense Vault",
      category: "finance",
      description:
        "A personal expense tracking web app designed to help users manage their finances efficiently. Features include expense logging, category-wise breakdown, monthly budget tracking, and visual reports using charts.",
      image: "/expense.png",
      technologies: ["React.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Yashwatts/expense-tracker",
      liveUrl: "https://expensevault.vercel.app",
      status: "Live",
      year: "2025",
    },
    {
      id: 5,
      title: "Anxiety Relief Bot",
      category: "healthcare",
      description:
        "A smart AI chatbot designed to help manage anxiety and stress using proven wellness techniques. Features include guided breathing exercises, mindfulness meditation sessions, emergency crisis support, personalized affirmations, and sleep support with calming stories and soundscapes.",
      image: "/anxiety.png",
      technologies: ["Python", "HTML", "CSS"],
      githubUrl: "https://github.com/Yashwatts/reliefbot",
      liveUrl: "https://reliefbot.onrender.com",
      status: "Live",
      year: "2025",
    },
    {
      id: 6,
      title: "MedEase Healthcare Platform",
      category: "healthcare",
      description:
        "Comprehensive healthcare platform bringing together patient care, provider tools, and collaboration between hospitals into one userfriendly system. Features offered: Booking and Queuing, Automated Bed Availability, Role-Based Authentication, City-Wide Module, Inventory and Complaint Management, Patient Engagement Tools (Chat System, Chatbot)",
      image: "/medease.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Yashwatts/MedEase",
      liveUrl: "/",
      status: "Award Winner",
      year: "2024",
    },
    {
      id: 7,
      title: "Phishing Detection Tool",
      category: "cybersecurity",
      description:
        "Web tool for detecting phishing emails and texts using trained ML model. Features offered: Real-time prediction of phishing probability, Suspicion percentage display.",
      image: "/Phishing.png",
      technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Yashwatts/Phishing-Detection-Tool",
      liveUrl: "/",
      status: "Not Live",
      year: "2024",
    },
    {
      id: 8,
      title: "WriteTheRights Gaming Platform",
      category: "education",
      description:
        "Educational gaming web-application to raise awareness about children's rights through interactive gameplay. 2nd Runner-Up at Hack IOT.",
      image: "/rights.png",
      technologies: ["HTML", "CSS", "JavaScript", "Game Development"],
      githubUrl: "https://github.com/Yashwatts/WriteTheRights",
      liveUrl: "https://yashwatts.github.io/WriteTheRights/login.html",
      status: "Award Winner",
      year: "2024",
    },
    {
      id: 9,
      title: "Event Management Website",
      category: "web-development",
      description:
        "Comprehensive event management platform for booking tickets and listing events across multiple categories. 1st Runner-Up at Frontend Fusion.",
      image: "/events.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/Yashwatts/Event-Management-And-Ticket-Booking-Website",
      liveUrl: "https://yashwatts.github.io/Event-Management-And-Ticket-Booking-Website/home.html",
      status: "Award Winner",
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "web-development", label: "Web Development" },
    { id: "healthcare", label: "Healthcare" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "e-commerce", label: "E-commerce" },
    { id: "education", label: "Education" },
    { id: "finance", label: "Finance" },
    { id: "business", label: "Business" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my complete portfolio of innovative solutions spanning AI/ML, web development, healthcare, and
              more
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-border bg-card"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Live"
                          ? "default"
                          : project.status === "Award Winner"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    <div className="flex space-x-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="h-8 px-3 bg-transparent">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                      </a>
                      {project.liveUrl !== "/" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="h-8 px-3">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </Button>
                        </a>
                      )}
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