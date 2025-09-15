"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Code, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with Next.js, PostgreSQL, and Stripe integration.",
    image: "/api/placeholder/600/400",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    technologies: ["React", "Redux", "Node.js", "Socket.io", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    status: "Completed"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts, weather maps, and detailed analytics. Uses external weather APIs.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false,
    status: "Completed"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Backend API for social media analytics with data visualization, user management, and real-time metrics tracking.",
    image: "/api/placeholder/600/400",
    category: "Backend",
    technologies: ["Python", "FastAPI", "MongoDB", "Redis", "Docker"],
    liveUrl: null,
    githubUrl: "https://github.com/username/project",
    featured: false,
    status: "Completed"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode, smooth animations, and responsive design. Built with Next.js and Framer Motion.",
    image: "/api/placeholder/600/400",
    category: "Frontend",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    status: "In Progress"
  },
  {
    id: 6,
    title: "Machine Learning API",
    description: "RESTful API for image classification using TensorFlow. Includes model training pipeline and prediction endpoints.",
    image: "/api/placeholder/600/400",
    category: "Backend",
    technologies: ["Python", "TensorFlow", "Flask", "AWS", "Docker"],
    liveUrl: null,
    githubUrl: "https://github.com/username/project",
    featured: false,
    status: "Completed"
  }
]

const categories = ["All", "Full Stack", "Frontend", "Backend"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Featured Projects
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.liveUrl && (
                          <Button size="sm" variant="secondary">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        <Button size="sm" variant="secondary">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {project.category}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2 pt-4">
                        {project.liveUrl && (
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        {displayedProjects.filter(project => !project.featured).length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8"
            >
              Other Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="w-fit text-xs">
                          {project.category}
                        </Badge>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          {project.liveUrl && (
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                          )}
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* Show More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
            >
              Show More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}