/**
 * Utility functions for generating calendar events and URLs
 */

export interface CalendarEventData {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  timezone?: string;
}

/**
 * Convert a Date to iCalendar format (YYYYMMDDTHHMMSSZ)
 */
export function formatDateToICS(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

/**
 * Convert a Date to ISO format (YYYY-MM-DDTHH:mm:ss)
 */
export function formatDateToISO(date: Date): string {
  return date.toISOString().split('.')[0];
}

/**
 * Generate Google Calendar URL
 */
export function generateGoogleCalendarUrl(event: CalendarEventData): string {
  const startDate = formatDateToICS(event.startDate);
  const endDate = formatDateToICS(event.endDate);
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDate}/${endDate}`,
    details: event.description,
    location: event.location,
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate Outlook Calendar URL
 */
export function generateOutlookCalendarUrl(event: CalendarEventData): string {
  const startDate = formatDateToISO(event.startDate);
  const endDate = formatDateToISO(event.endDate);
  
  const params = new URLSearchParams({
    subject: event.title,
    startdt: startDate,
    enddt: endDate,
    body: event.description,
    location: event.location,
  });
  
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

/**
 * Generate Yahoo Calendar URL
 */
export function generateYahooCalendarUrl(event: CalendarEventData): string {
  const startDate = formatDateToICS(event.startDate);
  const duration = calculateDuration(event.startDate, event.endDate);
  
  const params = new URLSearchParams({
    v: '60',
    view: 'd',
    type: '20',
    title: event.title,
    st: startDate,
    dur: duration,
    desc: event.description,
    in_loc: event.location,
  });
  
  return `https://calendar.yahoo.com/?${params.toString()}`;
}

/**
 * Calculate duration in HH:MM format
 */
function calculateDuration(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}`;
}

/**
 * Generate ICS file content
 */
export function generateICSContent(event: CalendarEventData): string {
  const now = formatDateToICS(new Date());
  const startDate = formatDateToICS(event.startDate);
  const endDate = formatDateToICS(event.endDate);
  
  // Escape description for ICS format
  const description = event.description
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ekinoxis//Cali Business Hub//ES
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:calibusinesshub-${Date.now()}@calibusinesshub.com
DTSTAMP:${now}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title}
DESCRIPTION:${description}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
}

/**
 * Download ICS file
 */
export function downloadICSFile(event: CalendarEventData, filename: string = 'event.ics'): void {
  const icsContent = generateICSContent(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Create calendar event data for Cali Business Hub 2025
 */
export function createCaliBusinessHubEvent(): CalendarEventData {
  // December 6, 2025, 2:00 PM - 9:00 PM (Colombia time, UTC-5)
  // Convert to UTC: 7:00 PM - 2:00 AM next day
  const startDate = new Date('2025-12-06T19:00:00Z'); // 2:00 PM Colombia = 7:00 PM UTC
  const endDate = new Date('2025-12-07T02:00:00Z');   // 9:00 PM Colombia = 2:00 AM next day UTC
  
  return {
    title: 'CALI BUSINESS HUB 2025',
    description: 'Tu registro ha sido confirmado.\n\nEvento empresarial para conectar emprendedores e inversionistas.\n\nMás info en https://calibusinesshub.com',
    location: 'Zona América, Cali, Colombia',
    startDate,
    endDate,
    timezone: 'America/Bogota',
  };
}

