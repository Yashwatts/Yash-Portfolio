"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Trophy, Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievementBlogs = {
  "ieee-ssh-2024": {
    title: "IEEE SSH 2024",
    date: "October 2024",
    category: "Hackathon Victory",
    images: ["/ieee-ssh-team.jpg", "/ieee-ssh-presentation.jpg", "/ieee-ssh-award.jpg", "/medease-demo.jpg"],
    content: `
# Winning IEEE SSH 2024: A Journey to Healthcare Innovation

## The Challenge

The IEEE SSH 2024 hackathon, organized by IEEE KIET Group of Institutions, presented us with an incredible opportunity to showcase our skills in the healthcare track. With teams from across the region competing, we knew we had to bring something truly innovative to the table.

## Our Solution: MedEase

We developed **MedEase**, a comprehensive healthcare web application designed to revolutionize how patients, healthcare providers, and hospitals interact. The platform addresses critical pain points in the healthcare system:

### Key Features Developed:
- **Patient Care Integration**: Seamless booking and queuing system
- **Provider Tools**: Comprehensive dashboard for healthcare professionals  
- **Hospital Collaboration**: Inter-hospital communication and resource sharing
- **Real-time Bed Availability**: Automated tracking and allocation
- **Role-Based Authentication**: Secure access for different user types
- **City-Wide Module**: Connecting healthcare facilities across the city
- **Inventory Management**: Smart tracking of medical supplies
- **Patient Engagement**: Chat system and AI-powered chatbot

## Technical Implementation

Our tech stack included:
- **Frontend**: HTML, CSS, JavaScript for responsive user interface
- **Backend**: PHP for server-side logic and API development
- **Database**: MySQL for robust data management
- **Architecture**: MVC pattern for scalable code organization

## The Competition Day

The hackathon was intense, with 48 hours to conceptualize, develop, and present our solution. Our team worked around the clock, dividing responsibilities:

- **Research & Planning**: Understanding healthcare challenges
- **UI/UX Design**: Creating intuitive interfaces for all user types
- **Backend Development**: Building robust APIs and database structure
- **Frontend Integration**: Connecting all components seamlessly
- **Testing & Debugging**: Ensuring reliability under pressure

## Presentation & Victory

Our presentation focused on the real-world impact of MedEase:
- **Problem Statement**: Current healthcare system inefficiencies
- **Solution Overview**: How MedEase addresses these challenges
- **Technical Demo**: Live demonstration of key features
- **Market Potential**: Scalability and adoption possibilities
- **Future Roadmap**: Plans for enhancement and expansion

The judges were impressed by our comprehensive approach to healthcare digitization and the practical implementation of complex features within the time constraint.

## Key Learnings

This victory taught us valuable lessons:
- **Team Collaboration**: Effective communication under pressure
- **Time Management**: Prioritizing features for maximum impact
- **User-Centric Design**: Focusing on real healthcare needs
- **Technical Excellence**: Writing clean, maintainable code quickly
- **Presentation Skills**: Communicating complex ideas clearly

## Impact & Recognition

Winning the IEEE SSH 2024 hackathon was more than just a competition victory - it validated our approach to healthcare technology and opened doors for future opportunities. The recognition from IEEE, a globally respected organization, added significant value to our professional profiles.

## Future Plans

The success of MedEase at IEEE SSH 2024 has inspired us to continue developing healthcare solutions. We're exploring opportunities to:
- Expand the platform with AI-powered diagnostics
- Integrate with existing hospital management systems
- Develop mobile applications for better accessibility
- Partner with healthcare institutions for pilot implementations

This achievement represents not just a win, but the beginning of our journey in healthcare technology innovation.
    `,
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: ["1st Position", "Healthcare Track Winner", "Best Innovation Award"],
  },
  "hack-iot-2024": {
    title: "Hack IOT 2024 - 2nd Runner-Up Position",
    date: "February 2024",
    category: "IoT Hackathon",
    images: ["/hack-iot-team.jpg", "/hack-iot-presentation.jpg", "/writetherights-demo.jpg"],
    content: `
# Hack IOT 2024: Empowering Children Through Technology

## The Mission

At Hack IOT 2024, organized by the ECE School of LPU, we tackled a unique challenge: creating technology solutions that could make a positive social impact. Our team decided to focus on children's rights awareness - a critical issue that often lacks engaging educational tools.

## WriteTheRights: Gaming for Good

We developed **WriteTheRights**, an innovative gaming web application designed to educate children about their fundamental rights through interactive gameplay and engaging content.

### Core Features:
- **Interactive Games**: Educational mini-games teaching different rights
- **Age-Appropriate Content**: Tailored messaging for different age groups
- **Progress Tracking**: Monitoring learning achievements
- **Reward System**: Gamification to encourage continued learning
- **Multilingual Support**: Accessibility for diverse communities
- **Parent Dashboard**: Tools for parents to track their child's progress

## Technical Architecture

Built with a focus on simplicity and accessibility:
- **Frontend**: HTML, CSS, JavaScript for cross-platform compatibility
- **Responsive Design**: Optimized for tablets and mobile devices
- **Game Engine**: Custom JavaScript-based game mechanics
- **Data Storage**: Local storage for offline functionality
- **Performance**: Lightweight design for low-bandwidth environments

## Development Challenges

Creating an educational gaming platform presented unique challenges:

### User Experience Design
- Balancing fun gameplay with educational content
- Creating intuitive interfaces for young users
- Ensuring accessibility for children with different abilities

### Content Development
- Researching children's rights comprehensively
- Translating complex legal concepts into simple language
- Creating engaging storylines and characters

### Technical Implementation
- Optimizing performance for older devices
- Ensuring cross-browser compatibility
- Implementing secure data handling for minors

## Competition Experience

The Hack IOT hackathon was incredibly competitive, with teams from across the university presenting innovative IoT solutions. Our approach stood out because:

- **Social Impact Focus**: Addressing a real societal need
- **User-Centric Design**: Prioritizing the end-user experience
- **Scalability**: Potential for widespread adoption
- **Innovation**: Unique approach to rights education

## Presentation Highlights

Our presentation emphasized:
- **Problem Identification**: Lack of engaging rights education tools
- **Solution Demonstration**: Live gameplay showcasing key features
- **Impact Potential**: How the platform could reach thousands of children
- **Technical Excellence**: Clean code and responsive design
- **Future Vision**: Plans for expansion and enhancement

## Recognition & Learning

Securing the 2nd Runner-Up position was incredibly rewarding and taught us:
- **Leadership Skills**: Managing team dynamics under pressure
- **Creative Problem Solving**: Finding innovative solutions to complex challenges
- **Public Speaking**: Presenting technical concepts to diverse audiences
- **Social Responsibility**: Using technology for positive social impact

## Community Impact

WriteTheRights has the potential to:
- Educate thousands of children about their rights
- Reduce child exploitation through awareness
- Empower young people to speak up for themselves
- Create a generation more aware of human rights

## Future Development

Post-hackathon, we're exploring:
- **Mobile App Development**: Native iOS and Android applications
- **Partnership Opportunities**: Collaborating with NGOs and schools
- **Content Expansion**: Adding more rights and interactive elements
- **Localization**: Adapting content for different cultural contexts
- **AI Integration**: Personalized learning experiences

This achievement at Hack IOT 2024 reinforced our belief in technology's power to create positive social change and inspired us to continue developing solutions that matter.
    `,
    techStack: ["HTML", "CSS", "JavaScript"],
    achievements: ["2nd Runner-Up", "Social Impact Award", "Best UI/UX Design"],
  },
  "frontend-fusion-2023": {
    title: "Frontend Fusion 2023 - 1st Runner-Up",
    date: "December 2023",
    category: "Web Development Competition",
    images: ["/frontend-fusion-team.jpg", "/frontend-fusion-presentation.jpg", "/event-management-demo.jpg"],
    content: `
# Frontend Fusion 2023: Mastering Web Presentation

## The Competition

Frontend Fusion 2023 was a prestigious web development competition focused on frontend skills and presentation abilities. Participants were challenged to create visually stunning and functionally robust web applications while demonstrating exceptional presentation skills.

## Our Project: Event Management Platform

We developed a comprehensive event management website that revolutionizes how people discover, book, and manage event tickets across various entertainment categories.

### Platform Features:
- **Multi-Category Events**: Movies, concerts, stand-up shows, and more
- **Location-Based Discovery**: Find events in your area
- **Ticket Booking System**: Seamless reservation and payment
- **Event Listing**: Allow organizers to list their events
- **User Profiles**: Personalized event recommendations
- **Review System**: Community feedback and ratings
- **Mobile Responsive**: Optimized for all devices

## Technical Excellence

Our frontend implementation showcased advanced web development skills:

### HTML Structure
- Semantic HTML5 elements for accessibility
- SEO-optimized markup structure
- Progressive enhancement principles
- Cross-browser compatibility

### CSS Mastery
- Advanced CSS3 animations and transitions
- Responsive grid and flexbox layouts
- Custom CSS variables for theming
- Performance-optimized stylesheets

### JavaScript Functionality
- Dynamic content loading and filtering
- Interactive booking flow
- Real-time availability updates
- Form validation and error handling
- Local storage for user preferences

## Design Philosophy

Our design approach focused on:

### User Experience
- Intuitive navigation and information architecture
- Streamlined booking process
- Clear visual hierarchy
- Accessibility compliance (WCAG guidelines)

### Visual Design
- Modern, clean aesthetic
- Consistent color palette and typography
- High-quality imagery and graphics
- Micro-interactions for enhanced engagement

### Performance
- Optimized loading times
- Efficient code organization
- Image optimization and lazy loading
- Minimal external dependencies

## Competition Presentation

Our presentation strategy included:

### Technical Demonstration
- Live coding session showing key features
- Responsive design showcase across devices
- Performance metrics and optimization techniques
- Code quality and organization walkthrough

### Business Case
- Market analysis and target audience identification
- Revenue model and monetization strategy
- Competitive analysis and differentiation
- Growth potential and scalability plans

### Design Process
- User research and persona development
- Wireframing and prototyping methodology
- Design system creation and implementation
- Usability testing and iteration cycles

## Judges' Feedback

The panel appreciated:
- **Technical Proficiency**: Clean, maintainable code structure
- **Design Excellence**: Visually appealing and user-friendly interface
- **Presentation Skills**: Clear communication of complex concepts
- **Innovation**: Creative solutions to common event management problems
- **Attention to Detail**: Polished final product with thoughtful UX

## Key Learnings

This competition enhanced our skills in:
- **Frontend Development**: Advanced HTML, CSS, and JavaScript techniques
- **Design Thinking**: User-centered design methodology
- **Project Management**: Efficient workflow and time management
- **Public Speaking**: Confident presentation of technical work
- **Problem Solving**: Creative solutions under time constraints

## Industry Recognition

Achieving 1st Runner-Up position provided:
- **Portfolio Enhancement**: Showcase piece for future opportunities
- **Networking**: Connections with industry professionals and peers
- **Skill Validation**: Recognition of frontend development expertise
- **Career Advancement**: Improved prospects in web development field

## Post-Competition Development

Following the competition, we continued improving the platform:
- **Backend Integration**: Added server-side functionality
- **Database Implementation**: Persistent data storage
- **Payment Gateway**: Secure transaction processing
- **Admin Panel**: Event management dashboard
- **Analytics**: User behavior tracking and insights

## Future Enhancements

Planned improvements include:
- **Mobile App**: Native iOS and Android applications
- **AI Recommendations**: Personalized event suggestions
- **Social Features**: Friend connections and group bookings
- **Virtual Events**: Support for online event streaming
- **Advanced Analytics**: Detailed reporting for event organizers

This achievement at Frontend Fusion 2023 marked a significant milestone in our web development journey and established our reputation for creating exceptional user experiences.
    `,
    techStack: ["HTML", "CSS", "JavaScript"],
    achievements: ["1st Runner-Up", "Best Frontend Design", "Audience Choice Award"],
  },
  "patent-filing-2025": {
    title: "Patent Filing: Self-evolving AI System",
    date: "August 2025",
    category: "Intellectual Property",
    images: [], // No images for patent as requested
    content: `
# Patent Filing: Self-evolving AI System Utilizing Quantum Computing

## Innovation Overview

In August 2025, I successfully filed an Intellectual Property Rights (IPR) request for a groundbreaking innovation: a **Self-evolving AI System Utilizing Quantum Computing for Autonomous Learning and Adaptive Decision Making**. This patent represents a significant advancement in artificial intelligence and quantum computing integration.

## The Innovation

### Core Concept
The patented system combines quantum computing principles with artificial intelligence to create a self-evolving learning mechanism that can adapt and improve its decision-making capabilities autonomously, without human intervention.

### Key Components

#### Quantum-Enhanced Learning Algorithm
- Utilizes quantum superposition for parallel processing of multiple learning paths
- Implements quantum entanglement for correlated decision-making across system components
- Leverages quantum interference to optimize learning outcomes

#### Self-Evolution Mechanism
- Autonomous code modification and optimization
- Dynamic neural network architecture adaptation
- Real-time performance monitoring and adjustment
- Continuous learning from environmental feedback

#### Adaptive Decision Framework
- Context-aware decision making based on historical patterns
- Predictive modeling using quantum probability distributions
- Multi-objective optimization for complex scenarios
- Uncertainty quantification and risk assessment

## Technical Innovation

### Quantum Computing Integration
The system leverages quantum computing's unique properties:
- **Superposition**: Processing multiple possibilities simultaneously
- **Entanglement**: Creating correlated decision pathways
- **Quantum Interference**: Optimizing solution convergence
- **Quantum Tunneling**: Escaping local optimization minima

### AI Architecture
Advanced artificial intelligence components include:
- **Neural Quantum Networks**: Hybrid classical-quantum neural architectures
- **Quantum Reinforcement Learning**: Enhanced reward-based learning
- **Evolutionary Algorithms**: Self-modifying code structures
- **Adaptive Memory Systems**: Dynamic knowledge representation

## Patent Filing Process

### Research and Development Phase
- Extensive literature review of existing quantum AI systems
- Prototype development and testing
- Performance benchmarking against classical systems
- Intellectual property landscape analysis

### Documentation Process
- Detailed technical specifications and diagrams
- Mathematical proofs and algorithmic descriptions
- Use case scenarios and application examples
- Prior art analysis and differentiation

### Legal Submission
- Filed with the Department of Research and Development (DRD)
- Comprehensive patent application including claims and specifications
- Patent has been verified and is currently pending official publication
- Expected approval timeline: 12-18 months

## Potential Applications

### Healthcare
- Autonomous diagnostic systems that improve with each patient interaction
- Drug discovery acceleration through quantum-enhanced molecular modeling
- Personalized treatment optimization based on patient response patterns

### Financial Services
- Adaptive fraud detection systems that evolve with new threat patterns
- Quantum-enhanced risk assessment for investment decisions
- Autonomous trading systems with self-improving strategies

### Autonomous Systems
- Self-evolving autonomous vehicle navigation
- Adaptive robotics for complex manufacturing processes
- Smart city infrastructure that optimizes based on usage patterns

### Scientific Research
- Accelerated materials discovery through quantum simulation
- Climate modeling with adaptive prediction capabilities
- Pharmaceutical research with self-improving molecular analysis

## Competitive Advantages

### Technical Superiority
- First-of-its-kind integration of quantum computing with self-evolving AI
- Exponential performance improvements over classical systems
- Autonomous adaptation without human intervention required

### Market Potential
- Addresses critical limitations in current AI systems
- Scalable across multiple industries and applications
- Significant competitive advantage for early adopters

### Innovation Impact
- Potential to revolutionize artificial intelligence field
- Breakthrough in quantum computing practical applications
- Foundation for next-generation autonomous systems

## Development Challenges Overcome

### Quantum Decoherence
- Developed error correction mechanisms for quantum state preservation
- Implemented fault-tolerant quantum algorithms
- Created hybrid classical-quantum processing pipelines

### Scalability Issues
- Designed modular architecture for system expansion
- Implemented efficient resource allocation algorithms
- Created distributed quantum processing frameworks

### Integration Complexity
- Developed standardized interfaces between quantum and classical components
- Created comprehensive testing and validation frameworks
- Implemented robust monitoring and debugging tools

## Future Development Plans

### Phase 1: Prototype Refinement
- Enhanced quantum error correction
- Improved learning algorithm efficiency
- Expanded testing across diverse applications

### Phase 2: Commercial Development
- Industry partnerships for pilot implementations
- Scalability optimization for enterprise deployment
- Regulatory compliance and safety certifications

### Phase 3: Market Launch
- Commercial product development
- Licensing opportunities for technology transfer
- Strategic partnerships with quantum computing companies

## Impact on Career

This patent filing represents:
- **Technical Leadership**: Recognition as an innovator in cutting-edge technology
- **Research Excellence**: Contribution to advancing the field of quantum AI
- **Commercial Potential**: Foundation for future entrepreneurial ventures
- **Academic Recognition**: Potential for research publications and collaborations

## Intellectual Property Strategy

### Protection Scope
- Core algorithms and methodologies
- System architecture and design patterns
- Implementation techniques and optimizations
- Application-specific adaptations

### Commercialization Plans
- Licensing opportunities with tech giants
- Startup venture possibilities
- Research collaboration agreements
- Technology transfer partnerships

This patent filing marks a significant milestone in my career and represents a meaningful contribution to the advancement of artificial intelligence and quantum computing technologies.
    `,
    techStack: ["Quantum Computing", "Artificial Intelligence", "Machine Learning", "Python", "Quantum Algorithms"],
    achievements: ["Patent Filed", "Innovation Recognition", "Technical Leadership"],
  },
}

