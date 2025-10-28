'use client'

import * as React from 'react'

interface CountdownTimerProps {
  targetDate: string // Format: '2025-11-22T18:00:00'
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white">
          {timeLeft.days}
        </div>
        <div className="text-sm md:text-base text-white/80">
          {timeLeft.days === 1 ? 'Día' : 'Días'}
        </div>
      </div>
      
      <div className="text-primary-cyan text-2xl font-bold">:</div>
      
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-white/80">
          {timeLeft.hours === 1 ? 'Hora' : 'Horas'}
        </div>
      </div>
      
      <div className="text-primary-cyan text-2xl font-bold">:</div>
      
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-white/80">
          {timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}
        </div>
      </div>
      
      <div className="text-primary-cyan text-2xl font-bold">:</div>
      
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-white/80">
          {timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}
        </div>
      </div>
    </div>
  )
}
