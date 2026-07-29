"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundCode } from "@/components/background-lines";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <BackgroundCode className="min-h-screen flex flex-col bg-white text-black" svgOptions={{ duration: 10 }}>
      <Navbar />
      <main className="flex-grow container mx-auto px-6 md:px-12 py-12 pt-28 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        
        {/* Left Side: Image */}
        <motion.div
          className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="images/me2.png"
            alt="Vraj Shah"
            width={260}
            height={260}
            className="rounded-full shadow-2xl border-4 border-gray-300"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight drop-shadow-lg tracking-tight">
            Hey, I'm <span>Vraj</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
          <motion.p
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            I am a software engineer passionate about crafting <span className="text-primary font-semibold">modern, intuitive digital experiences. </span> 
            When I am not coding, you will find me <span className="italic">cooking, editing, playing on the piano, or hanging out with friends. </span> 
            Let us connect—drop a message, explore my work, or browse through my projects.
          </motion.p>
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild className="px-6 py-3 text-lg font-semibold rounded-full shadow-md">
              <Link href="/work">My Work</Link>
            </Button>
            <Button asChild variant="secondary" className="px-6 py-3 text-lg font-semibold rounded-full shadow-md">
              <Link href="/contact">Connect</Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-3 text-lg font-semibold rounded-full shadow-md">
              <Link href="/skills">Skills</Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/shahvraj26" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-7 w-7 text-gray-800 hover:text-blue-600 transition-colors" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://www.linkedin.com/in/shahvraj26/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-7 w-7 text-blue-600 hover:text-gray-800 transition-colors" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="mailto:shahvraj26@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailIcon className="h-7 w-7 text-red-500 hover:text-gray-800 transition-colors" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </BackgroundCode>
  );
}
