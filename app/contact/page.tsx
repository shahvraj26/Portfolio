"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-28 flex items-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <motion.div
                  className="w-full md:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Connect With Me</h1>
                  <p className="text-lg text-muted-foreground text-center md:text-left">
                    I'm always excited to collaborate on new projects or discuss opportunities. Feel free to reach out through any of the following platforms:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button asChild variant="outline" size="lg" className="w-full hover:bg-red-100">
                      <Link href="mailto:shahvraj26@gmail.com" className="flex items-center justify-center gap-3">
                        <MailIcon className="h-6 w-6 text-red-500" />
                        <span className="text-lg">Email</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full hover:bg-gray-100">
                      <Link href="https://github.com/shahvraj26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <GithubIcon className="h-6 w-6 text-gray-700" />
                        <span className="text-lg">GitHub</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full hover:bg-blue-100">
                      <Link href="https://linkedin.com/in/shahvraj26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <LinkedinIcon className="h-6 w-6 text-blue-600" />
                        <span className="text-lg">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full hover:bg-pink-100">
                      <Link href="https://instagram.com/shahvraj26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <InstagramIcon className="h-6 w-6 text-pink-600" />
                        <span className="text-lg">Instagram</span>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 flex justify-center items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                <div className="w-full max-w-md"> {/* Adjust max-w-md as needed */}
                  <Image
                    src="/Portfolio//images/me3.png"
                    alt="Vraj Shah"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-xl mx-auto"
                  />
                </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}