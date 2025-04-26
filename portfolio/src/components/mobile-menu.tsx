"use client";

import type React from "react";

import { useState } from "react";
import { Code, Home, Mail, Menu, User, X, Zap } from "lucide-react";

import { Button } from "../components/ui/button";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="bg-card shadow-md rounded-md"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-64 bg-card p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 mt-2">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground md hover:bg-accent text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
