import fs from 'fs'
import path from 'path'

export interface EventContent {
  title: string
  description: string
  date: string
  location: string
  duration: string
  price: string
  context: string
  valueProposition: string[]
  differential: string
  attendees: string[]
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

export async function getEventContent(): Promise<EventContent> {
  // For now, return static data. In production, you would read from the markdown file
  const eventData: EventContent = {
    title: "Cali Business Hub 2025",
    description: "Es el punto de encuentro para los empresarios, inversionistas y directivos más influyentes del país.\n\nEs una experiencia selecta, donde cada asistente ha sido cuidadosamente elegido para garantizar conexiones de valor y oportunidades tangibles. \n\n Ademas, es un workshop de alto nivel diseñado para ofrecer herramientas prácticas, relaciones estratégicas y espacios exclusivos de conexión real",
    date: "29 de noviembre de 2025",
    location: "Zonamérica Cali",
    duration: "3 horas",
    price: "$500,000 + IVA (Dos cupos por empresa)",
    context: "Tu inversión se convierte en oportunidades reales de crecimiento, colaboración y expansión empresarial.",
    valueProposition: [
      "Conexión directa con empresarios, inversionistas y ejecutivos top",
      "Panel de casos de éxito con líderes que ya transformaron sus negocios a través del networking inteligente",
      "Workshop inspirador con herramientas prácticas de conexión humana y expansión empresarial",
      "Experiencias guiadas de networking estratégico, diseñadas para generar relaciones reales",
      "Obtén un directorio digital privado de asistentes (contactos verificados)",
      "Acceso al grupo de networking post-evento para seguir potenciando relaciones"
    ],
    differential: "Cali Business Hub ha sido diseñado con una metodología que asegura que cada participante salga con al menos tres conexiones estratégicas de alto valor.",
    attendees: [
      "CEOs, directivos y fundadores de empresas con visión de crecimiento",
      "Inversionistas y líderes con capital y propósito",
      "Ejecutivos con poder de decisión en busca de alianzas estratégicas",
      "Emprendedores consolidados que desean escalar sus negocios"
    ],
    academicBlock: {
      title: "Ventas B2B Digitales: Cómo generar, gestionar y convertir oportunidades reales",
      justification: "Las empresas B2B enfrentan una doble brecha: dificultad para generar leads cualificados y falta de estrategias efectivas para convertir esos leads en relaciones comerciales sostenibles.",
      sessions: [
        {
          speaker: "César",
          topic: "Cómo levantar leads B2B efectivos con herramientas digitales accesibles",
          duration: "1 hora",
          format: "Masterclass demostrativa + caso aplicado",
          profile: "Experto en marketing digital, automatización y prospección B2B",
          objective: "Capacitar a empresarios en el uso de herramientas digitales para identificar, atraer y calificar leads empresariales de alto potencial",
          content: [
            "Panorama actual del marketing B2B digital",
            "Herramientas para levantar leads (Google Advanced Search, Sales Navigator, Hunter.io, Apollo, Clay, Phantombuster, ZoomInfo)",
            "Construcción de base de datos inteligente y accionable",
            "Hack práctico: creación en vivo de un mini pipeline de leads reales"
          ],
          result: "Los asistentes obtendrán herramientas concretas para levantar y gestionar bases de leads calificados"
        },
        {
          speaker: "Carlos",
          topic: "Del lead al cliente: cómo convertir tu base de datos en ventas reales",
          duration: "1 hora",
          format: "Taller aplicado + storytelling empresarial",
          profile: "Director comercial/logístico con experiencia en procesos de conversión y fidelización B2B",
          objective: "Mostrar cómo transformar una base de leads en clientes de alto valor mediante estrategias de seguimiento, nutrición y automatización",
          content: [
            "De la data a la relación: viaje del lead B2B y rol del CRM",
            "Herramientas clave: HubSpot, Pipedrive, Close, Zoho CRM, Lemlist, Mailshake, Instantly",
            "Construcción de un pipeline comercial de alto rendimiento",
            "Hacks de conversión B2B (scripts, KPIs, retención, LTV)",
            "Caso práctico: mejora de la tasa de cierre del 18% al 42% mediante automatización"
          ],
          result: "Los asistentes comprenderán cómo escalar su proceso comercial B2B con estrategias automatizadas centradas en datos"
        }
      ]
    }
  }
  
  return eventData
}
