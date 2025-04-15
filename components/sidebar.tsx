"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, BookOpen, User, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Portfolio", href: "/portfolio", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
]

export default function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  }

  return (
    <>
      {isMobile && (
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      <motion.aside
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          ${isMobile ? "fixed z-20" : "sticky top-4 left-0 z-10 self-start"}
          max-h-[calc(100vh-2rem)] w-60 bg-[#F7F6F3] dark:bg-[#2F3437] 
          flex flex-col rounded-xl md:rounded-2xl my-4 ml-4
          shadow-lg border border-[#EBEBEA] dark:border-[#373A3E]
          overflow-y-auto
        `}
      >
        <div className="flex flex-col items-center p-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#E6E6E6] dark:border-[#373A3E] mb-3">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-lg font-bold text-[#37352F] dark:text-[#FFFFFF]">John Doe</h1>
          <p className="text-xs text-[#6B6B6B] dark:text-[#9B9B9B]">Web Developer</p>
        </div>

        <nav className="mt-2 flex-1 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link href={item.href}>
                    <div
                      className={`
                        flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#E6E6E6] dark:bg-[#373A3E] text-[#2EA86A] font-medium"
                            : "text-[#6B6B6B] dark:text-[#9B9B9B] hover:bg-[#EBEBEA] dark:hover:bg-[#373A3E]"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-indicator"
                          className="ml-auto h-2 w-2 rounded-full bg-[#2EA86A]"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto p-3">
          <div className="rounded-lg bg-[#EBEBEA] dark:bg-[#373A3E] p-2 text-center text-xs">
            <p className="text-[#6B6B6B] dark:text-[#9B9B9B]">© {new Date().getFullYear()} John Doe</p>
          </div>
        </div>
      </motion.aside>

      {isMobile && isOpen && <div className="fixed inset-0 z-10 bg-black/50" onClick={() => setIsOpen(false)} />}
    </>
  )
}
