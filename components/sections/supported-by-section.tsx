'use client'

import { Card } from '@/components/ui/card'

export function SupportedBySection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/walkinstreets.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Light Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apoyado por
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Organizaciones líderes que respaldan el crecimiento empresarial en Cali
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">CCC</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cámara de Comercio de Cali
              </h3>
              <p className="text-gray-600">
                Promoviendo el desarrollo empresarial y comercial de la región
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">GV</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gobernación del Valle
              </h3>
              <p className="text-gray-600">
                Impulsando políticas públicas para el crecimiento económico
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">N</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nido
              </h3>
              <p className="text-gray-600">
                Fomentando la innovación y el emprendimiento tecnológico
              </p>
            </div>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            ¿Tu organización quiere ser parte de esta iniciativa?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Únete como Aliado
          </button>
        </div>
      </div>
    </section>
  )
}
