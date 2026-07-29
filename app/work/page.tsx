"use client"

import * as React from "react"
import { useState } from "react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import {
  ArrowRightIcon,
  ChevronDown,
  ShoppingBag,
  Mic2,
  TrendingUp,
  Monitor,
  HeartPulse,
  Network,
  ShieldAlert,
  ShieldCheck,
  Waves,
  Dumbbell,
  Radar,
  MapPinned,
  Bot,
  Gamepad2,
  Award,
  type LucideIcon,
} from "lucide-react"
import Footer from "@/components/Footer"
import Image from "next/image"

const currentWork = {
  title: "Software Engineer II",
  company: "UST Global Inc.",
  period: "June 2025 – Present",
  status: "Currently building",
  description: [
    "Developing production diagnostic software for heavy-duty vehicles in Java, automating UDS and SAE J1939 communication across CAN-based networks.",
    "Architected core UDS services and a J1939 diagnostic framework for real-time fault isolation across multiple ECMs.",
  ],
  stack: ["Java", "JavaFX", "UDS", "SAE J1939"],
  image: "/Portfolio/images/currentwork.png",
  link: "https://www.ust.com/",
}

const workExperiences = [
  {
    title: "Frontend Engineer",
    company: "Hale",
    period: "March 2025 – June 2025",
    icon: ShoppingBag,
    description: [
      "Led front-end architecture for Hale's men's care e-commerce platform.",
      "Built a modular React/Next.js codebase with a shared component library.",
      "Integrated RESTful micro-service APIs.",
      "Surfaced a dynamic product-recommendation UI driven by a weighted-parameter algorithm.",
    ],
    image: "/Portfolio/images/hale.png",
    link: "https://www.thehale.co/",
  },
  {
    title: "Research Assistant",
    company: "Political Speech Lab",
    period: "August 2024 – May 2025",
    icon: Mic2,
    description: [
      "Built a computer-vision + NLP pipeline (Python, WhisperX, Llama-3) cutting debate-video processing from 78 to 13 minutes (6× faster).",
      "Auto-tagged speaker, topic, and sentiment.",
      "Designed a PostgreSQL schema cataloging 10K politicians and 1M timestamped clips.",
      "Built matplotlib dashboards; insights cited in three journal articles and two conference talks.",
    ],
    image: "/Portfolio/images/cranmerresearch.png",
    link: "https://tdai.osu.edu/people/cranmer.12",
  },
  {
    title: "Technical Co-Founder",
    company: "dustin",
    period: "June 2024 – December 2024",
    icon: TrendingUp,
    description: [
      "Developed AI-driven platform for e-commerce sellers.",
      "Integrated expense tracking and demand forecasting.",
      "Secured first paying customer.",
      "Used Plaid API, Next.js, LangChain, and Supabase.",
    ],
    image: "/Portfolio/images/dustin.png",
    link: "https://dustinhq.com/",
  },
  {
    title: "IT Support Technician",
    company: "Digital Union Classroom",
    period: "May 2024 – August 2024",
    icon: Monitor,
    description: [
      "Provided customer service and technical support.",
      "Assisted with instructional technology and AV systems.",
      "Performed daily maintenance and troubleshooting.",
    ],
    image: "/Portfolio/images/digital.png",
    link: "https://u.osu.edu/workatclassroomservices/",
  },
  {
    title: "Chief Technology Officer",
    company: "Mindful Diagnosis",
    period: "December 2022 – May 2024",
    icon: HeartPulse,
    description: [
      "Developed implicit bias assessment platform for physicians.",
      "Used NextJS, SQL, Mux, Tailwind, and Prisma.",
      "Secured $1500 in startup funding.",
    ],
    image: "/Portfolio/images/mindfullogo.png",
    link: "https://youtu.be/VWrgPNY8TFU?si=XkLadUAlyCOHYFQO",
  },
  {
    title: "Research Assistant",
    company: "Network-Based Computing Lab",
    period: "June 2022 – August 2022",
    icon: Network,
    description: [
      "Optimized NOWLAB website with HTML/CSS.",
      "Configured network protocols for lab hardware.",
    ],
    image: "/Portfolio/images/nowlab.png",
    link: "https://nowlab.cse.ohio-state.edu/",
  },
  {
    title: "Research Assistant",
    company: "Packet Wars",
    period: "June 2021 – August 2021",
    icon: ShieldAlert,
    description: [
      "Created a script to extract hidden images from search engines to check for incriminating data used by hackers or spies.",
    ],
    image: "/Portfolio/images/packetwars.png",
    link: "https://www.packetwars.com/",
  },
]

