"use client";

import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Lightbulb,
  Mail,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  {
    name: "home",
    href: "#home",
    icon: Home,
    label: "Home",
  },
  {
    name: "about",
    href: "#about",
    icon: User,
    label: "Education & Experience",
  },
  {
    name: "projects",
    href: "#projects",
    icon: Code,
    label: "Projects",
  },
  {
    name: "skills",
    href: "#skills",
    icon: Lightbulb,
    label: "Skills",
  },
  {
    name: "contact",
    href: "#contact",
    icon: Mail,
    label: "Contact",
  },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show full navigation bar after scrolling
      setIsScrolled(scrollY > 100);

      // Determine active section
      const sections = navItems.map((item) => item.name);
      let currentSection = "home";

      if (scrollY < 100) {
        currentSection = "home";
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const offset = 150;

          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentItem = navItems.find((item) => item.name === activeSection);

  return (
    <>
      {/* Mobile Menu Button - Always visible on mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          "fixed top-4 right-4 z-40 md:hidden p-2 transition-all duration-300",
          isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white",
        )}
      >
        <Menu className="h-6 w-6" />
      </motion.button>

      {/* Sticky Section Indicator - Notion Style */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Current Section Breadcrumb */}
                <div className="flex items-center gap-3">
                  {currentItem && (
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <currentItem.icon className="h-4 w-4 text-blue-600" />
                      <span className="hidden sm:inline">
                        {currentItem.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.name;
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-xs lg:text-sm">{item.label}</span>
                      </a>
                    );
                  })}

                  {/* Theme Toggle */}
                  {mounted && (
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </nav>

                {/* Spacer for mobile menu button */}
                <div className="w-14 md:hidden" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-end mb-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    ✕
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.name;
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* Theme Toggle for Mobile */}
                {mounted && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-5 w-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-5 w-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
