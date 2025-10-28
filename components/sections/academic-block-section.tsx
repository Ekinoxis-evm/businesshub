'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Target, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface AcademicBlockProps {
  academicBlock: {
    title: string
    justification: string
    sessions: {
      speaker: string
      topic: string
      duration: string
      format: string
      profile: string
      objective: string
      content: string[]
      result: string
    }[]
  }
}

export function AcademicBlockSection({ academicBlock }: AcademicBlockProps) {
  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/magic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      <div className="container-max relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Aprende de Expertos en Ventas B2B Digitales
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-text-primary">
            {academicBlock.title}
          </h3>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {academicBlock.justification}
          </p>
        </motion.div>

        <div className="space-y-12">
          {academicBlock.sessions.map((session, index) => {
            const speakerImages = {
              'César': '/branding/Img/empresario-que-usa-una-tableta-digital.jpg',
              'Carlos': '/branding/Img/una-imagen-borrosa-de-una-multitud-de-personas-con-muchas-lineas-que-las-conectan.jpg'
            }
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-dark-border bg-dark-bg card-hover overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Speaker Image */}
                  <div className="lg:w-1/3 relative h-64 lg:h-auto">
                    <Image 
                      src={speakerImages[session.speaker as keyof typeof speakerImages] || '/branding/Img/137576.jpg'}
                      alt={session.speaker}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-primary-cyan">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Speaker Info */}
                  <div className="lg:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl gradient-text mb-2">
                        {session.speaker}
                      </CardTitle>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">
                        {session.topic}
                      </h4>
                      <p className="text-text-secondary">
                        {session.profile}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 p-0">
                      <div>
                        <h5 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary-cyan" />
                          Objetivo
                        </h5>
                        <p className="text-text-secondary leading-relaxed">
                          {session.objective}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary-cyan" />
                          Contenido
                        </h5>
                        <ul className="space-y-2">
                          {session.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-text-secondary">
                              <div className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-primary/10 border border-primary-cyan/20 rounded-lg p-4">
                        <h5 className="text-lg font-semibold text-text-primary mb-2">
                          Resultado Esperado
                        </h5>
                        <p className="text-text-secondary">
                          {session.result}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
