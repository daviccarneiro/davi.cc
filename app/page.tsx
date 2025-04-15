import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedPosts from "@/components/featured-posts"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[#37352F] dark:text-[#FFFFFF]">
          Hello, I'm <span className="text-[#2EA86A]">John Doe</span>
        </h1>
        <p className="max-w-2xl text-lg text-[#6B6B6B] dark:text-[#9B9B9B]">
          A passionate web developer specializing in creating beautiful, functional, and user-friendly websites and
          applications.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="/portfolio">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#37352F] dark:text-[#FFFFFF]">Featured Posts</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog" className="text-[#2EA86A]">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <FeaturedPosts />
      </section>
    </div>
  )
}
