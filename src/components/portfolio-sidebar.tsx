"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Code, Home, Mail, User, Zap } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../components/ui/sidebar";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Code,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Zap,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export function PortfolioSidebar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { state } = useSidebar();

  useEffect(() => {
    const sections = navItems
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger active state earlier

      // Check for home section (top of page)
      if (scrollPosition < 300) {
        setActiveSection("");
        return;
      }

      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Sidebar collapsible="icon" className="hidden md:flex">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeSection === item.href.replace("#", "")}
                    tooltip={item.name}
                  >
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

export function SidebarToggle() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <SidebarTrigger className="bg-card shadow-md rounded-md" />
    </div>
  );
}
