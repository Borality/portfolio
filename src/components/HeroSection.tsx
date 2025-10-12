import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { SocialIconButton } from "@/components/SocialIconButton"
import Image from "next/image"
import { TextRoll } from '@/components/ui/text-roll';


export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative h-24 w-24 md:h-28 md:w-28">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/Portfolio%2Flogo-compressed.png?alt=media&token=9ce6533f-1989-4327-a094-f4958f5210cc"
                  alt="Charles Trangay logo"
                  fill
                  priority
                  sizes="112px"
                  className="rounded-full border border-border object-cover shadow lg:drop-shadow-[0_0_1rem_#3da9fc]"
                />
              </div>
            </div>
            <h1 id="home-heading" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              <TextRoll duration={0.4}>{`Hi, I'm Charles`}</TextRoll>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              I am a full-stack developer 💻
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="flex space-x-6">
            <SocialIconButton
              href="https://github.com/Borality"
              ariaLabel="GitHub"
              icon={<Github className="h-6 w-6" />}
              variant="ghost"
              className="h-12 w-12"
            />
            <SocialIconButton
              href="https://www.linkedin.com/in/charles-trangay/"
              ariaLabel="LinkedIn"
              icon={<Linkedin className="h-6 w-6" />}
              variant="ghost"
              className="h-12 w-12"
            />
            <SocialIconButton
              href="mailto:charles-trangay-portfolio-contact.overfeed094@aleeas.com"
              ariaLabel="Email"
              icon={<Mail className="h-6 w-6" />}
              variant="ghost"
              className="h-12 w-12"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

