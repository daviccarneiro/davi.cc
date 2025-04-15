import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// This would typically come from a CMS or database
const post = {
  title: "Creating Smooth Animations with Framer Motion",
  date: "Apr 10, 2023",
  readTime: "8 min read",
  tags: ["React", "Animation", "Framer Motion"],
  coverImage: "/placeholder.svg?height=400&width=1200",
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.</p>
    
    <h2>Getting Started with Animations</h2>
    
    <p>Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>
    
    <p>Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
    
    <h2>Advanced Animation Techniques</h2>
    
    <p>Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi.</p>
    
    <blockquote>
      <p>The best way to create engaging user experiences is through thoughtful animation that guides the user's attention and provides feedback.</p>
    </blockquote>
    
    <p>Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare.</p>
    
    <h2>Performance Considerations</h2>
    
    <p>Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.</p>
    
    <p>Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.</p>
    
    <h2>Conclusion</h2>
    
    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.</p>
  `,
}

export default function BlogPostPage() {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="text-[#6B6B6B] dark:text-[#9B9B9B]">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>
      </div>

      {/* Cover image */}
      <div className="rounded-xl overflow-hidden mb-8 border border-[#EBEBEA] dark:border-[#373A3E] max-h-[200px] md:max-h-[250px]">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={400}
          className="w-full h-[200px] md:h-[250px] object-cover object-center"
        />
      </div>

      {/* Post header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#37352F] dark:text-[#FFFFFF] mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-[#6B6B6B] dark:text-[#9B9B9B] text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>

          <Separator orientation="vertical" className="h-4" />

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-[#F7F6F3] dark:bg-[#2F3437] text-[#6B6B6B] dark:text-[#9B9B9B]"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Post content */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none
          prose-headings:text-[#37352F] dark:prose-headings:text-[#FFFFFF]
          prose-p:text-[#6B6B6B] dark:prose-p:text-[#9B9B9B]
          prose-a:text-[#2EA86A] prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-[#2EA86A] prose-blockquote:bg-[#F7F6F3] dark:prose-blockquote:bg-[#2F3437]
          prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Separator className="my-8" />

      {/* Author section */}
      <div className="flex items-center gap-4 p-6 rounded-xl bg-[#F7F6F3] dark:bg-[#2F3437] border border-[#EBEBEA] dark:border-[#373A3E]">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#E6E6E6] dark:border-[#373A3E] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Author"
            width={64}
            height={64}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h3 className="font-medium text-[#37352F] dark:text-[#FFFFFF]">John Doe</h3>
          <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B]">
            Web Developer and UI/UX enthusiast. Passionate about creating beautiful and functional interfaces.
          </p>
        </div>
      </div>

      {/* Related posts - placeholder for now */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-[#37352F] dark:text-[#FFFFFF] mb-4">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-[#EBEBEA] dark:border-[#373A3E] hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="font-medium text-[#37352F] dark:text-[#FFFFFF] hover:text-[#2EA86A] transition-colors duration-200">
                <Link href="#">Another Interesting Blog Post Title</Link>
              </h3>
              <p className="text-sm text-[#6B6B6B] dark:text-[#9B9B9B] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
