"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/skills", label: "Skills" },  
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 0, ease: "easeOut" }}
        className={`fixed top-5 left-0 right-0 mx-auto z-50 flex justify-center transition-all duration-500 ease-in-out ${
          isScrolled ? "w-[65%] shadow-md scale-95" : "w-[70%]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-background/80 backdrop-blur-lg rounded-full shadow-lg w-full max-w-3xl px-6"
        >
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              shahvraj26
            </Link>
            {/* Desktop Links */}
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
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {pathname === link.href && (
                    <motion.div
                      className="absolute -inset-x-4 -inset-y-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-full -z-10"
                      layoutId="bubble"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-8"
            >
              {NavLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`text-xl font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
