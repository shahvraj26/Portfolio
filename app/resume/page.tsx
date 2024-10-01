"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <h1 className="text-5xl font-bold mb-4 text-center">Resume</h1>
            <Card>
            <CardHeader>
              <CardTitle>Vraj Shah Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src="/pdf/Shah_Resume.pdf"
                width="100%"
                height="600px"
                className="border-0"
              ></iframe>
            </CardContent>
          </Card>
          <div className="mt-12 flex justify-center">
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