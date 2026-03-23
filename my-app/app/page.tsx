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
  Cloud,
  Database,
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
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [expandedProjectIds, setExpandedProjectIds] = useState<number[]>([])

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
          observer.unobserve(entry.target)
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
    if (isSending) return

    setIsSending(true)
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
    } finally {
      setIsSending(false)
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
            setActiveSection((prev) => (prev === section ? prev : section))
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20% 0px",
      },
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

  const toggleProjectDescription = (projectId: number) => {
    setExpandedProjectIds((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
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
  ]

  const featuredCertifications = [
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
  ]

  const featuredAchievements = [
    {
      title: "Patent Filed",
      slug: "patent-filing-2025",
      subtitle: "Self-evolving AI System Utilizing Quantum Computing",
      date: "August 2025",
      location: "DRD (Department of Research and Development)",
      type: "patent",
      status: "Filed - Publication Pending",
      description:
        "Successfully filed and verified Intellectual Property Rights (IPR) with DRD for autonomous learning and adaptive decision-making system. Patent has been verified and is currently pending official publication.",
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
        "Secured 1st position in healthcare track organized by IEEE, KIET Group of Institutions. Made healthcare web-application to bring together patient care, provider tools and collaboration between hospitals into user-friendly system.",
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
      status: "2nd Runner-Up",
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
      status: "1st Runner-Up",
      description:
        "Secured 1st Runner-Up in a competition showcasing frontend and presentation skills. Built an event management platform enabling users to book tickets for movies, concerts, and shows, and list their own events by location.",
      image: "/frontend.png",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ]

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Yash Resume.pdf"
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
                  className={`group text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                    {item.label}
                  </span>
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
              Freelance Full Stack Developer | 4x Hackathon Winner | Built scalable systems & AI-powered apps solving real-world problems | Patent Filed
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

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("/Yash Resume.pdf", "_blank")}
                className="group border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                  View Resume
                </span>
                <FileText className="ml-2 h-5 w-5" />
              </Button>

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
                href="https://codolio.com/profile/yashwatts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Codolio Profile"
              >
                <Code className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
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

      <section id="about" className="py-20 bg-background scroll-animate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What I Bring</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A practical blend of engineering depth, delivery speed, and real client-facing experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "End-to-end product development (Frontend → Backend → Deployment)",
                  "Strong problem-solving with DSA + real-world systems",
                  "Fast execution & ability to learn new tech quickly",
                  "Experience working on real client projects",
                  "Focus on building scalable and impactful solutions",
                  "Performance & Optimization Focus",
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30"
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-colors duration-300"
                >
                  <span className="transition-colors duration-300 group-hover/btn:text-white">
                    Start a Conversation
                  </span>
                  <MessageCircle className="ml-2 h-5 w-5 transition-colors duration-300 group-hover/btn:text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="py-20 bg-muted/30 scroll-animate">
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
                  <p className="text-sm text-primary font-medium">CGPA: 8.04/10</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Professional Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in full-stack development and AI/ML-driven applications, with hands-on experience building scalable and real-world systems. Strong foundation in data structures and backend architecture, with a focus on developing impactful solutions that handle real-time interactions and intelligent automation.
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

                <div className="w-1/2 pr-8">
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                            Completed
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <img
                            src="/epilepto.png"
                            alt="Epilepto Systems Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-1">Web Developer Intern</h3>
                      <h4 className="text-base font-semibold text-destructive mb-2">Epilepto Systems</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                        Developed 5+ responsive frontend modules and resolved 10+ UI issues, improving user experience and platform stability. Collaborated using Git workflows and ensured production-ready code quality.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
                          Next.js
                        </span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs rounded">
                          React.js
                        </span>
                        <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 text-xs rounded">
                          Tailwind CSS
                        </span>
                        <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded">
                          Firebase
                        </span>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs rounded">
                          Git
                        </span>
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs rounded">
                          GitHub
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">November 2025 - December 2025</div>
                        <Button asChild size="sm" className="group h-8 px-3 text-xs">
                          <a href="/Epilepto_Certificate.pdf" target="_blank" rel="noopener noreferrer">
                            <span className="relative inline-block transition-colors duration-300 group-hover:text-yellow-100 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                              View Certificate
                            </span>
                          </a>
                        </Button>
                      </div>
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
                            src="/rallison-logo.png"
                            alt="Rallison Paint Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground mb-1">Freelance Full Stack Developer</h3>
                      <h4 className="text-base font-semibold text-destructive mb-2">Rallison Paints Pvt. Ltd.</h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                        Built and deployed a scalable business website showcasing 25+ products with secure authentication and real-time data handling, improving SEO by 25% and supporting real-time user interactions.
                      </p>
                      <div className="flex flex-wrap gap-1">
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
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">August 2025 - October 2025</div>
                        <Button asChild size="sm" className="group h-8 px-3 text-xs">
                          <a href="/Rallison_Certificate.pdf" target="_blank" rel="noopener noreferrer">
                            <span className="relative inline-block transition-colors duration-300 group-hover:text-yellow-100 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                              View Certificate
                            </span>
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section id="achievements" className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/40 via-background to-muted/40 scroll-animate">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-3">Milestones</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected wins, innovation highlights, and recognition that shaped my growth.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">
              4 Featured Milestones
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30">
              Patent + Hackathons
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {featuredAchievements.map((achievement, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/60 bg-card/80 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-15px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center border border-primary/20 shrink-0">
                        {achievement.type === "patent" ? <Award className="h-5 w-5" /> : <Trophy className="h-5 w-5" />}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground leading-tight break-words">{achievement.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-snug break-words">{achievement.subtitle}</p>
                      </div>
                    </div>

                    <Badge
                      variant={
                        achievement.status === "Winner"
                          ? "default"
                          : achievement.status.includes("Runner-Up")
                            ? "secondary"
                            : "outline"
                      }
                      className="shrink-0"
                    >
                      {achievement.status}
                    </Badge>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/70 border border-border/60 rounded-full px-2.5 py-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {achievement.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/70 border border-border/60 rounded-full px-2.5 py-1 max-w-full">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{achievement.location}</span>
                    </span>
                  </div>

                  {achievement.image && (
                    <div className="mb-4 rounded-2xl overflow-hidden border border-border/60">
                      <img
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.subtitle}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">{achievement.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {achievement.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-[11px] px-2.5 py-0.5 bg-background/70">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-end">
                    {achievement.type === "hackathon" ? (
                      <Button asChild size="sm" className="group/link h-9 rounded-full px-4 text-xs font-semibold shadow-sm hover:shadow-md">
                        <Link href={`/achievements/${achievement.slug}`}>
                          <span className="relative inline-block transition-colors duration-300 group-hover/link:text-white">
                            View Details
                            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all duration-300 group-hover/link:w-full"></span>
                          </span>
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                        </Link>
                      </Button>
                    ) : (
                      <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300/40 dark:border-yellow-700/40 px-3 py-1.5 rounded-full">
                        Publication Pending
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24 bg-background overflow-hidden scroll-animate">
        <div className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-3">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-focused builds across AI/ML, healthcare, cybersecurity, and modern web engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
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

          <div className="text-center mt-12">
            <Button
              onClick={() => (window.location.href = "/projects")}
              className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="transition-colors duration-300 group-hover/btn:text-white">
                View All Projects
              </span>
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-muted/30 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-3">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Skills, Tools & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A focused snapshot of my development strengths across engineering, cloud workflows, and industry-recognized certifications.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Skills & Tools</h3>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: "Programming Languages",
                  icon: Code,
                  skills: [
                    { name: "C++", level: 80, color: "bg-purple-500" },
                    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
                    { name: "Java", level: 70, color: "bg-red-500" },
                    { name: "PHP", level: 70, color: "bg-indigo-600" },
                    { name: "Python", level: 60, color: "bg-blue-500" },                    
                  ],
                },
                {
                  title: "Frontend Technologies",
                  icon: Palette,
                  skills: [
                    { name: "Next.js", level: 80, color: "bg-orange-500" },
                    { name: "React.js", level: 85, color: "bg-teal-500" },
                    { name: "HTML/CSS", level: 90, color: "bg-indigo-500" },
                    { name: "TailwindCSS", level: 80, color: "bg-yellow-500" },
                  ],
                },
                {
                  title: "Backend Development",
                  icon: Server,
                  skills: [
                    { name: "Node.js", level: 85, color: "bg-green-600" },
                    { name: "Express.js", level: 80, color: "bg-green-700" },
                    { name: "RESTful APIs", level: 75, color: "bg-orange-600" },
                    { name: "API Integration", level: 80, color: "bg-emerald-600" },
                    { name: "JWT Authentication", level: 75, color: "bg-red-500" },
                  ],
                },
                {
                  title: "Database Technologies",
                  icon: Database,
                  skills: [
                    { name: "MongoDB", level: 85, color: "bg-orange-500" },
                    { name: "MySQL", level: 85, color: "bg-blue-800" },
                    { name: "Firebase", level: 80, color: "bg-purple-600" },
                  ],
                },
                {
                  title: "Cloud & DevOps",
                  icon: Cloud,
                  skills: [
                    { name: "AWS (Amazon Web Services)", level: 65, color: "bg-yellow-600" },
                    { name: "GCP (Google Cloud Platform)", level: 75, color: "bg-green-500" },
                    { name: "Vercel", level: 90, color: "bg-emerald-500" },
                    { name: "Render", level: 90, color: "bg-teal-600" },
                    { name: "Docker", level: 65, color: "bg-orange-500" },
                    { name: "Git", level: 80, color: "bg-purple-500" },
                    { name: "GitHub", level: 85, color: "bg-blue-600" },
                    { name: "CI/CD Pipelines", level: 60, color: "bg-red-600" },
                    { name: "Postman", level: 70, color: "bg-indigo-600" },
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
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 mb-3">Credentials</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Certifications
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                Structured like a modern credential gallery with preview images, skills gained, and quick verification links.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredCertifications.map((cert, index) => (
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

            <div className="text-center mt-12">
              <Button
                onClick={() => (window.location.href = "/certifications")}
                className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="transition-colors duration-300 group-hover/btn:text-white">
                  View All Certifications
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
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
                        disabled={isSending}
                        className="group/btn w-full bg-primary hover:bg-primary/90 disabled:hover:bg-primary text-primary-foreground py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSending ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"></span>
                            Sending...
                          </span>
                        ) : (
                          <>
                            <span className="relative inline-block transition-colors duration-300 group-hover/btn:text-white">
                              Send Message
                              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                            </span>
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </>
                        )}
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
