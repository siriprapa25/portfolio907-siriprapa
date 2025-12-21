/**
 * ChapterCard Component - Simple Version
 * Design: Warm Contemporary
 */

'use client';

import { ReactNode } from 'react';

interface ChapterCardProps {
  title: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'default' | 'highlight';
}

export default function ChapterCard({
  title,
  onClick,
  children,
  variant = 'default',
}: ChapterCardProps) {
  const variantClasses = {
    default: 'bg-card border-border hover:shadow-lg',
    highlight: 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:shadow-xl',
  };

  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl border p-6 transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        ${variantClasses[variant]}
      `}
    >
      <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
      <div className="text-foreground/80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}