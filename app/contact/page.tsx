"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#37352F] dark:text-[#FFFFFF]">Contact Me</h1>
        <p className="mt-2 text-[#6B6B6B] dark:text-[#9B9B9B]">
          Have a question or want to work together? Send me a message!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="dark:border-[#373A3E]">
          <CardHeader>
            <CardTitle className="text-[#37352F] dark:text-[#FFFFFF]">Send a Message</CardTitle>
            <CardDescription className="text-[#6B6B6B] dark:text-[#9B9B9B]">
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="min-h-32 resize-none" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="dark:border-[#373A3E]">
          <CardHeader>
            <CardTitle className="text-[#37352F] dark:text-[#FFFFFF]">Contact Information</CardTitle>
            <CardDescription className="text-[#6B6B6B] dark:text-[#9B9B9B]">
              Here are the ways you can reach me directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">Email</h3>
              <p className="text-[#6B6B6B] dark:text-[#9B9B9B]">john.doe@example.com</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">Location</h3>
              <p className="text-[#6B6B6B] dark:text-[#9B9B9B]">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">Social Media</h3>
              <div className="mt-2 flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:border-[#373A3E]">
        <CardHeader>
          <CardTitle className="text-[#37352F] dark:text-[#FFFFFF]">Frequently Asked Questions</CardTitle>
          <CardDescription className="text-[#6B6B6B] dark:text-[#9B9B9B]">
            Answers to common questions about my services and work process.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">What services do you offer?</h3>
            <p className="mt-1 text-[#6B6B6B] dark:text-[#9B9B9B]">
              I specialize in web development, including frontend development with React and Next.js, responsive design,
              and full-stack applications.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">
              What is your typical project timeline?
            </h3>
            <p className="mt-1 text-[#6B6B6B] dark:text-[#9B9B9B]">
              Project timelines vary depending on complexity, but most projects take between 2-8 weeks from start to
              finish.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#37352F] dark:text-[#FFFFFF]">
              Do you offer maintenance services?
            </h3>
            <p className="mt-1 text-[#6B6B6B] dark:text-[#9B9B9B]">
              Yes, I offer ongoing maintenance and support packages to keep your website or application running
              smoothly.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
