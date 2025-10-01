"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Target,
  Code,
  Users,
  Trophy,
  ExternalLink,
  Award,
  Brain,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Server,
  Palette,
  Wrench,
  FileText,
  Download,
  MessageCircle,
  Briefcase,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Handle form submission for Resend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitted(false)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        const errorData = await response.json()
        setError(
          errorData.message ||
            "Failed to send message. Please try again or contact me directly at yashwatts2005@gmail.com.",
        )
      }
    } catch (error) {
      setError("An error occurred. Please try again or contact me directly at yashwatts2005@gmail.com.")
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const featuredProjects = [
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
      githubUrl: "https://github.com/rohit-2059/Demstify-legal-documents",
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
      id: 6,
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
  ]

  const featuredCertifications = [
    {
      title: "Certificate of Appreciation",
      topic: "Designed and Developed the Official Website for Rallison Paints Pvt. Ltd.",
      issuer: "Rallison Paints Pvt. Ltd.",
      date: "September 2025",
      credentialId: "https://drive.google.com/file/d/11R4_fwvrFVzgb4GFOovQPFB_rFv4UGdQ/view?usp=sharing",
      verified: true,
    },
    {
      title: "6-Week Live Training in Android Development",
      topic: "Android Development",
      issuer: "Techvanto Academy, New Delhi",
      date: "July 2025",
      credentialId: "https://drive.google.com/file/d/1wMPDzMPKVCFq7KKPfyH9FHtHB4A9SsCg/view?usp=sharing",
      verified: true,
    },
    {
      title: "Cloud Computing",
      topic: "Cloud Computing & Distributed Systems",
      issuer: "NPTEL (IIT, Kharagpur)",
      date: "May 2025",
      credentialId: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S104310253204257956",
      verified: true,
    },
  ]

  const featuredAchievements = [
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

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Yash_Watts_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("[v0] Particles loaded successfully")
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif font-bold text-xl text-primary">
              <span className="text-4xl font-[var(--font-pacifico)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Yash
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0 z-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#059669", "#10b981", "#34d399", "#6ee7b7"],
              },
              links: {
                color: "#059669",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: ["circle", "triangle", "polygon"],
                options: {
                  polygon: {
                    sides: 6,
                  },
                },
              },
              size: {
                value: { min: 1, max: 5 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
  Hi, I&apos;m{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
    Yash Watts
  </span>
</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-serif">B.Tech CSE Student</p>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate software developer with expertise in AI/ML, Web Development, and innovative solutions. Patent
              holder and hackathon winner creating impactful technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                View My Work
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>

              <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
                  >
                    View Resume
                    <FileText className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center underline">Resume</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-sm">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold">Yash Watts</h1>
                      <p className="text-muted-foreground">
                        P: +91 8968532929 | yashwatts2005@gmail.com | https://www.linkedin.com/in/yashwatts
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold mb-3 text-primary">ACHIEVEMENTS</h2>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">Patent/IPR Filed</h3>
                            <span className="text-muted-foreground">Aug 2025</span>
                          </div>
                          <p className="mb-2">
                            ● Self-evolving AI System Utilizing Quantum Computing for Autonomous Learning and Adaptive
                            Decision
                          </p>
                          <p>
                            ● Successfully filed Intellectual Property Rights (IPR) request with DRD; currently pending
                            verification for official recognition.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">IEEE SSH 2024</h3>
                            <span className="text-muted-foreground">Oct 2024</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            A Competitive Hackathon organized by IEEE, KIET Group of Institutions
                          </p>
                          <p className="mb-1">● Secured 1st position in hackathon in healthcare track.</p>
                          <p className="mb-1">
                            ● Made healthcare web-application MedEase to bring together patient care, provider tools,
                            and collaboration between hospitals into one user-friendly system.
                          </p>
                          <p>● Tech Stack: HTML, CSS, Javascript, PHP, MySQL</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">Hack IOT</h3>
                            <span className="text-muted-foreground">Feb 2024</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            A Competitive Hackathon Organized by ECE School of LPU
                          </p>
                          <p className="mb-1">
                            ● Secured 2nd Runner-Up position in hackathon which showcased web-application making and
                            leadership skills.
                          </p>
                          <p className="mb-1">
                            ● Made a gaming web-application WriteTheRights for kids to aware them about their rights.
                          </p>
                          <p>● Tech Stack: HTML, CSS, Javascript</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">Frontend Fusion</h3>
                            <span className="text-muted-foreground">Dec 2023</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">A Competition on Website Presentation</p>
                          <p className="mb-1">
                            ● Secured 1st Runner-Up position in the competition which showcased Frontend skills and
                            Presentation skills.
                          </p>
                          <p className="mb-1">
                            ● Made an event management website in which users can able to book tickets of movies,
                            concerts, standup shows, etc. in their respective locations and can also list their events
                            in our website.
                          </p>
                          <p>● Tech Stack: HTML, CSS, Javascript</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold mb-3 text-primary">PROJECTS</h2>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">DermaSense.ai</h3>
                            <span className="text-muted-foreground">Jan 2025 – Feb 2025</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">AI model for detecting skin diseases.</p>
                          <p className="mb-1">
                            ● Developed an AI-powered web app using deep learning to analyze skin images and detect
                            potential diseases.
                          </p>
                          <p className="mb-1">
                            ● Features offered: Image upload for diagnosis, AI-driven prediction, detailed insights on
                            disease causes and treatments, and assistance in finding and consulting nearby
                            dermatologists.
                          </p>
                          <p>
                            ● Tech Stack: Python, TensorFlow, OpenCV, Flask, Node.js, MongoDB, HTML/CSS/JS, Google
                            Colab.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">Phishing Detection Tool</h3>
                            <span className="text-muted-foreground">Nov 2024 – Dec 2024</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">Cybersecurity Web-Application</p>
                          <p className="mb-1">
                            ● Developed a web tool for detecting phishing emails, texts by analyzing content using a
                            trained ML model.
                          </p>
                          <p className="mb-1">
                            ● Features offered: Real-time prediction of phishing probability, Suspicion percentage
                            display.
                          </p>
                          <p>● Tech Stack: Flask (Python), HTML, CSS, Javascript.</p>
                        </div>

                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold">MedEase</h3>
                            <span className="text-muted-foreground">Sep 2024 – Nov 2024</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">Healthcare Web-Application</p>
                          <p className="mb-1">
                            ● Designed to bring together patient care, provider tools, and collaboration between
                            hospitals into one user-friendly system.
                          </p>
                          <p className="mb-1">
                            ● Features offered: Booking and Queuing, Automated Bed Availability, Role-Based
                            Authentication, City-Wide Module, Inventory and Complaint Management, Patient Engagement
                            Tools (Chat System, Chatbot)
                          </p>
                          <p>● Tech Stack: HTML, CSS, Javascript, PHP, MySQL</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold mb-3 text-primary">EDUCATION</h2>
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold">Lovely Professional University – Phagwara, Punjab, India</h3>
                          <span className="text-muted-foreground">May 2027</span>
                        </div>
                        <p>Bachelor of Technology, Computer Science Engineering</p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold mb-3 text-primary">Skills</h2>
                      <p className="mb-2">
                        <strong>Technologies:</strong> Python | C++ | Java | HTML | CSS | TailwindCSS | Javascript |
                        React.js | Node.js | Next.js | MongoDB | PHP | MySQL
                      </p>
                      <p>
                        <strong>Soft Skills:</strong> Leadership | Team Management | Presentation
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Button onClick={downloadResume} className="cursor-creative">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg"
              >
                Get In Touch
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/yashwatts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashwatts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:yashwatts2005@gmail.com"
                target="_blank"
                className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
                rel="noreferrer"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 scroll-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative B.Tech CSE student with a passion for creating technology solutions that make a real impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-secondary p-1 bg-gradient-to-r from-primary to-secondary">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img src="/yash.png" alt="Yash Watts" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground">Bachelor of Technology</h4>
                  <p className="text-muted-foreground">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Lovely Professional University, Punjab</p>
                  <p className="text-sm text-primary font-medium">Expected Graduation: May 2027</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Professional Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in AI/ML applications and full-stack web development, while also learning Android
                  Development. Passionate about creating innovative solutions that solve real-world problems and improve
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-background scroll-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative web solutions for businesses across different industries
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>

            <div className="space-y-12">
              <div className="relative flex items-center animate-slide-in-left">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <img
                            src="/rallison-logo.png"
                            alt="Rallison Paint Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                            Completed
                          </span>
                          <Briefcase className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-1">Full Stack Developer</h3>
                      <h4 className="text-base font-semibold text-destructive mb-2">Rallison Paints Pvt. Ltd.</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                        As a Full Stack Developer at Rallison Paints Pvt. Ltd., designed, developed and maintained
                        end-to-end web applications to support business operations.
                      </p>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
                          Next.js
                        </span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded">
                          Firebase
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded">
                          Cloud Firestore
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 text-right">Aug 2025 - Sep 2025</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-1/2 pl-8"></div>
              </div>

              <div className="relative flex items-center animate-slide-in-right">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>

                <div className="w-1/2 pr-8"></div>

                <div className="w-1/2 pl-8">
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4 text-secondary" />
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                            Completed
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <img
                            src="/bhatia-sales-logo.png"
                            alt="BhatiaSales Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-1">Full Stack Developer</h3>
                      <h4 className="text-base font-semibold text-destructive mb-2">BhatiaSales</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                        Developed a complete website for BhatiaSales, a motorcycle dealer featuring buy/sell
                        functionality for second-hand vehicles, service booking, admin dashboard and more.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded">
                          HTML
                        </span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs rounded">
                          JavaScript
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded">
                          PHP
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">Feb 2025 - Apr 2025</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => (window.location.href = "/experience")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              View All Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 scroll-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Awards, competitions, and milestones that define my journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredAchievements.map((achievement, index) => (
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
                      <Link href={`/achievements/${achievement.slug}`}>
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

          <div className="text-center mt-12">
            <Button
              onClick={() => (window.location.href = "/achievements")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              View All Achievements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-background scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions spanning AI/ML, healthcare, cybersecurity, and web development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border bg-card">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500"
                          : project.status === "Award Winner"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{project.category}</span>
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

          <div className="text-center mt-12">
            <Button
              onClick={() => (window.location.href = "/projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-muted/30 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional certifications
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Skills</h3>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: "Programming Languages",
                  icon: Code,
                  skills: [
                    { name: "Python", level: 60, color: "bg-blue-500" },
                    { name: "C++", level: 80, color: "bg-purple-500" },
                    { name: "Java", level: 70, color: "bg-red-500" },
                    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
                    { name: "PHP", level: 50, color: "bg-indigo-500" },
                  ],
                },
                {
                  title: "Frontend Technologies",
                  icon: Palette,
                  skills: [
                    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
                    { name: "TailwindCSS", level: 90, color: "bg-teal-500" },
                    { name: "React.js", level: 75, color: "bg-cyan-500" },
                    { name: "Next.js", level: 60, color: "bg-indigo-500" },
                    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
                  ],
                },
                {
                  title: "Backend & Databases",
                  icon: Server,
                  skills: [
                    { name: "Node.js", level: 75, color: "bg-green-600" },
                    { name: "PHP", level: 50, color: "bg-green-700" },
                    { name: "MySQL", level: 75, color: "bg-orange-600" },
                    { name: "MongoDB", level: 75, color: "bg-red-500" },
                  ],
                },
                {
                  title: "AI/ML & Data Science",
                  icon: Brain,
                  skills: [
                    { name: "TensorFlow", level: 75, color: "bg-orange-500" },
                    { name: "OpenCV", level: 70, color: "bg-blue-800" },
                    { name: "Machine Learning", level: 75, color: "bg-purple-600" },
                    { name: "Deep Learning", level: 70, color: "bg-indigo-600" },
                    { name: "Google Colab", level: 80, color: "bg-yellow-600" },
                    { name: "Flask", level: 75, color: "bg-green-500" },
                  ],
                },
                {
                  title: "AI Tools & Platforms",
                  icon: Wrench,
                  skills: [
                    { name: "Google Colab", level: 80, color: "bg-yellow-600" },
                    { name: "ChatGPT", level: 95, color: "bg-green-500" },
                    { name: "GitHub Copilot", level: 80, color: "bg-orange-500" },
                    { name: "Gemini", level: 90, color: "bg-purple-500" },
                    { name: "V0 by Vercel", level: 90, color: "bg-blue-600" },
                    { name: "Grok", level: 95, color: "bg-red-600" },
                    { name: "Cursor", level: 85, color: "bg-indigo-600" },
                  ],
                },
                {
                  title: "Soft Skills",
                  icon: Users,
                  skills: [
                    { name: "Leadership", level: 90, color: "bg-blue-600" },
                    { name: "Team Management", level: 85, color: "bg-green-600" },
                    { name: "Presentation", level: 75, color: "bg-purple-600" },
                    { name: "Problem Solving", level: 80, color: "bg-red-600" },
                  ],
                },
              ].map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                      </div>

                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Certifications</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCertifications.map((cert, index) => (
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

                    <div className="space-y-3">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-foreground">{cert.topic}</p>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Date: {cert.date}</span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs bg-transparent"
                        onClick={() => window.open(cert.credentialId, "_blank")}
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={() => (window.location.href = "/certifications")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              >
                View All Certifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background scroll-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let&apos;s Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
  I&apos;m always excited to take on new challenges and collaborate on innovative projects. Whether you&apos;re a
  startup looking to build your first product, an established company seeking to modernize your tech
  stack, or a fellow developer interested in collaboration, I&apos;d love to hear from you.
</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">yashwatts2005@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 8968532929</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Punjab, India</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yashwatts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashwatts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:yashwatts2005@gmail.com"
                    className="w-12 h-12 bg-muted hover:bg-red-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-card-foreground mb-6">Send Me a Message</h3>

                  {submitted ? (
                    <div className="text-center text-green-600 dark:text-green-400">
                      <p className="text-lg font-medium">Thank you for your message!</p>
                      <p className="text-sm text-muted-foreground">I&apos;ll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground"
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground"
                        >
                          <option value="">Select a subject</option>
                          <option value="freelance">Freelance Project</option>
                          <option value="fulltime">Full-time Opportunity</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground resize-none"
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      {error && <div className="text-red-600 dark:text-red-400 text-sm text-center">{error}</div>}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-bold text-xl text-primary mb-4">Yash Watts</h3>
              <p className="text-muted-foreground text-sm mb-4">
  Passionate B.Tech CSE student creating innovative solutions with modern technologies. Let&apos;s build
  something amazing together.
</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yashwatts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashwatts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:yashwatts2005@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { id: "about", label: "About Me" },
                  { id: "experience", label: "Experience" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>yashwatts2005@gmail.com</p>
                <p>+91 8968532929</p>
                <p>Punjab, India</p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available for work
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Yash Watts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
