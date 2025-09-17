"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Inc.",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led a team of 5 developers on critical client projects",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected microservices infrastructure serving 100k+ users"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Austin, TX",
    period: "Jun 2021 - Dec 2022",
    type: "Full-time",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Integrated third-party APIs and payment systems",
      "Reduced bug reports by 50% through comprehensive testing",
      "Mentored 3 junior developers and interns"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Tailwind CSS", "Jest"]
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "Mar 2024 - Present",
    type: "Contract",
    description: "Focused on creating intuitive user interfaces and implementing responsive designs. Worked closely with UX designers to bring mockups to life.",
    achievements: [
      "Redesigned company website increasing conversion by 25%",
      "Implemented responsive design system used across products",
      "Optimized web performance achieving 95+ Lighthouse scores",
      "Collaborated with 10+ cross-functional team members"
    ],
    technologies: ["React", "Sass", "JavaScript", "Figma", "Git"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Indoweb ID",
    location: "Kediri, Indonesia",
    period: "Dec 2023 - Mar 2024",
    type: "Internship",
    description: "Worked on various web development projects, gaining hands-on experience with front-end and back-end technologies. Assisted in debugging and optimizing existing applications.",
    achievements: [
      "Developed own websites local businesses",
      "Scraping data from websites",
      "Finding clients for the company",
      "Contributed to open-source projects in spare time"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP","Figma","Laravel"]
  }
]

export function CareerSection() {
  return (
    <section id="career" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional experience and growth in the world of software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant={experience.type === "Full-time" ? "default" : "secondary"}>
                            {experience.type}
                          </Badge>
                          <Badge variant="outline">{experience.period}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mt-2 space-x-4">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            <span className="text-sm">{experience.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready for New Challenges</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I&apos;m always excited to take on new challenges and work with amazing teams 
                to build products that make a difference. Let&apos;s discuss how I can 
                contribute to your next project.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}