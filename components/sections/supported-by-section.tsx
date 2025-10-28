'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function SupportedBySection() {
  const partners = [
    {
      name: 'Cámara de Comercio de Cali',
      logo: '/aliados/ccc.png',
      alt: 'Cámara de Comercio de Cali'
    },
    {
      name: 'Gobernación del Valle del Cauca',
      logo: '/aliados/gobernacionvalle.png',
      alt: 'Gobernación del Valle del Cauca'
    }
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/branding/public/videos/walkinstreets.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Light Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 z-10" />
      
      <div className="container-max relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apoyan
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
