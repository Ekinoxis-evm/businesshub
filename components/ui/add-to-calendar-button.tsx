'use client';

import { Button } from './button';
import { Calendar } from 'lucide-react';

interface AddToCalendarButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
}

export function AddToCalendarButton({ 
  variant = 'default', 
  size = 'default',
  className 
}: AddToCalendarButtonProps) {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/schedule.ics';
    link.download = 'cali-business-hub-2025.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={className}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Add to Calendar
    </Button>
  );
}

