import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio & Blog",
  description: "A minimalist portfolio and blog site",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#191919] p-0 md:p-4 relative">
            {/* Theme Toggle */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>

            <div className="flex flex-col md:flex-row">
              <Sidebar />
              <main className="flex-1 p-6 md:p-8 transition-all duration-300 ease-in-out pt-14 md:pt-8 md:ml-4">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'