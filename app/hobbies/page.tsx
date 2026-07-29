"use client"

import * as React from "react"
import { useState } from "react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import {
  ArrowRightIcon,
  ArrowUpRight,
  ChefHat,
  Film,
  Timer,
  Scissors,
  Music4,
  Palette,
  Instagram,
  Layers,
  Play,
} from "lucide-react"
import Footer from "@/components/Footer"
import Image from "next/image"

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const plates = [
  {
    title: "Asian Stir Fry",
    image: "/Portfolio/images/hobbies/plate1.jpg",
  },
  {
    title: "Crunchwrap Supreme",
    image: "/Portfolio/images/hobbies/plate2.jpg",
  },
  {
    title: "Fried Rice & Paneer Chilli",
    image: "/Portfolio/images/hobbies/plate3.jpg",
  },
]

const kitchenNotes = [
  {
    icon: Layers,
    stat: "Height",
    label: "build up, not out",
    detail: "Stacking gives a plate somewhere to look. Flat food photographs flat.",
  },
  {
    icon: Palette,
    stat: "Contrast",
    label: "sauce and garnish",
    detail: "The color usually comes last. A sauce or a garnish does more than another component.",
  },
  {
    icon: Instagram,
    stat: "@byvraj",
    label: "the food account",
    detail: "No 800-word backstory before the recipe. Just the dish.",
  },
]

const films = [
  {
    title: "Maya",
    role: "Co-editor",
    year: "2026",
    image: "/Portfolio/images/hobbies/maya.jpg",
    link: "",
  },
  {
    title: "Samsara",
    role: "Co-editor",
    year: "2026",
    image: "/Portfolio/images/hobbies/samsara.jpg",
    link: "https://www.youtube.com/watch?v=epJ0lUC7Gog",
  },
  {
    title: "Frat Boyz",
    role: "Co-editor",
    year: "2025",
    image: "/Portfolio/images/hobbies/fratboyz.jpg",
    link: "https://www.youtube.com/watch?v=GU8NI7-UA40",
  },
]

const editingStack = [
  { icon: Scissors, label: "Premiere Pro" },
  { icon: Palette, label: "Color grading" },
  { icon: Music4, label: "Sound design" },
  { icon: Timer, label: "Pacing" },
]

const TABS = [
  {
    id: "kitchen" as const,
    label: "Kitchen",
    icon: ChefHat,
    caption: "Cooking and plating",
  },
  {
    id: "film" as const,
    label: "Edit bay",
    icon: Film,
    caption: "Cutting for Vaathi Productions",
  },
]

type TabId = (typeof TABS)[number]["id"]

