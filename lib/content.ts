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
    title: "Es el punto de encuentro para los empresarios, inversionistas y directivos más influyentes de Colombia.",
    description: "Viviras una experiencia unica, donde cada asistente ha sido cuidadosamente elegido para garantizar conexiones de valor y oportunidades tangibles. \n\n Ademas, contenido de alto valor, con un workshop de alto nivel diseñado para ofrecer herramientas prácticas.",
    date: "6 de diciembre de 2025",
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
          speaker: "César Sánchez",
          topic: "Cierra leads como un experto: Estrategias reales de conversión B2B que sí generan ventas",
          duration: "1 hora",
          format: "Masterclass demostrativa + caso aplicado",
          profile: "Finalista de Shark Tank y cofundador de Shiipy, César llega por primera vez a Cali para compartir las estrategias con las que ha logrado facturar más de 10 millones de dólares en USA y LATAM.",
          objective: "Enseñar a los empresarios cómo estructurar un sistema de ventas digital capaz de convertir prospectos en clientes reales, utilizando CRM, automatización y estrategias avanzadas de cierre.",
          content: [
            "Cómo construir un pipeline comercial de alto rendimiento",
            "Claves para automatizar el seguimiento de leads sin perder el toque humano",
            "Cómo usar Google Ads y CRM para escalar cierres B2B"
          ],
          result: "Cada asistente saldrá con una estructura lista para implementar en su negocio: desde la gestión inteligente de leads hasta un proceso para hacer una automatización de cierre que convierta oportunidades en ventas reales."
        },
        {
          speaker: "Santiago Cruz",
          topic: "Generación de leads B2B de alto valor: De la captación a la calificación inteligente",
          duration: "1 hora",
          format: "Taller aplicado + storytelling empresarial",
          profile: "Con solo 24 años y más de $50 millones en ventas generadas, Santiago domina el arte de captar, nutrir y calificar leads B2B que realmente compran.",
          objective: "Mostrar cómo usar herramientas digitales y técnicas de prospección inteligente para atraer y filtrar leads de alto valor, optimizando tiempo, presupuesto y esfuerzo comercial.",
          content: [
            "Cómo diseñar campañas efectivas para atraer leads empresariales",
            "Estrategias de segmentación avanzada y calificación inteligente",
            "Guía práctica para construir un sistema de generación de leads automatizado",
            "Cómo integrar IA y herramientas digitales para potenciar resultados"
          ],
          result: "Los asistentes aprenderán a generar una base sólida de leads calificados, listos para convertirse en oportunidades comerciales reales y sostenibles"
        }
      ]
    }
  }
  
  return eventData
}
