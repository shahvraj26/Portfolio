"use client"

import * as React from "react"
import { useState } from "react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import { ArrowRightIcon, Maximize2 } from "lucide-react"
import Footer from "@/components/Footer"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const currentWork = {
  title: "Research Assistant",
  company: "Political Speech Lab",
  period: "August 2024 – Present",
  description: [
    "Developed scalable data pipeline using Computer Vision and NLP.",
    "Automated data extraction with Python, WhisperX, and Llama-3.",
    "Reduced debate processing time to 13 minutes.",
    "Created data visualizations with matplotlib."
  ],
  image: "/Portfolio//images/current_work.jpg",
  link: "https://skyler-cranmer.net/research-2"
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
    image: "/Portfolio//images/dustin.png",
    link: "https://dustinhq.com/",
  },
  {
    title: "IT Support Technician",
    company: "Digital Union Classroom",
    period: "May 2024 – August 2024",
    description: [
      "Provided customer service and technical support.",
      "Assisted with instructional technology and AV systems.",
      "Performed daily maintenance and troubleshooting."
    ],
    image: "/Portfolio//images/digital.png",
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
    image: "/Portfolio//images/mindfullogo.png",
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
    image: "/Portfolio//images/nowlab.png",
    link: "https://nowlab.cse.ohio-state.edu/",
  },
  {
    title: "Research Assistant",
    company: "Packet Wars",
    period: "June 2021 – August 2021",
    description: [
      "Created a script to extract hidden images from search engines to see if there is any incriminating data used by hackers or spies.",
    ],
    image: "/Portfolio//images/packetwars.png",
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
    image: "/Portfolio//images/ncl.png",
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
    image: "/Portfolio//images/gymapp.png",
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
    image: "/Portfolio//images/Makethon.png",
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
    image: "/Portfolio//images/Hackathon.png",
    link: "https://github.com/nickcheo/BlueLight_Real",
  },
  {
    title: "FEH Robot",
    period: "May 2022",
    description: [
      "Built/Coded a fully functioning robot using the Proteus, C++, and different Soldering techniques during a entire semester. ",
      "Robot was tasked to complete restaurant tasks on a course.",
    ],
    image: "/Portfolio//images/optimus.png",
    link: "/Portfolio//pdf/report.pdf",
  },
  {
    title: "FEH Game",
    period: "December 2021",
    description: [
      "Created a fully functional dinosaurus run game with a partner in C++",
      "(a parody of the offline dinosaur game, but with a twist).",
    ],
    image: "/Portfolio//images/game.png",
    link: "https://github.com/shahvraj26/dinosaurgame/blob/main/main.cpp",
  },
]
interface Experience {
  title: string;
  company?: string; // Optional for projects
  period?: string; // Optional for projects
  description: string[];
  image: string;
  link?: string;
}

const ThreeDCard: React.FC<{
  experience: Experience;
  index: number;
  expandedIndex: number | null;
  handleCardClick: (index: number) => void;
}> = ({ experience, index, expandedIndex, handleCardClick }) => (
  <CardContainer className="inter-var">
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="relative p-0.5"
      onClick={() => handleCardClick(index)}
    >
      <CardBody className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/[0.2] h-auto rounded-xl p-4 sm:p-5 shadow-lg transition-all">
        <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white mb-2 sm:mb-3">
          {experience.title}
        </CardItem>
        {experience.company && (
          <CardItem translateZ="40" className="text-gray-500 text-sm dark:text-gray-300 mb-2 sm:mb-3">
            {experience.company} | {experience.period}
          </CardItem>
        )}
        <CardItem translateZ="80" className="w-full mt-3">
          <Image
            src={experience.image}
            alt={experience.title}
            height={200}
            width={350}
            className="h-40 w-full object-cover rounded-xl shadow-md"
          />
        </CardItem>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
          transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
          className="overflow-hidden w-full mt-2 sm:mt-4"
        >
          {expandedIndex === index && (
            <div className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 italic">
              {experience.description.join(" ")}
            </div>
          )}
        </motion.div>
        <div className="mt-4 sm:mt-5 flex justify-between">
          {experience.link && (
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition hover:scale-105"
            >
              <Link href={experience.link} target="_blank">
                Learn More →
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </motion.div>
  </CardContainer>
);

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-4 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Current Work Section */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Current Work</h1>

            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                {currentWork.title}
              </h3>
              <p className="text-lg text-center text-gray-600 dark:text-gray-400">{currentWork.company}</p>
              <p className="text-sm italic text-center text-gray-500 dark:text-gray-400 mb-4">
                {currentWork.period}
              </p>

              <ul className="mt-4 list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
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

              <div className="mt-6 flex justify-center">
                <Button asChild variant="outline">
                  <Link href={currentWork.link || "#"} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                      Learn More <ArrowRightIcon className="ml-2" />
                    </span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>


          {/* Past Work Section */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">Past Work</h1>
            <h2 className="text-sm mb-4 text-center text-muted-foreground italic">
              Click on the cards to see more information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {workExperiences.map((experience, index) => (
                <ThreeDCard 
                  key={index} 
                  experience={experience} 
                  index={index} 
                  expandedIndex={expandedIndex} 
                  handleCardClick={handleCardClick} 
                />
              ))}
            </div>
          </div>

          {/* Projects & Awards Section */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-center">Projects & Awards</h1>
            <h2 className="text-sm mb-4 text-center text-muted-foreground italic">
              Click on the cards to see more information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {projectsAndAwards.map((project, index) => (
                <ThreeDCard 
                  key={index} 
                  experience={project} 
                  index={index + workExperiences.length} 
                  expandedIndex={expandedIndex} 
                  handleCardClick={handleCardClick} 
                />
              ))}
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
