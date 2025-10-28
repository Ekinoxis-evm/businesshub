'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from '@/components/ui/countdown-timer'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  date: string
  location: string
  eventDateTime: string // Format: '2025-11-22T18:00:00'
}

export function HeroSection({ title, description, date, location, eventDateTime }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/heromove.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container-max text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Image 
              src="/branding/Logo PNG/Cali Business Hub_logo-positivo.png"
              alt="Cali Business Hub Logo"
              width={300}
              height={120}
              className="mx-auto filter drop-shadow-lg"
              priority
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{location}</span>
            </div>
          </motion.div>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                ¡Faltan solo!
              </h3>
            </div>
            <CountdownTimer targetDate={eventDateTime} />
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <Button 
              size="xl" 
              className="group bg-white text-primary-purple hover:bg-white/90 hover:scale-105 transition-all duration-300"
              onClick={() => {
                // Scroll to registration section
                document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Asegura tu cupo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
