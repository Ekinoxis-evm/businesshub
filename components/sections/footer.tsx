'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="container-max py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <Image 
              src="/branding/Logo PNG/Cali Business Hub_logo-negativo.png"
              alt="Cali Business Hub Logo"
              width={200}
              height={80}
              className="mb-6 opacity-80 mx-auto sm:mx-0"
            />
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">
              Cali Business Hub 2025
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              El punto de encuentro para empresarios, inversionistas y directivos que transforman el país.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-text-secondary">
              <MapPin className="w-4 h-4" />
              <span className="text-sm sm:text-base">Zonamérica Cali</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about" className="text-sm sm:text-base text-text-secondary hover:text-primary-cyan transition-colors">
                  Sobre el Evento
                </a>
              </li>
              <li>
                <a href="#registro" className="text-sm sm:text-base text-text-secondary hover:text-primary-cyan transition-colors">
                  Registro
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-text-secondary hover:text-primary-cyan transition-colors">
                  Ponentes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-text-secondary hover:text-primary-cyan transition-colors">
                  Agenda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center justify-center sm:justify-start gap-2 text-text-secondary">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@calibusinesshub.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-text-secondary">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">+57 (2) 123-4567</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-text-secondary">
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">www.calibusinesshub.com</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-dark-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-secondary text-sm">
            © 2025 Cali Business Hub. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-6">
              <a href="#" className="text-text-secondary hover:text-primary-cyan transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-text-secondary hover:text-primary-cyan transition-colors">
                Términos y Condiciones
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-secondary">Español</span>
              <span className="text-text-muted">|</span>
              <a href="#" className="text-text-secondary hover:text-primary-cyan transition-colors">
                English
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
