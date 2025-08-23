"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Code, Award, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IEEESSHDetails() {
  const hackathonImages = [
    "/ieee1.jpg",
    "/ieee2.jpg",
    "/ieee3.jpg",
    "/ieee4.jpg",
  ]

  const galleryImages = [
    "/ieee5.jpg",
    "/ieee6.jpg",
    "/ieee7.jpg",
    "/ieee8.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>

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
                <span className="text-sm font-medium text-primary">1st Position in Healthcare Track</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                IEEE SSH 2024
                <span className="block text-primary">Healthcare Innovation</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A journey of innovation and learning across two intense 24-hour phases - online and offline - where we crafted MedEase, a revolutionary healthcare platform transforming patient care and hospital management.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>October 2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>KIET Group of Institutions, Ghaziabad</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Healthcare Track</span>
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
                        alt={`Hackathon moment ${index + 1}`}
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
        {/* The Genesis */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Genesis</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Where Innovation Meets Healthcare</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center italic">
              "In the realm of healthcare, every second counts, every decision matters, and every innovation has the
              power to save lives."
            </p>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 mb-8 border-l-4 border-primary">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                The IEEE SSH 2024 hackathon, split into two 24-hour phases—online and offline—challenged us to push the boundaries of healthcare technology. Winning 1st place in the online phase’s healthcare track fueled our drive to create <strong className="text-primary">MedEase</strong>, a platform designed to streamline patient care and hospital operations.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Healthcare systems often face inefficiencies, fragmented communication, and poor patient experiences. MedEase aimed to address these by creating a unified ecosystem connecting patients, doctors, and hospital administration seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Patient-Centric</h3>
              <p className="text-muted-foreground">Empowering patients with seamless healthcare access</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Collaborative</h3>
              <p className="text-muted-foreground">Connecting hospitals, doctors, and patients seamlessly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Intelligent</h3>
              <p className="text-muted-foreground">Leveraging automation for smarter healthcare</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">MedEase: A Symphony of Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Intelligent Booking & Queuing</h4>
                    <p className="text-sm text-muted-foreground">
                      Smart appointment scheduling with real-time queue management
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Automated Bed Availability</h4>
                    <p className="text-sm text-muted-foreground">Real-time bed tracking across multiple hospitals</p>
                  </div>
                </div>
               

 <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Role-Based Authentication</h4>
                    <p className="text-sm text-muted-foreground">Secure access for Admin, Manager, Doctors, Patients, Employee</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">City-Wide Integration</h4>
                    <p className="text-sm text-muted-foreground">Connecting healthcare facilities across the city</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Smart Inventory Management</h4>
                    <p className="text-sm text-muted-foreground">Automated tracking and restocking alerts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Patient Engagement Suite</h4>
                    <p className="text-sm text-muted-foreground">Chat system and AI-powered chatbot support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-muted">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                Powered by
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Two-Phase Journey</h2>
            <p className="text-xl text-muted-foreground">
              From online victory to offline learning - a tale of innovation and growth
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">Online Phase: The Breakthrough</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The online phase was a 24-hour coding and innovation sprint. Our team dove into the healthcare challenge, brainstorming and prototyping MedEase. We focused on creating a robust, user-friendly platform, addressing real-world healthcare pain points.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our hard work paid off as we secured <strong className="text-primary">1st place</strong> in the healthcare track, standing out among competitors for our innovative approach and technical execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center -ml-4">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Offline Phase: The Learning Curve</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Selected for the offline phase at KIET Group of Institutions, Ghaziabad, we faced another intense 24-hour hackathon. This round pushed us to refine MedEase further, collaborating in person and tackling new challenges under tight constraints.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Though we didn’t win, the experience was invaluable. We gained insights into teamwork, real-time problem-solving, and the complexities of healthcare systems, fueling our passion for future innovations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center -ml-4">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-3">The Moment of Truth: Final Presentation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the online phase, our presentation showcased MedEase’s potential to revolutionize healthcare. We demonstrated its seamless integration, real-time features, and patient-centric design, earning us the top spot.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The offline phase, while not a victory, taught us resilience and adaptability. Presenting to judges at KIET, we shared our vision and learned from feedback, strengthening our resolve to innovate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Legacy */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6">Beyond the Competition</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                IEEE SSH 2024 was a transformative experience, blending victory in the online phase with profound learning in the offline phase, solidifying our commitment to healthcare innovation.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">48</div>
                  <div className="text-sm text-muted-foreground">Hours Across Two Phases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1st</div>
                  <div className="text-sm text-muted-foreground">Online Phase Achievement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Lessons Learned</div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The hackathon honed our technical and collaborative skills while deepening our understanding of healthcare challenges. MedEase remains a testament to our vision, inspiring us to continue creating technology that serves humanity with empathy and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Moments of Innovation</h2>
            <p className="text-xl text-muted-foreground">
              Capturing the spirit of collaboration
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Innovation moment ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Innovation in Action</p>
                    <p className="text-sm opacity-90">IEEE SSH 2024 Hackathon</p>
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