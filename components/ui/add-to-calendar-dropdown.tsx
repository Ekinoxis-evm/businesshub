'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './button';
import { Calendar, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format: 2025-12-06T14:00:00
  endDate: string;   // ISO format: 2025-12-06T21:00:00
  startDateUTC: string; // Format: 20251206T140000Z
  endDateUTC: string;   // Format: 20251206T210000Z
}

interface AddToCalendarDropdownProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
  event?: Partial<CalendarEvent>;
}

const defaultEvent: CalendarEvent = {
  title: 'CALI BUSINESS HUB 2025',
  description: 'Evento empresarial exclusivo para conectar emprendedores, inversionistas y ejecutivos de alto nivel.\n\nIncluye:\n• Workshop práctico de ventas B2B digitales\n• Networking estratégico guiado\n• Panel de casos de éxito\n• Directorio digital de participantes\n\nReserva tu cupo: https://app.formbricks.com/s/zpf40te3zab9jj1srpnrsxn8\n\nMás información: https://calibusinesshub.com',
  location: 'Zona América, Cali, Colombia',
  startDate: '2025-12-06T14:00:00',
  endDate: '2025-12-06T21:00:00',
  startDateUTC: '20251206T140000Z',
  endDateUTC: '20251206T210000Z',
};

export function AddToCalendarDropdown({ 
  variant = 'default', 
  size = 'default',
  className,
  event = {}
}: AddToCalendarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const eventData = { ...defaultEvent, ...event };

  // Calculate position for fixed dropdown
  useEffect(() => {
    if (isOpen && containerRef.current) {
      const updatePosition = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          // For fixed positioning, use viewport coordinates
          setPosition({
            top: rect.bottom + 8,
            left: rect.left,
          });
        }
      };
      
      // Initial position calculation with a small delay to ensure DOM is ready
      const timeoutId = setTimeout(updatePosition, 0);
      
      // Update on scroll and resize
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    } else {
      // Reset position when closed
      setPosition({ top: 0, left: 0 });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current && 
        dropdownRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      // Use setTimeout to avoid immediate closure
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Generate calendar URLs
  const generateGoogleCalendarUrl = () => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: eventData.title,
      dates: `${eventData.startDateUTC}/${eventData.endDateUTC}`,
      details: eventData.description,
      location: eventData.location,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const generateOutlookCalendarUrl = () => {
    const params = new URLSearchParams({
      subject: eventData.title,
      startdt: eventData.startDate,
      enddt: eventData.endDate,
      body: eventData.description,
      location: eventData.location,
    });
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  };

  const generateYahooCalendarUrl = () => {
    const params = new URLSearchParams({
      v: '60',
      view: 'd',
      type: '20',
      title: eventData.title,
      st: eventData.startDateUTC,
      dur: '07:00', // 7 hours duration
      desc: eventData.description,
      in_loc: eventData.location,
    });
    return `https://calendar.yahoo.com/?${params.toString()}`;
  };

  const generateAppleCalendarUrl = () => {
    // Apple Calendar uses a data URI with ICS content
    const icsContent = generateICSContent();
    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
  };

  const generateICSContent = () => {
    const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ekinoxis//Cali Business Hub//ES
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:calibusinesshub-2025@calibusinesshub.com
DTSTAMP:${now}
DTSTART:${eventData.startDateUTC}
DTEND:${eventData.endDateUTC}
SUMMARY:${eventData.title}
DESCRIPTION:${eventData.description.replace(/\n/g, '\\n')}
LOCATION:${eventData.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
  };

  const handleDownloadICS = () => {
    const icsContent = generateICSContent();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cali-business-hub-2025.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const calendarOptions = [
    {
      name: 'Google Calendar',
      icon: ExternalLink,
      action: () => {
        window.open(generateGoogleCalendarUrl(), '_blank', 'noopener,noreferrer');
        setIsOpen(false);
      },
    },
    {
      name: 'Apple Calendar',
      icon: Download,
      action: () => {
        const url = generateAppleCalendarUrl();
        window.location.href = url;
        setIsOpen(false);
      },
    },
    {
      name: 'Outlook',
      icon: ExternalLink,
      action: () => {
        window.open(generateOutlookCalendarUrl(), '_blank', 'noopener,noreferrer');
        setIsOpen(false);
      },
    },
    {
      name: 'Yahoo Calendar',
      icon: ExternalLink,
      action: () => {
        window.open(generateYahooCalendarUrl(), '_blank', 'noopener,noreferrer');
        setIsOpen(false);
      },
    },
    {
      name: 'Descargar archivo .ics',
      icon: Download,
      action: handleDownloadICS,
    },
  ];

  const dropdownContent = isOpen && typeof document !== 'undefined' ? (
    createPortal(
      <div 
        ref={dropdownRef}
        className="fixed z-[9999] w-56 rounded-md border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-1">
          {calendarOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  option.action();
                }}
                className="w-full flex items-center gap-3 rounded-sm px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-3 py-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Este evento es organizado por Meerkat
          </p>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <>
      <div className="relative inline-block" ref={containerRef}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          variant={variant}
          size={size}
          className={cn(className)}
        >
          <Calendar className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Guárdalo en tu calendario</span>
          <span className="sm:hidden">Guardar en calendario</span>
          <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </Button>
      </div>
      {dropdownContent}
    </>
  );
}