export default function AchievementBlog() {
  const params = useParams()
  const slug = params.slug as string
  const achievement = achievementBlogs[slug as keyof typeof achievementBlogs]

  if (!achievement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Achievement Not Found</h1>
          <Link href="/achievements">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Achievements
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/achievements"
            className="inline-flex items-center text-primary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Achievements
          </Link>

          <div className="space-y-4">
            <Badge variant="secondary" className="mb-2">
              {achievement.category}
            </Badge>
            <h1 className="text-4xl font-bold text-foreground">{achievement.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {achievement.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images Gallery */}
            {achievement.images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievement.images.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <img
                        src={`/abstract-geometric-shapes.png?height=200&width=300&query=${image.split("/")[1]}`}
                        alt={`${achievement.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground space-y-6">
                {achievement.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace("# ", "")}
                      </h1>
                    )
                  } else if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  } else if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                        {paragraph.replace("### ", "")}
                      </h3>
                    )
                  } else if (paragraph.startsWith("- **")) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {paragraph.split("\n").map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            {item.replace("- **", "").replace("**:", ":")}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (paragraph.includes("**") && paragraph.includes("**:")) {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        <strong>{paragraph.split("**")[1]}:</strong> {paragraph.split("**: ")[1]}
                      </p>
                    )
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {achievement.techStack.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Achievements
                </h3>
                <div className="space-y-2">
                  {achievement.achievements.map((item, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Share This Achievement</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
