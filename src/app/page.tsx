"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

import { Button } from "../components/ui/button";
import { Sidebar } from "../components/sidebar";

export default function Portfolio() {
  const heroRef = useRef(null);
  const educationExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-[80px]">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="home"
          className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-blue-300/10 blur-3xl" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/20 blur-3xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 relative z-10">
                <img
                  src="/profile.png?height=320&width=320"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500 blur-md -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
                HI THERE! I'M
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-blue-600">JEREMY</span> POH
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A Software/Data/Analytics Engineer passionate about creating
                interactive applications and data-driven solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Resume
                </Button>

                <div className="flex items-center gap-4 ml-4">
                  <motion.a
                    href="https://www.linkedin.com/in/jeremy-p-1833291ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="bg-white p-2 rounded-full shadow-md"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/wxp02"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="bg-white p-2 rounded-full shadow-md"
                  >
                    <Github className="h-5 w-5 text-blue-600" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </motion.div>
        </section>

        {/* Education and Experience Section */}
        <section
          ref={educationExperienceRef}
          id="about"
          className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
                Education & Experience
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl">
                My professional journey in software/data/analytics engineering.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Education Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-600">
                    Education
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">
                        M.S. Computer Science
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/placeholder.svg?height=24&width=24"
                            alt="Stanford University Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>Stanford University</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>2017 - 2019</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Specialized in Machine Learning and Data Systems. Thesis
                        on "Optimizing Neural Networks for Edge Computing
                        Devices."
                      </p>
                    </div>
                  </div> */}

                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">
                        Bachelor of Mathematics
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/uwaterloo.png?height=24&width=24"
                            alt="UC Berkeley Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>University of Waterloo</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>2021 - 2025</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Major: Mathematics | Minors: Computing, Economics
                      </p>
                    </div>
                  </div>

                  {/* <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">
                        Professional Certifications
                      </h4>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        AWS Certified Solutions Architect (2022)
                        <br />
                        Google Professional Data Engineer (2021)
                        <br />
                        TensorFlow Developer Certificate (2020)
                      </p>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Experience Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-600">
                    Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">Analytics Engineer</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/thescore.png?height=24&width=24"
                            alt="TechCorp Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>theScore</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 2025 - Apr 2025</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Part of the Data Insights and Analytics (DIA) team
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">Data Engineer</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/quadreal.jpg?height=24&width=24"
                            alt="DataSolutions Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>QuadReal Property Group</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>Sep 2024 - Dec 2024</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Architected a POC spatial-temporal Kepler.gl model
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">
                        Undergraduate Research Software Engineer
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/uwaterloo.png?height=24&width=24"
                            alt="Google Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>University of Waterloo</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>May 2024 - Aug 2024</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Created features for Perses, supervised by Prof.
                        Chengnian Sun
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">Analytics Engineer</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/super.png?height=24&width=24"
                            alt="Google Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>Super.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>Sep 2023 - Dec 2023</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Refined dbt models and built/maintained Airflow
                        pipelines
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-blue-600">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <h4 className="font-bold text-lg">
                        Software Engineer / Data Science Developer
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src="/cibc.png?height=24&width=24"
                            alt="Google Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span>Canadian Imperial Bank of Commerce (CIBC)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>May 2022 - Dec 2022</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Built financial models and tools to optimize workflow
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          id="projects"
          className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
                Featured Projects
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                A selection of my recent work across software development and
                data engineering.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          id="skills"
          className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
                Skills & Technologies
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600"></span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center group"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <skill.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          id="contact"
          className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
                Get In Touch
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600"></span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your message"
                  />
                </div>
                <div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 md:px-16 lg:px-24 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Jeremy Poh. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/jeremy-p-1833291ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/wxp02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Live Demo
          </a>
          <span className="text-gray-300">|</span>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Sample data
const projects = [
  {
    title: "Data Analytics Platform",
    description:
      "A full-stack analytics platform with interactive dashboards and data visualization.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Machine Learning API",
    description:
      "A REST API for machine learning model predictions with scalable infrastructure.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "FastAPI", "TensorFlow", "Docker"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with dark mode and animations.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "ETL Data Pipeline",
    description:
      "An automated ETL pipeline for processing and analyzing large datasets.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "Apache Airflow", "AWS", "Spark"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "A real-time dashboard for monitoring system metrics and user behavior.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "NLP Text Analysis Tool",
    description:
      "A tool for analyzing and extracting insights from unstructured text data.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Python", "NLTK", "spaCy", "Flask"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

import {
  BarChart3,
  Brain,
  Database,
  FileCode,
  Globe,
  Layout,
  LineChart,
  Server,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "Python", icon: FileCode },
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: Layout },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Machine Learning", icon: Brain },
  { name: "SQL", icon: Database },
  { name: "NoSQL", icon: Database },
  { name: "AWS", icon: Server },
  { name: "Docker", icon: Server },
  { name: "Data Visualization", icon: LineChart },
  { name: "API Development", icon: Globe },
  { name: "Git", icon: Terminal },
];
