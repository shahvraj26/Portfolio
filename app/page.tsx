"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
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
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/Portfolio/images/me2.png"
                    alt="Vraj Shah"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl mx-auto md:mx-0"
                  />
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left italic">Hello, Im Vraj Shah</h1>
                  <p className="text-base md:text-lg text-muted-foreground text-center md:text-left">
                  A senior at The Ohio State University pursuing a degree in Computer Science Engineering. 
                  Beyond the world of coding, I find joy in exploring diverse passions such as cooking, playing the piano, 
                  and spending quality time with friends. To get a deeper insight into my work, please check out the Work 
                  and Skills tabs. If you want to connect, feel free to reach out, 
                  and dont forget to take a peek at my resume. 
                  Lets embark on this journey together! <span className="italic">Enjoy.</span>
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Button asChild>
                      <Link href="/work">My Work</Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link href="/contact">Connect</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/skills">Skills</Link>
                    </Button>
                  </div>
                  <div className="flex justify-center md:justify-start gap-4">
                    <Button variant="ghost" size="icon">
                      <Link href="https://github.com/shahvraj26" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Link href="https://www.linkedin.com/in/shahvraj26/" target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link href="mailto:shahvraj26@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MailIcon className="h-5 w-5" />
                      </Link>
                    </Button>
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