/* ------------------------------------------------------------------ */
/*  SECTION HEADER                                                     */
/* ------------------------------------------------------------------ */

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
      {hint && <p className="mt-3 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TAB SWITCHER                                                       */
/* ------------------------------------------------------------------ */

function TabSwitcher({
  tab,
  setTab,
}: {
  tab: TabId;
  setTab: (t: TabId) => void;
}) {
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Now showing
      </span>

      <div
        role="tablist"
        aria-label="Hobby sections"
        className="mt-3 inline-flex w-full max-w-sm rounded-full border border-border bg-card p-1 sm:w-auto"
      >
        {TABS.map((t) => {
          const Icon = t.icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(t.id)}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors duration-200 sm:flex-none sm:px-6 ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="hobby-tab-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="h-4 w-4 shrink-0" />
              {t.label}
              {isActive && (
                <span className="ml-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/70" />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="mt-4 px-2 text-center text-sm text-muted-foreground"
        >
          <span className="font-semibold text-foreground">{active.caption}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function HobbiesHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
        // off the clock
      </span>

      <h1 className="mt-3 text-[28px] leading-tight sm:text-4xl md:text-5xl font-bold tracking-tight">
        Stuff I make when I&apos;m{" "}
        <span className="relative inline-block">
          <span className="relative z-10">not writing code</span>
          <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-primary/25" />
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground">
        One ends up on a plate, the other ends up on a screen. Both come down to
        knowing what to cut.
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  PLATE CARD                                                         */
/* ------------------------------------------------------------------ */

function PlateCard({
  plate,
  index,
}: {
  plate: (typeof plates)[number];
  index: number;
}) {
  return (
    <CardContainer
      containerClassName="!py-0 h-full w-full"
      className="inter-var h-full w-full"
    >
      <div className="relative h-full w-full transition-transform duration-300 ease-out active:scale-[0.98] motion-reduce:transition-none">
        <CardBody className="group flex !h-full !w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-neutral-900">
          <CardItem translateZ="70" className="relative w-full">
            <div className="relative w-full overflow-hidden">
              <Image
                src={plate.image}
                alt={plate.title}
                width={700}
                height={900}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 340px"
                className="h-64 w-full object-cover sm:h-80 md:transition-transform md:duration-700 md:group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent" />

              <div className="absolute left-3 top-3 flex h-8 items-center rounded-full bg-primary px-2.5">
                <span className="font-mono text-[11px] font-bold text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {plate.title}
                </h3>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </div>
    </CardContainer>
  );
}

/* ------------------------------------------------------------------ */
/*  FILM CARD — poster shape, full artwork visible                     */
/* ------------------------------------------------------------------ */

function FilmCard({ film }: { film: (typeof films)[number] }) {
  return (
    <CardContainer
      containerClassName="!py-0 h-full w-full"
      className="inter-var h-full w-full"
    >
      <div className="relative h-full w-full transition-transform duration-300 ease-out active:scale-[0.98] motion-reduce:transition-none">
        <CardBody className="group flex !h-full !w-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-neutral-900">
          <CardItem translateZ="70" className="relative w-full">
            {/* fixed poster frame — object-contain so nothing gets cropped */}
            <div className="relative h-72 w-full overflow-hidden rounded-xl bg-neutral-950 sm:h-96">
              <Image
                src={film.image}
                alt={film.title}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
                className="object-contain md:transition-transform md:duration-500 md:group-hover:scale-[1.03]"
              />

              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1">
                <Play className="h-3 w-3 fill-current text-primary-foreground" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {film.role}
                </span>
              </div>

              {/* scrubber — fills on hover */}
              <div className="absolute inset-x-3 bottom-3">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/25">
                  <div className="h-full w-0 rounded-full bg-primary transition-all duration-[1200ms] ease-out group-hover:w-full motion-reduce:transition-none" />
                </div>
              </div>
            </div>
          </CardItem>

          {/* sprocket strip */}
          <div className="mt-3 flex items-center gap-1 overflow-hidden opacity-30">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="h-1.5 w-3 shrink-0 rounded-[1px] bg-muted-foreground/60"
              />
            ))}
          </div>

          <CardItem
            translateZ="40"
            className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-neutral-800 dark:text-white"
          >
            {film.title}
          </CardItem>
          <CardItem
            translateZ="30"
            className="mt-0.5 font-mono text-xs text-muted-foreground"
          >
            {film.year}
          </CardItem>

          <div className="mt-auto pt-4">
            {film.link ? (
              <Link
                href={film.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
              >
                Watch it <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Coming soon
              </span>
            )}
          </div>
        </CardBody>
      </div>
    </CardContainer>
  );
}

/* ------------------------------------------------------------------ */
/*  VAATHI BANNER                                                      */
/* ------------------------------------------------------------------ */

function VaathiBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-4xl"
    >
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-card shadow-lg dark:border-white/10">
        <div className="h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

        <div className="flex flex-col items-center gap-5 p-5 text-center sm:p-8 md:flex-row md:gap-8 md:text-left">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800">
            <Image
              src="/Portfolio/images/hobbies/vaathi.jpg"
              alt="Vaathi Productions"
              fill
              sizes="80px"
              className="object-contain p-2"
            />
          </div>

          <div className="flex-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
              the crew
            </span>
            <h3 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
              Vaathi Productions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A few of us making short films together. I co-edit, and I built the
              site too — so I get to argue about the cut and the CSS.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-1.5 md:justify-start">
              {editingStack.map((tool) => {
                const Icon = tool.icon;
                return (
                  <span
                    key={tool.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 font-mono text-[11px] text-muted-foreground dark:border-white/10"
                  >
                    <Icon className="h-3 w-3 text-primary" />
                    {tool.label}
                  </span>
                );
              })}
            </div>
          </div>

          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link
              href="https://vaathiproductions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HobbiesPage() {
  const [tab, setTab] = useState<TabId>("kitchen");

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-4 pt-24 sm:pt-28">
        <div className="mb-10">
          <HobbiesHero />
        </div>

        <div className="mb-12 sm:mb-16">
          <TabSwitcher tab={tab} setTab={setTab} />
        </div>

        <AnimatePresence mode="wait">
          {tab === "kitchen" ? (
            <motion.div
              key="kitchen"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <SectionHeader
                eyebrow="// the kitchen"
                title="Cooking & plating"
                hint="A few plates I was happy with"
              />

              <div className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
                {kitchenNotes.map((note) => {
                  const Icon = note.icon;
                  return (
                    <div
                      key={note.label}
                      className="group rounded-2xl border border-gray-200 bg-card p-5 text-center transition-colors duration-300 hover:border-primary/50 dark:border-white/10 sm:text-left"
                    >
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary sm:mx-0">
                        <Icon className="h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>
                      <p className="mt-3 text-lg font-bold tracking-tight text-primary">
                        {note.stat}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {note.label}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {note.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {plates.map((plate, index) => (
                  <PlateCard key={index} plate={plate} index={index} />
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button asChild variant="outline">
                  <Link
                    href="https://instagram.com/byvraj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      <Instagram className="mr-2 h-4 w-4" /> More on @byvraj
                    </span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="film"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <SectionHeader
                eyebrow="// the edit bay"
                title="Cutting for Vaathi"
                hint="Three shorts, cut in Premiere"
              />

              <div className="mb-10">
                <VaathiBanner />
              </div>

              <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {films.map((film, index) => (
                  <FilmCard key={index} film={film} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}