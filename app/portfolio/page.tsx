import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for portfolio projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Firebase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description:
      "An interactive dashboard for tracking personal finances, with data visualization and budget planning tools.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Vue.js", "D3.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Recipe Sharing Platform",
    description:
      "A community-driven platform for sharing and discovering recipes, with search functionality and user profiles.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "GraphQL", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#37352F] dark:text-[#FFFFFF]">Portfolio</h1>
        <p className="mt-2 text-[#6B6B6B] dark:text-[#9B9B9B]">A showcase of my recent projects and work.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden dark:border-[#373A3E]">
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[#37352F] dark:text-[#FFFFFF]">{project.title}</CardTitle>
              <CardDescription className="text-[#6B6B6B] dark:text-[#9B9B9B]">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-[#F7F6F3] dark:bg-[#2F3437] text-[#6B6B6B] dark:text-[#9B9B9B]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
