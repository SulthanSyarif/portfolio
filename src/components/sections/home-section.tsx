/** @jsxImportSource react */
"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown, Instagram, MapPin, Cloud } from "lucide-react"
import Image from "next/image"

export function HomeSection() {
  const greetings = [
    { text: "Hello", language: "English" },
    { text: "Hola", language: "Spanish" },
    { text: "Bonjour", language: "French" },
    { text: "Привет", language: "Russian" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Halo", language: "Indonesian" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "안녕하세요", language: "Korean" },
    { text: "你好", language: "Chinese" },
    { text: "مرحبا", language: "Arabic" },
    { text: "नमस्ते", language: "Hindi" }
  ]

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [location, setLocation] = useState("Loading...")
  const [weather, setWeather] = useState<{
    temp: number
    description: string
    icon: string
  } | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length)
    }, 1000) 

    return () => clearInterval(interval)
  }, [greetings.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Get user's location and weather
    const fetchLocationAndWeather = async () => {
      try {
        // Get user's coordinates
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords
              
              // Fetch location name using reverse geocoding
              try {
                const geoResponse = await fetch(
                  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                )
                const geoData = await geoResponse.json()
                setLocation(geoData.city || geoData.locality || "Unknown")
              } catch (error) {
                console.error("Error fetching location:", error)
                setLocation("Unknown")
              }

              // Fetch weather data
              try {
                const weatherResponse = await fetch(
                  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
                )
                const weatherData = await weatherResponse.json()
                
                const weatherCode = weatherData.current.weather_code
                const weatherDescriptions: { [key: number]: string } = {
                  0: "Clear",
                  1: "Mainly Clear",
                  2: "Partly Cloudy",
                  3: "Overcast",
                  45: "Foggy",
                  48: "Foggy",
                  51: "Drizzle",
                  53: "Drizzle",
                  55: "Drizzle",
                  61: "Rain",
                  63: "Rain",
                  65: "Rain",
                  71: "Snow",
                  73: "Snow",
                  75: "Snow",
                  77: "Snow",
                  80: "Rain Showers",
                  81: "Rain Showers",
                  82: "Rain Showers",
                  85: "Snow Showers",
                  86: "Snow Showers",
                  95: "Thunderstorm",
                  96: "Thunderstorm",
                  99: "Thunderstorm"
                }

                setWeather({
                  temp: Math.round(weatherData.current.temperature_2m),
                  description: weatherDescriptions[weatherCode] || "Unknown",
                  icon: weatherCode <= 3 ? "☀️" : weatherCode >= 61 && weatherCode <= 65 ? "🌧️" : "☁️"
                })
              } catch (error) {
                console.error("Error fetching weather:", error)
              }
            },
            (error) => {
              console.error("Error getting location:", error)
              setLocation("London") // Default location
              // Set default weather for London
              setWeather({
                temp: 18,
                description: "Cloudy",
                icon: "☁️"
              })
            }
          )
        } else {
          setLocation("London") // Default location
          setWeather({
            temp: 18,
            description: "Cloudy",
            icon: "☁️"
          })
        }
      } catch (error) {
        console.error("Error in fetchLocationAndWeather:", error)
      }
    }

    fetchLocationAndWeather()
  }, [])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      
      {/* Location, Time, Weather Widget */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-16 left-4 right-4 sm:top-20 sm:left-auto sm:right-4 md:top-24 md:right-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-md border border-gray-200/50 dark:border-gray-700/50 z-10"
      >
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-1.5 sm:gap-2 md:gap-3 text-[10px] sm:text-xs">
          {/* Location */}
          <div className="flex items-center gap-1 sm:border-r border-gray-300 dark:border-gray-600 sm:pr-2">
            <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
              {location}
            </span>
          </div>
          
          {/* Time */}
          <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white sm:border-r border-gray-300 dark:border-gray-600 sm:pr-2 whitespace-nowrap">
            {formatTime(currentTime)}
          </div>
          
          {/* Weather */}
          {weather && (
            <div className="flex items-center gap-1">
              <Cloud className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {weather.temp}°C
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400 hidden xs:inline whitespace-nowrap">
                  {weather.description}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-lg text-muted-foreground mb-2 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentGreetingIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {greetings[currentGreetingIndex].text}
                  </motion.span>
                </AnimatePresence>
                <span>, I&apos;m</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sulthan Syarif
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">
                Full Stack Developer / Graphic Designer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about creating innovative web solutions and delivering 
                exceptional user experiences. I specialize in modern web technologies 
                and love bringing ideas to life through code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex space-x-4"
            >
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Instagram className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Image
                    src="/photoprofile.webp"
                    alt="Sulthan Syarif Profile Photo"
                    width={288}
                    height={288}
                    className="w-72 h-72 rounded-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}