"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Gamepad2, Code, Heart, Lightbulb, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HackIOTDetails() {
  const hackathonImages = [
    "/iot4.jpg",
    "/iot3.jpg",
    "/iot6.jpg",
    "/iot8.jpg",
  ]

  const galleryImages = [
    "/iot1.jpg",
    "/iot2.jpg",
    "/iot5.jpg",
    "/iot7.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-secondary/20 via-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.05),transparent_50%)]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/achievements">
            <Button variant="ghost" size="sm" className="mb-8 hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Achievements
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
                <Trophy className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">2nd Runner-Up</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hack IOT
                <span className="block text-secondary">Gaming for Good</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Where technology meets social impact - creating WriteTheRights, an educational gaming platform that
                empowers children with knowledge about their fundamental rights through interactive storytelling and
                engaging gameplay.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>February 2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>Lovely Professional University, Punjab</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                  <Gamepad2 className="h-4 w-4 text-secondary" />
                  <span>Educational Gaming</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-muted/30 backdrop-blur-sm rounded-3xl p-8 border border-secondary/20">
                <div className="grid grid-cols-2 gap-4">
                  {hackathonImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Development moment ${index + 1}`}
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
        {/* The Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
              <Heart className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">The Mission</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Education Through Play</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-center italic">
  &quot;Every child deserves to know their rights, and every right deserves to be learned with joy.&quot;
</p>

            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 mb-8 border-l-4 border-secondary">
              <p className="text-lg text-foreground leading-relaxed mb-4">
  Hack IOT 2024 challenged us to think beyond conventional solutions and create something that could make
  a real difference in society. We saw an opportunity to address a critical gap:
  <strong className="text-secondary"> children&apos;s awareness of their fundamental rights</strong>
</p>

              <p className="text-lg text-foreground leading-relaxed">
                Traditional educational methods often fail to engage young minds when teaching about rights and
                responsibilities. We envisioned <strong className="text-secondary">WriteTheRights</strong> - a gaming
                platform that would transform learning about rights from a boring lecture into an exciting adventure.
              </p>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Gamified Learning</h3>
              <p className="text-muted-foreground">Making education fun with 8-10 interactive game levels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Child-Centric</h3>
              <p className="text-muted-foreground">Designed for young minds with age-appropriate content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Rights Awareness</h3>
              <p className="text-muted-foreground">Empowering children with knowledge of their rights</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">WriteTheRights: Where Learning Meets Adventure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Interactive Game Levels</h4>
                    <p className="text-sm text-muted-foreground">8-10 levels including matching cards and situation-based challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Engaging Mechanics</h4>
                    <p className="text-sm text-muted-foreground">Games like rapid fire questions and complete the missing letter</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Progress Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor learning journey and achievements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reward System</h4>
                    <p className="text-sm text-muted-foreground">Achievements and badges to motivate learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-muted">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-secondary" />
                Built with
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-secondary/5 border-secondary/20 text-secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Development Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Development Adventure</h2>
            <p className="text-xl text-muted-foreground">
              From concept to creation - building a platform that makes learning rights fun
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center -ml-4">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Research & Ideation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We studied how children learn best, focusing on engaging and interactive methods. Our research showed that gamified learning could make rights education impactful, leading us to design 8-10 levels like matching cards and rapid fire questions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
  <em>&quot;Children learn best when they&apos;re having fun,&quot;</em> guided our creation of WriteTheRights, ensuring each level, from match the following to situation-based challenges, was both educational and entertaining.
</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center -ml-4">
                  <Gamepad2 className="h-4 w-4 text-white" />
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Game Design & Storytelling</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Crafting 8-10 levels, including matching cards, rapid fire questions, situation-based challenges, match the following, and complete the missing letter, was our core challenge. Each level was designed to teach specific rights in an engaging way.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We wove storytelling into each level, making abstract rights concrete and relatable. For example, situation-based levels placed children in real-world scenarios, while matching games reinforced key concepts through repetition and fun.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center -ml-4">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Recognition & Impact</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
  Our presentation showcased not just a game, but a vision for transforming children&apos;s education. The
  judges were impressed by our focus on social impact and the technical execution of creating smooth,
  engaging gameplay using JavaScript.
</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Securing 2nd Runner-Up position validated our belief that technology can be a powerful tool for
                    social good, especially when it comes to empowering the next generation with knowledge of their
                    rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Future */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-secondary/5 via-primary/5 to-background rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6">Beyond the Competition</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
  WriteTheRights represents more than a hackathon project - it&apos;s a testament to the power of combining
  technology with social consciousness to create meaningful change.
</p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">2nd</div>
                  <div className="text-sm text-muted-foreground">Runner-Up Position</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Children Empowered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Game Levels Created</div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
  This experience taught us that the most impactful technology solutions are those that serve humanity&apos;s
  most vulnerable - our children. WriteTheRights continues to inspire our work in educational technology,
  reminding us that every line of code can contribute to building a more informed and empowered society.
</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Development Journey</h2>
            <p className="text-xl text-muted-foreground">Capturing the moments of creativity and collaboration</p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Development moment ${index + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Building for Good</p>
                    <p className="text-sm opacity-90">Hack IOT 2024</p>
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
