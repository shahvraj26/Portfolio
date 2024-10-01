"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { ArrowRightIcon } from "lucide-react"
import Footer from "@/components/Footer"
import Image from "next/image"

const currentWork = {
  title: "Research Assistant",
  company: "Machine Analysis of Political Speech Lab",
  period: "August 2024 – Present",
  description: [
    "Developed scalable data pipeline using Computer Vision and NLP.",
    "Automated data extraction with Python, WhisperX, and Llama-3.",
    "Reduced debate processing time to 13 minutes.",
    "Created data visualizations with matplotlib."
  ],
  image: "/images/current_work.jpg",
  link: "https://skyler-cranmer.net/research-2",
}

const workExperiences = [
  {
    title: "Technical Co-Founder",
    company: "dustin",
    period: "June 2024 – Present",
    description: [
      "Developed AI-driven platform for e-commerce sellers.",
      "Integrated expense tracking and demand forecasting.",
      "Secured first paying customer.",
      "Used Plaid API, Next.js, LangChain, and Supabase."
    ],
    image: "/images/dustin.png",
    link: "https://dustinhq.com/",
  },
  {
    title: "IT Support Technician",
    company: "Digital Union Classroom Services",
    period: "May 2024 – August 2024",
    description: [
      "Provided customer service and technical support.",
      "Assisted with instructional technology and AV systems.",
      "Performed daily maintenance and troubleshooting."
    ],
    image: "/images/digital.png",
    link: "https://u.osu.edu/workatclassroomservices/",
  },
  {
    title: "Chief Technology Officer",
    company: "Mindful Diagnosis",
    period: "December 2022 – May 2024",
    description: [
      "Developed implicit bias assessment platform for physicians.",
      "Used NextJS, SQL, Mux, Tailwind, and Prisma.",
      "Secured $1500 in startup funding."
    ],
    image: "/images/mindfullogo.png",
    link: "https://youtu.be/VWrgPNY8TFU?si=XkLadUAlyCOHYFQO",
  },
  {
    title: "Research Assistant",
    company: "Network-Based Computing Lab",
    period: "June 2022 – August 2022",
    description: [
      "Optimized NOWLAB website with HTML/CSS.",
      "Configured network protocols for lab hardware."
    ],
    image: "/images/nowlab.png",
    link: "https://nowlab.cse.ohio-state.edu/",
  },
  {
    title: "Research Assistant",
    company: "Packet Wars",
    period: "June 2021 – August 2021",
    description: [
      "Created a script to extract hidden images from search engines to see if there is any incriminating data used by hackers or spies.",
    ],
    image: "/images/packetwars.png",
    link: "https://www.packetwars.com/",
  },
]

const projectsAndAwards = [
  {
    title: "National Cyber League",
    period: "October 2018 – Present",
    description: [
      "Participated in cybersecurity CTF competition.",
      "Skills: log analysis, binary exploitation, OSINT.",
      "Placed 380th out of 5380 individuals."
    ],
    image: "/images/ncl.png",
    link: "https://nationalcyberleague.org/competition",
  },
  {
    title: "Gym Data Tracking App",
    period: "May 2024 - Present",
    description: [
      "Developed real-time gym tracking app for OSU gyms.",
      "Used React Native and Selenium.",
      "Submitted to Apple App Store."
    ],
    image: "/images/gymapp.png",
    link: "https://github.com/shahvraj26/MyReactNative",
  },
  {
    title: "HackOH/IO Makeathon",
    period: "March 2024",
    description: [
      "Developed advanced security suite with ML for facial recognition.",
      "Integrated Twilio API for alerts.",
      "Used weather API for real-time updates.",
      "Implemented audio level detector for gunshot detection.",
      "Secured 2nd place out of 100 teams."
    ],
    image: "/images/Makethon.png",
    link: "https://github.com/krishsanghvi/MakeOhio2024",
  },
  {
    title: "HackOH/IO Hackathon",
    period: "October 2022",
    description: [
      "Developed safety app using Google API for location tracking.",
      "Identified nearest emergency blue light.",
      "Secured 2nd place out of 200 teams."
    ],
    image: "/images/Hackathon.png",
    link: "https://github.com/nickcheo/BlueLight_Real",
  },
  {
    title: "Fundamentals of Engineering Robot",
    period: "May 2022",
    description: [
      "Built/Coded a fully functioning robot using the Proteus, C++, and different Soldering techniques during a entire semester. ",
      "Robot was tasked to complete restaurant tasks on a course.",
    ],
    image: "/images/optimus.png",
    link: "/pdf/report.pdf",
  },
  {
    title: "Fundamentals of Engineering Game",
    period: "December 2021",
    description: [
      "Created a fully functional dinosaurus run game with a partner in C++",
      "(a parody of the offline dinosaur game, but with a twist).",
    ],
    image: "/images/game.png",
    link: "https://github.com/shahvraj26/dinosaurgame/blob/main/main.cpp",
  },
]

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-center">Current Work</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center">{currentWork.title}</h3>
              <p className="text-lg text-center text-gray-600">{currentWork.company}</p>
              <p className="text-sm italic text-center text-gray-500 mb-4">{currentWork.period}</p>
              <div className="flex justify-center mb-4">
              </div>
              <ul className="mt-4 list-disc list-inside text-xl text-gray-700 space-y-2">
                {currentWork.description.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="mt-1 text-primary-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <Button asChild variant="outline">
                  <Link href={currentWork.link || "#"} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      Learn More <ArrowRightIcon className="ml-2" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <h1 className="text-5xl font-bold mb-12 text-center">Past Work</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(index)}
              >
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-center text-2xl">{experience.title}</CardTitle>
                    <p className="text-center text-lg">{experience.company}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Image width={300} height={300} src={experience.image || ''} alt={experience.title} className={`w-full rounded-lg shadow-md ${(experience.image.includes('mindfullogo.png') || experience.image.includes('dustin.png')) ? 'w-1/2 h-auto' : ''}`} />
                    <div className="mt-4 flex justify-center">
                      <Button asChild variant="outline">
                        <Link href={experience.link || "#"} target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center">
                            Learn More <ArrowRightIcon className="ml-2" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                      transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
                      className="overflow-hidden"
                    >
                      {expandedIndex === index && (
                        <div className="mt-4 text-md">
                          <ul className="list-disc list-inside">
                            {experience.description.map((item, idx) => (
                              <li key={idx} className="mb-2">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h1 className="text-5xl font-bold mt-12 mb-12 text-center">Projects & Awards</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projectsAndAwards.map((project, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(index + workExperiences.length)}
              >
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-center text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Image width={300} height={300} src={project.image} alt={project.title} className={`w-full rounded-lg shadow-md ${
                        project.image.includes('ncl.png') || project.image.includes('gymapp.png') ? 'w-1/2 h-auto' : ''
                      }`} />
                    <div className="mt-4 flex justify-center">
                      <Button asChild variant="outline">
                        <Link href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center">
                            Learn More <ArrowRightIcon className="ml-2" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: expandedIndex === index + workExperiences.length ? 'auto' : 0, opacity: expandedIndex === index + workExperiences.length ? 1 : 0 }}
                      transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
                      className="overflow-hidden"
                    >
                      {expandedIndex === index + workExperiences.length && (
                        <div className="mt-4 text-md">
                          <ul className="list-disc list-inside">
                            {project.description.map((item, idx) => (
                              <li key={idx} className="mb-2">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
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