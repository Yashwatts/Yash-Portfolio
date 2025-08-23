"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Presentation, Code, Palette, Users, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FrontendFusionDetails() {
  const hackathonImages = [
    "/front1.jpg",
    "/front2.jpg",
    "/front3.jpg",
    "/front4.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/achievements">
            <Button variant="ghost" size="sm" className="mb-8 hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Achievements
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">1st Runner-Up</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Frontend Fusion
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A showcase of frontend mastery and presentation excellence - creating a comprehensive event management
                platform that connects event organizers with audiences across multiple entertainment categories.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>December 2023</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Lovely Professional University, Punjab</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Presentation className="h-4 w-4 text-primary" />
                  <span>Frontend Excellence</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-muted/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-4">
                  {hackathonImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Competition moment ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* The Challenge */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Challenge</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Frontend Excellence Meets Presentation Mastery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center italic">
  &quot;Great frontend development is not just about code - it&apos;s about creating experiences that users love and presenting solutions that inspire.&quot;
</p>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 mb-8 border-l-4 border-primary">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Frontend Fusion challenged us to demonstrate not just our technical skills, but our ability to create
                compelling user experiences and present them effectively. We saw an opportunity to tackle a real-world
                problem: <strong className="text-primary">fragmented event discovery and booking</strong>.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                The event industry needed a unified platform that could serve both event-goers seeking entertainment and
                organizers looking to reach their audience. We created
                <strong className="text-primary"> a comprehensive event management ecosystem</strong> that bridges this
                gap with elegant design and intuitive functionality.
              </p>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dual-Purpose</h3>
              <p className="text-muted-foreground">Serving both event attendees and organizers seamlessly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Location-Centric</h3>
              <p className="text-muted-foreground">Smart event discovery based on user location and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Intuitive Design</h3>
              <p className="text-muted-foreground">Clean, responsive interface that works across all devices</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Event Management Ecosystem</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Multi-Category Booking</h4>
                    <p className="text-sm text-muted-foreground">
                      Movies, concerts, standup shows, and more in one platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location-Based Discovery</h4>
                    <p className="text-sm text-muted-foreground">Find events happening in your area instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Organizer Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive tools for event management</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Book My Show Integration</h4>
                    <p className="text-sm text-muted-foreground">Integrated Book My Show for booking tickets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reviews & Ratings</h4>
                    <p className="text-sm text-muted-foreground">Community-driven event quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mobile-First Design</h4>
                    <p className="text-sm text-muted-foreground">Optimized for all devices and screen sizes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-muted">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                Crafted with
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Development Journey */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">From Concept to Competition</h2>
            <p className="text-xl text-muted-foreground">
              The journey of creating a platform that serves multiple user types with elegance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center -ml-4">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Market Research & User Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We started by analyzing existing event platforms like BookMyShow and Eventbrite, identifying pain
                    points in user experience and gaps in functionality. Our research revealed that users wanted a more
                    intuitive, location-centric approach to event discovery.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
  <em>&quot;Understanding the user is the first step to creating something they&apos;ll love,&quot;</em> guided our
  approach as we mapped out user journeys for both event-goers and organizers.
</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center -ml-4">
                  <Palette className="h-4 w-4 text-white" />
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Design & User Experience</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Creating a dual-purpose platform required careful consideration of different user needs. We designed
                    separate but connected interfaces - an intuitive browsing experience for attendees and a powerful
                    dashboard for organizers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every design decision was made with mobile-first principles, ensuring the platform would work
                    seamlessly across devices. We focused on visual hierarchy, clear navigation, and engaging event
                    cards that would capture user attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center -ml-4">
                  <Presentation className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Presentation Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
  Our presentation strategy focused on storytelling - we didn&apos;t just show features, we demonstrated
  how the platform would transform the event discovery experience. We walked the judges through real
  user scenarios, showing both the attendee and organizer perspectives.
</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The technical demonstration highlighted our JavaScript implementation, responsive design
                    patterns, colour theme, and the seamless integration between different platform components. Our 1st Runner-Up
                    position validated our approach to combining technical excellence with compelling presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement & Growth */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6">Excellence in Frontend Craft</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Frontend Fusion was more than a competition - it was a validation of our ability to create user-centric
                solutions and communicate their value effectively.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1st</div>
                  <div className="text-sm text-muted-foreground">Runner-Up Achievement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">User Types Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Events Connected</div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This experience deepened our understanding of user experience design, responsive development, and
                effective technical communication. The platform concept continues to influence our approach to building
                comprehensive web applications that serve multiple stakeholders with elegance and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Competition Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Moments of creativity, presentation, and frontend excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hackathonImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Competition moment ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Frontend Excellence</p>
                    <p className="text-sm opacity-90">Frontend Fusion 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
