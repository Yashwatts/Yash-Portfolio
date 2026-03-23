"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft, Filter, Download, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([])

  const toggleProjectDescription = (projectId: number) => {
    setExpandedProjectIds((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }
  const allProjects = [
    {
      id: 1,
      title: "Meri City",
      category: "web-development",
      description:
        "Civic Sense is a comprehensive full-stack civic engagement platform that revolutionizes how citizens interact with municipal services by enabling smart complaint reporting with AI-powered image analysis, automatic department routing, and real-time tracking. The platform features multi-role dashboards for citizens, government departments, and city administrators, incorporating community engagement through voting and discussion systems, gamified rewards for civic participation, real-time chat communication and advanced analytics with geographic visualization. Deployed across multiple cities with Google OAuth authentication, the mobile-responsive application streamlines complaint resolution workflows while enhancing government transparency and accountability through automated department assignment, comprehensive user moderation systems, and data-driven performance metrics that foster improved citizen-government collaboration.",
      image: "/mericity.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Vision AI", "Twilio API", "Google Maps API", "JWT", "OAuth", "Tailwind CSS"],
      githubUrl: "https://github.com/Yashwatts/mericity",
      liveUrl: "https://www.mericity.app",
      status: "Live",
      year: "2025",
    },
    {
      id: 2,
      title: "Demstify-legal-documents",
      category: "ai-ml",
      description:
        "Our solution is an AI-powered legal document analysis platform that makes complex legal documents easy to understand for everyone. When users upload PDF legal documents like contracts, court judgments, or agreements, our system automatically extracts the text and uses artificial intelligence to analyze the content. The platform provides instant summaries of lengthy documents, identifies potential legal risks and problems, explains difficult legal terms in simple language, and answers specific questions about the document. Users can also compare different versions of documents to see what has changed over time. The system is designed to work like having a legal expert available 24/7 who can read through complicated legal papers and explain them in plain English. This helps both lawyers save time on research and regular people understand important legal documents without needing expensive legal consultations.",
      image: "/genai.png",
      technologies: ["Next.js", "Python", "Tailwind CSS", "Google Gemini AI", "TypeScript", "File Parsing"],
      githubUrl: "https://github.com/Yashwatts/Demystify-Legal-Documents",
      liveUrl: "https://demystify-documentation.vercel.app",
      status: "Live",
      year: "2025",
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
      title: "To-Do Mobile App",
      category: "mobile-app",
      description:
        "Developed a full-featured Android To-Do List application using Java, focused on productivity, smart reminders, and seamless task organization. The app supports secure multi-account sign-in through Google OAuth, offline-first data storage with SharedPreferences, and a cluster-based task grouping system with customizable color themes and pinned categories. Users can set intelligent reminder notifications via AlarmManager, manage archive states for completed projects, and track progress with real-time visual indicators and haptic feedback. Built using the MVC architecture and Material Design principles, the app includes RecyclerView-based grid layouts, smooth UI animations, adaptive light/dark themes, dynamic status bars and a side navigation drawer for intuitive access. Advanced Android concepts like custom adapters, ViewHolder pattern, BroadcastReceiver, notification scheduling and proper permission handling were implemented.",
      image: "/todo.jpg",
      technologies: ["Java", "Android SDK", "OAuth", "Gradle", "Android Development"],
      githubUrl: "/",
      liveUrl: "/",
      apkUrl: "https://drive.google.com/file/d/1pZrFQunHg_ANuDpjjG9DGOaR6FidtmYO/view?usp=sharing",
      status: "Live",
      year: "2025",
    },
    {
      id: 6,
      title: "Rallison Paints Pvt. Ltd.",
      category: "business",
      description:
        "As a Full Stack Developer at Rallison Paints Pvt. Ltd., I was responsible for designing, developing and maintaining end-to-end web applications to support the company's business operations. Successfully delivered a comprehensive website with modern design, enhanced user experience, and robust business functionality. Implemented responsive design and optimized for performance and SEO.",
      image: "/rallison.png",
      technologies: ["Next.js", "Firebase", "Cloud Firestore"],
      githubUrl: "/",
      liveUrl: "https://www.rallisonpaints.com",
      status: "Live",
      year: "2025",
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
    { id: "mobile-app", label: "Mobile App" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? allProjects : allProjects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/#projects">
              <Button
                variant="outline"
                size="sm"
                className="group/btn mr-4 bg-transparent text-primary hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
                <span className="relative inline-block">
                  Back to Home
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/btn:w-full"></span>
                </span>
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-3">Selected Work</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-focused builds across AI/ML, healthcare, cybersecurity, and modern web engineering.
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
      <div className="relative py-20 bg-background overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden border border-border/60 bg-card/85 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.45)] flex flex-col"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-white text-xs font-semibold rounded-full border border-white/30 backdrop-blur-sm ${
                        project.status === "Live"
                          ? "bg-green-500/85"
                          : project.status === "Award Winner"
                            ? "bg-yellow-500/90"
                            : "bg-blue-500/85"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-card-foreground leading-tight">{project.title}</h3>
                    <span className="text-[11px] uppercase tracking-wide text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p
                    className={`text-muted-foreground text-sm leading-relaxed ${
                      expandedProjectIds.includes(project.id) ? "mb-2" : "line-clamp-4 mb-2"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="mb-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => toggleProjectDescription(project.id)}
                      className="group/read inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-300 hover:text-primary/80 hover:translate-x-0.5"
                    >
                      <span className="relative">
                        {expandedProjectIds.includes(project.id) ? "Read Less" : "Read More"}
                        <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/read:w-full"></span>
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/read:translate-x-0.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
                    <span className="text-xs text-muted-foreground font-medium">{project.year}</span>

                    <div className="flex flex-wrap gap-2 justify-end">
                      {project.apkUrl ? (
                        <a href={project.apkUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="group/btn h-8 px-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-primary/90 hover:text-white">
                            <Download className="h-3 w-3 mr-1 transition-transform duration-300 group-hover/btn:scale-110" />
                            Download APK
                          </Button>
                        </a>
                      ) : (
                        <>
                          {project.githubUrl !== "/" && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline" className="group/btn h-8 px-3 bg-transparent text-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:text-primary hover:border-primary">
                                <Github className="h-3 w-3 mr-1 transition-transform duration-300 group-hover/btn:scale-110" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.liveUrl !== "/" && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="group/btn h-8 px-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-primary/90 hover:text-white">
                                <ExternalLink className="h-3 w-3 mr-1 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                                Demo
                              </Button>
                            </a>
                          )}
                        </>
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