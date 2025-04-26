"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Home, User, Code, Lightbulb, Mail, Moon, Sun } from "lucide-react";
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

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  // Use a ref for manual navigation flag to avoid re-renders
  const manualNavigationRef = useRef(false);
  // Store the last clicked section to ensure it's always correct
  const lastClickedSectionRef = useRef<string | null>(null);
  // Timer ref to clear any existing timeouts
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Set initial active section based on URL hash
  useEffect(() => {
    // Get the hash from the URL (without the #)
    const hash = window.location.hash.replace("#", "");

    // If there's a hash in the URL, set it as active
    if (hash) {
      setActiveSection(hash);
    } else {
      // Default to home if no hash
      setActiveSection("home");
    }

    setMounted(true);
  }, []);

  // Handle hash change events (browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll detection with debounce
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Skip scroll detection if we're in the middle of a manual navigation
      if (manualNavigationRef.current) return;

      // Clear any existing timeout to debounce the scroll events
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set a small timeout to avoid excessive calculations during rapid scrolling
      scrollTimeout = setTimeout(() => {
        // If we have a last clicked section and we're still in manual navigation mode, respect it
        if (lastClickedSectionRef.current && manualNavigationRef.current) {
          setActiveSection(lastClickedSectionRef.current);
          return;
        }

        // Get all sections
        const sections = navItems.map((item) => item.name);

        // Check which section is in view
        let currentSection = "";

        // Special case for home section
        if (window.scrollY < 100) {
          currentSection = "home";
        } else {
          // Check other sections
          for (const section of sections) {
            const element = document.getElementById(section);
            if (!element) continue;

            const rect = element.getBoundingClientRect();
            // Consider a section "in view" when its top is near the top of the viewport
            const offset = 150;

            if (rect.top <= offset && rect.bottom > offset) {
              currentSection = section;
              break;
            }
          }
        }

        // Only update if we found a section and it's different from current
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }, 50); // Small debounce for smoother updates
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial active section based on scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [activeSection]);

  const handleNavClick = (sectionName: string) => {
    // Clear any existing timeout
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Store the clicked section
    lastClickedSectionRef.current = sectionName;

    // Immediately update active section
    setActiveSection(sectionName);

    // Set manual navigation flag to prevent scroll detection from changing the active section
    manualNavigationRef.current = true;

    // Clear the manual navigation flag after a delay
    timerRef.current = setTimeout(() => {
      manualNavigationRef.current = false;
      // After the timeout, if we're still on the same section, keep it active
      if (lastClickedSectionRef.current === sectionName) {
        setActiveSection(sectionName);
      }
    }, 1500); // Increased to 1.5 seconds to ensure scroll animation completes
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[80px] bg-blue-600 flex flex-col items-center py-6">
      <div className="flex flex-col items-center justify-between h-full w-full">
        {/* Logo/Initials */}
        <div className="text-white font-bold text-2xl">JP</div>

        {/* Navigation - centered in the middle of the sidebar */}
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    // Set active section immediately
                    handleNavClick(item.name);
                  }}
                  className="block"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-lg transition-colors relative",
                      isActive
                        ? "bg-white text-blue-600"
                        : "text-white/80 hover:text-white hover:bg-blue-500/30"
                    )}
                  >
                    <item.icon className="h-5 w-5" />

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-white rounded-lg -z-10" />
                    )}
                  </div>
                </a>

                {/* Tooltip */}
                {hovered === item.name && (
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50">
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-white dark:border-r-gray-800 border-b-[6px] border-b-transparent" />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">
                      {item.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Theme Toggle - at the bottom */}
        <div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-12 h-12 rounded-lg text-white/80 hover:text-white hover:bg-blue-500/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