const projectsAndAwards = [
  {
    title: "National Cyber League",
    period: "October 2018 – Present",
    icon: ShieldCheck,
    description: [
      "Competed in the National Cyber League CTF.",
      "Skills: log analysis, binary exploitation, OSINT, cryptography.",
      "Earned a Platinum award (top 100 of 5,380 collegiate competitors nationwide).",
    ],
    image: "/Portfolio/images/ncl.png",
    link: "https://nationalcyberleague.org/competition",
  },
  {
    title: "Tartan Hacks Hackathon",
    period: "February 2025",
    icon: Waves,
    description: [
      "Built a first-responder disaster assessment platform.",
      "Used COLMAP photogrammetric 3D reconstruction with NVIDIA CUDA acceleration.",
      "Next.js front-end to identify structural vulnerabilities and locate survivors.",
      "Won 1st place in the Making Waves track.",
    ],
    image: "/Portfolio/images/tartanhacks.jpeg",
  },
  {
    title: "Gym Data Tracking App",
    period: "May 2024 – Present",
    icon: Dumbbell,
    description: [
      "Developed real-time gym tracking app for OSU gyms.",
      "Used React Native and Selenium.",
      "Submitted to Apple App Store.",
    ],
    image: "/Portfolio/images/gymapp.png",
    link: "https://github.com/shahvraj26/MyReactNative",
  },
  {
    title: "HackOH/IO Makeathon",
    period: "March 2024",
    icon: Radar,
    description: [
      "Developed advanced security suite with ML for facial recognition.",
      "Integrated Twilio API for alerts.",
      "Used weather API for real-time updates.",
      "Implemented audio level detector for gunshot detection.",
      "Secured 2nd place out of 100 teams.",
    ],
    image: "/Portfolio/images/Makethon.png",
    link: "https://github.com/krishsanghvi/MakeOhio2024",
  },
  {
    title: "HackOH/IO Hackathon",
    period: "October 2022",
    icon: MapPinned,
    description: [
      "Developed safety app using Google API for location tracking.",
      "Identified nearest emergency blue light.",
      "Secured 2nd place out of 200 teams.",
    ],
    image: "/Portfolio/images/Hackathon.png",
    link: "https://github.com/nickcheo/BlueLight_Real",
  },
  {
    title: "FEH Robot",
    period: "May 2022",
    icon: Bot,
    description: [
      "Built/coded a fully functioning robot using Proteus, C++, and various soldering techniques over an entire semester.",
      "Robot was tasked to complete restaurant tasks on a course.",
    ],
    image: "/Portfolio/images/optimus.png",
    link: "/pdf/report.pdf",
  },
  {
    title: "FEH Game",
    period: "December 2021",
    icon: Gamepad2,
    description: [
      "Created a fully functional dinosaur run game with a partner in C++.",
      "(a parody of the offline dinosaur game, but with a twist).",
    ],
    image: "/Portfolio/images/game.png",
    link: "https://github.com/shahvraj26/dinosaurgame/blob/main/main.cpp",
  },
  {
    title: "Java Foundations Certification",
    period: "Oracle 1Z0-811",
    icon: Award,
    description: [
      "Oracle-certified Java Foundations (1Z0-811).",
      "Covers core Java syntax, OOP concepts, data structures, and program flow.",
    ],
    image: "/Portfolio/images/java.png",
    link: "https://www.oracle.com/education/certification/",
  },
]

