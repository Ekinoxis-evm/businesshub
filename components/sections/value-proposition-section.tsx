'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Users, Network, Briefcase, Award, Users2, Globe } from 'lucide-react'
import Image from 'next/image'

interface ValuePropositionProps {
  valueProposition: string[]
  duration: string
}

export function ValuePropositionSection({ valueProposition, duration }: ValuePropositionProps) {
  const valueItems = [
    {
      text: "Conexión directa con empresarios, inversionistas y ejecutivos top",
      icon: Network,
      image: "/branding/Img/13630.jpg"
    },
    {
      text: "Experiencias guiadas de networking estratégico, diseñadas para generar relaciones reales",
      icon: Users,
      image: "/branding/Img/2115.jpg"
    },
    {
      text: "Workshop inspirador con herramientas prácticas de conexión humana y expansión empresarial",
      icon: Briefcase,
      image: "/branding/Img/empresario-que-usa-una-tableta-digital.jpg"
    },
    {
      text: "Panel de casos de éxito con líderes que ya transformaron sus negocios a través del networking inteligente",
      icon: Award,
      image: "/branding/Img/72349.jpg"
    },
    {
      text: "Cóctel premium de networking",
      icon: Users2,
      image: "/branding/Img/40965.jpg"
    },
    {
      text: "Obtén un directorio digital privado de asistentes (contactos verificados)",
      icon: Globe,
      image: "/branding/Img/137576.jpg"
    },
    {
      text: "Acceso al grupo de networking post-evento para seguir potenciando relaciones",
      icon: Network,
      image: "/branding/Img/una-imagen-borrosa-de-una-multitud-de-personas-con-muchas-lineas-que-las-conectan.jpg"
    }
  ]
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
        <source src="/videos/buildings.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="container-max relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            ¿Qué vivirás?
          </h2>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {valueItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-dark-border bg-dark-bg overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image 
                    src={item.image}
                    alt={item.text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-text-primary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-bold text-white/90">
            Un solo día, cinco horas y decenas de oportunidades para hacer crecer tu empresa.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
