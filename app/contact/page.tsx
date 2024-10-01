"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "lucide-react"
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
    <div className="min-h-screen bg-background flex flex-col items-center">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
            <h1 className="text-5xl font-bold mb-4 text-center">Connect With Me</h1>
            <Card>
            <CardHeader>
              <CardTitle className="text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-center">
                Feel free to reach out to me through any of the following platforms:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="mailto:shahvraj26@gmail.com">
                    <MailIcon className="mr-2" /> shahvraj26@gmail.com
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="https://github.com/shahvraj26" target="_blank">
                    <GithubIcon className="mr-2" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="https://linkedin.com/in/shahvraj26" target="_blank">
                    <LinkedinIcon className="mr-2" /> LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="https://instagram.com/shahvraj26" target="_blank">
                    <InstagramIcon className="mr-2" /> Instagram
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}