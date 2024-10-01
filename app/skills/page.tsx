"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { Binary, Move3D, BookOpenText, Globe, Earth, MessageCircleCode, SquarePlay, MapPinCheckInside, FileChartLine } from "lucide-react"
import { JavaOriginal, AzuresqldatabaseOriginal, PythonOriginal, FigmaOriginal, VisualstudioPlain, TypescriptOriginal, GitPlain, BashOriginal, Css3Plain, Html5Plain, ReactOriginal, UbuntuOriginal, JavascriptOriginal, OpencvOriginal, TailwindcssOriginal, CplusplusPlain, CLine } from 'devicons-react';
import Footer from "@/components/Footer"

const programmingLanguages = [
  { name: "Java", icon: <JavaOriginal />, level: 90 },
  { name: "C++", icon: <CplusplusPlain />, level: 85 },
  { name: "C", icon: <CLine />, level: 80 },
  { name: "x86-64 Assembly", icon: <Binary className="h-4 w-4" />, level: 70 },
  { name: "Python", icon: <PythonOriginal />, level: 95 },
  { name: "TypeScript", icon: <TypescriptOriginal />, level: 90 },
  { name: "React Native", icon: <ReactOriginal />, level: 85 },
  { name: "JavaScript (ThreeJS, VueJS, NextJS)", icon: <JavascriptOriginal />, level: 90 },
]

const speakingLanguages = [
  { name: "English (Native)", icon: <BookOpenText className="h-4 w-4" />, level: 100 },
  { name: "Gujarati (Native)", icon: <Earth className="h-4 w-4" />, level: 100 },
  { name: "Hindi (Second)", icon: <Globe className="h-4 w-4" />, level: 70 },
]

const otherSkills = [
  { name: "Linux", icon: <UbuntuOriginal />, level: 85 },
  { name: "HTML5", icon: <Html5Plain />, level: 90 },
  { name: "CSS", icon: <Css3Plain />, level: 85 },
  { name: "Git", icon: <GitPlain />, level: 80 },
  { name: "Microsoft Suite", icon: <FileChartLine className="h-4 w-4" />, level: 75 },
  { name: "SQL", icon: <AzuresqldatabaseOriginal />, level: 70 },
  { name: "Bash", icon: <BashOriginal />, level: 65 },
  { name: "Solidworks", icon: <Move3D className="h-4 w-4" />, level: 60 },
  { name: "Visual Studio", icon: <VisualstudioPlain />, level: 85 },
  { name: "Figma", icon: <FigmaOriginal />, level: 70 },
  { name: "Twilio", icon: <MessageCircleCode className="h-4 w-4" />, level: 60 },
  { name: "WebGL", icon: <MapPinCheckInside className="h-4 w-4" />, level: 55 },
  { name: "OpenCV", icon: <OpencvOriginal />, level: 65 },
  { name: "Tailwind CSS", icon: <TailwindcssOriginal />, level: 80 },
  { name: "Mux", icon: <SquarePlay className="h-4 w-4" />, level: 50 },
]

export default function SkillsPage() {
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
          <h2 className="text-2xl font-bold mt-8 mb-4">Programming Languages</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {programmingLanguages.map((skill, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Button variant="outline" className="flex items-center gap-2 w-full relative overflow-hidden">
                  {skill.icon}
                  <span>{skill.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Speaking Languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {speakingLanguages.map((language, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Button variant="outline" className="flex items-center gap-2 w-full relative overflow-hidden">
                  {language.icon}
                  <span>{language.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: `${language.level}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Other Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <Button variant="outline" className="flex items-center gap-2 w-full relative overflow-hidden">
                  {skill.icon}
                  <span>{skill.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
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