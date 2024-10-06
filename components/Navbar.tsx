"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Connect" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'w-[70%]' : 'w-[70%]'}`}>
        <div className="bg-background/20 backdrop-blur-lg rounded-full shadow-lg">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                shahvraj26
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                {NavLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-base font-bold transition-colors ${
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {pathname === link.href && (
                      <motion.div
                        className="absolute -inset-x-4 -inset-y-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-full -z-10"
                        layoutId="bubble"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium transition-colors ${
                  pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar