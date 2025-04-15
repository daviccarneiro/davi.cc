import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredPosts = [
  {
    id: 1,
    title: "Creating Smooth Animations with Framer Motion",
    description: "Learn how to implement beautiful animations in your React applications using Framer Motion.",
    date: "Apr 10, 2023",
    tags: ["React", "Animation"],
    slug: "post",
  },
  {
    id: 2,
    title: "Building a Portfolio with Next.js",
    description: "A step-by-step guide to creating a professional portfolio website using Next.js and Tailwind CSS.",
    date: "Mar 22, 2023",
    tags: ["Next.js", "Portfolio"],
    slug: "post",
  },
  {
    id: 3,
    title: "Minimalist Design Principles",
    description: "Explore the core principles of minimalist design and how to apply them to your web projects.",
    date: "Feb 15, 2023",
    tags: ["Design", "UI/UX"],
    slug: "post",
  },
]

export default function FeaturedPosts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md dark:border-[#373A3E]">
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-2 text-[#37352F] dark:text-[#FFFFFF] group-hover:text-[#2EA86A] transition-colors duration-200">
                {post.title}
              </CardTitle>
              <CardDescription className="text-[#6B6B6B] dark:text-[#9B9B9B]">{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-sm text-[#6B6B6B] dark:text-[#9B9B9B]">{post.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-[#F7F6F3] dark:bg-[#2F3437] text-[#6B6B6B] dark:text-[#9B9B9B]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
