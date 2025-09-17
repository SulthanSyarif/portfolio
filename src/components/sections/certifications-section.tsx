"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, Star } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    status: "Valid until 2026",
    description: "Comprehensive certification covering AWS cloud architecture, security, and best practices.",
    credentialId: "AWS-SAA-12345",
    verificationUrl: "https://aws.amazon.com/verification",
    featured: true,
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
  },
  {
    id: 2,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    status: "Valid until 2025",
    description: "Professional-level certification for designing and building applications on Google Cloud Platform.",
    credentialId: "GCP-PCD-67890",
    verificationUrl: "https://cloud.google.com/certification",
    featured: true,
    skills: ["GCP Services", "Application Development", "DevOps", "Monitoring"]
  },
  {
    id: 3,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "2022",
    status: "Completed",
    description: "Comprehensive program covering modern front-end development with React and industry best practices.",
    credentialId: "META-FED-54321",
    verificationUrl: "https://coursera.org/verify",
    featured: false,
    skills: ["React", "JavaScript", "CSS", "UI/UX", "Testing"]
  },
  {
    id: 4,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    status: "Completed",
    description: "Certification demonstrating proficiency in MongoDB database design and development.",
    credentialId: "MONGO-DEV-98765",
    verificationUrl: "https://university.mongodb.com/verify",
    featured: false,
    skills: ["MongoDB", "Database Design", "Aggregation", "Performance"]
  },
  {
    id: 5,
    title: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    status: "Valid until 2026",
    description: "Hands-on certification for developing and deploying applications in Kubernetes environments.",
    credentialId: "CKAD-13579",
    verificationUrl: "https://cncf.io/certification/verify",
    featured: true,
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Microservices"]
  }
]

const achievements = [
  {
    title: "Top Contributor",
    organization: "Open Source Project XYZ",
    year: "2023",
    description: "Recognized as one of the top 10 contributors for the year with 50+ merged PRs.",
    icon: Trophy
  },
  {
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    year: "2022",
    description: "First place winner for innovative web application solving climate change challenges.",
    icon: Award
  },
  {
    title: "Community Speaker",
    organization: "Local Developer Meetup",
    year: "2023",
    description: "Regular speaker at local tech meetups with 5+ presentations on React and Node.js.",
    icon: Star
  },
  {
    title: "Mentor of the Year",
    organization: "Code Academy",
    year: "2022",
    description: "Mentored 20+ junior developers with 95% success rate in landing their first tech jobs.",
    icon: CheckCircle
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Professional Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
                  cert.featured ? "ring-2 ring-blue-500/20" : ""
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          {cert.featured && (
                            <Badge className="mb-1 bg-gradient-to-r from-blue-500 to-purple-500">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">{cert.issuer}</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Badge 
                      variant={cert.status.includes("Valid") ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {cert.status}
                    </Badge>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium">Skills Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{achievement.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {achievement.year}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            {achievement.organization}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-none">
            <CardContent className="p-8">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                I believe in staying current with industry trends and continuously improving my skills. 
                Currently working towards additional certifications in machine learning and advanced cloud architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">In Progress: ML Engineer Certification</Badge>
                <Badge variant="outline">Planning: Terraform Associate</Badge>
                <Badge variant="outline">Planning: React Native Specialist</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}