interface Experience {
  title: string;
  company?: string;
  period?: string;
  icon?: LucideIcon;
  description: string[];
  image: string;
  link?: string;
}

function SectionHeader({
  eyebrow,
  title,
  hint,
}: {
  eyebrow: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10 flex flex-col items-center text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <span className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
      {hint && (
        <p className="mt-3 text-sm italic text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}

const ThreeDCard: React.FC<{
  experience: Experience;
  index: number;
  expandedIndex: number | null;
  handleCardClick: (index: number) => void;
}> = ({ experience, index, expandedIndex, handleCardClick }) => {
  const isOpen = expandedIndex === index;
  const Icon = experience.icon;

  return (
    <CardContainer className="inter-var">
      <div
        onClick={() => handleCardClick(index)}
        className="relative cursor-pointer transition-transform duration-300 ease-out active:scale-[0.98] motion-reduce:transition-none"
      >
        <CardBody className="group h-auto w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:bg-neutral-900">
          <CardItem translateZ="80" className="relative w-full">
            <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800">
              <Image
                src={experience.image}
                alt={experience.title}
                height={140}
                width={260}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 350px"
                className="h-32 sm:h-36 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {Icon && (
              <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-white" strokeWidth={2} />
              </div>
            )}
          </CardItem>

          <CardItem
            translateZ="50"
            className="mt-4 text-base sm:text-lg font-bold tracking-tight text-neutral-800 dark:text-white md:text-xl"
          >
            {experience.title}
          </CardItem>

          {experience.company ? (
            <CardItem
              translateZ="40"
              className="mt-1 text-sm text-muted-foreground"
            >
              {experience.company}
              {experience.period ? ` · ${experience.period}` : ""}
            </CardItem>
          ) : experience.period ? (
            <CardItem
              translateZ="40"
              className="mt-1 font-mono text-xs text-muted-foreground"
            >
              {experience.period}
            </CardItem>
          ) : null}

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {experience.description.join(" ")}
            </p>
          </motion.div>

          <div className="mt-4 flex items-center justify-between">
            {experience.link ? (
              <Link
                href={experience.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all hover:gap-2"
              >
                Learn more <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <span />
            )}
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </CardBody>
      </div>
    </CardContainer>
  );
};

function CurrentWorkCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-4xl"
    >
      {/* ambient glow behind the card */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-card shadow-lg dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
          {/* left: image */}
          <div className="relative h-32 sm:h-40 md:h-64">
            <Image
              src={currentWork.image}
              alt={currentWork.company}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-gradient-to-r" />

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-white">
                {currentWork.status}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:hidden">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentWork.title}
              </h3>
              <p className="text-sm text-white/80">{currentWork.company}</p>
            </div>
          </div>

          {/* right: content */}
          <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6">
            <div>
              <div className="hidden md:block">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {currentWork.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {currentWork.company}
                </p>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground md:mt-2">
                {currentWork.period}
              </p>

              <ul className="mt-3 space-y-2">
                {currentWork.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentWork.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 px-3 py-1 font-mono text-[11px] text-muted-foreground dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href={currentWork.link} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center justify-center">
                    Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-4 pt-24 sm:pt-28">
        <div>
          {/* Current Work Section */}
          <div className="mb-12 sm:mb-16">
            <SectionHeader eyebrow="// now" title="Current Work" />
            <CurrentWorkCard />
          </div>

          {/* Past Work Section */}
          <div className="mb-12 sm:mb-16">
            <SectionHeader
              eyebrow="// experience"
              title="Past Work"
              hint="Tap a card to expand"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
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
          <div className="mb-12 sm:mb-16">
            <SectionHeader
              eyebrow="// projects"
              title="Projects & Awards"
              hint="Tap a card to expand"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}