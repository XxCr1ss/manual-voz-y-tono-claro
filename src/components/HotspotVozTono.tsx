import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';
import { HotspotVozTono as HotspotType } from '@/types/vozTono.types';
import { cn } from '@/lib/utils';

interface HotspotVozTonoProps {
  hotspot: HotspotType;
  isActive: boolean;
  onClick: (hotspot: HotspotType) => void;
}

export function HotspotVozTono({ hotspot, isActive, onClick }: HotspotVozTonoProps) {
  const { x, y, width, height, estado = 'correcto' } = hotspot;

  // Determine styling based on status
  const config = {
    correcto: {
      color: 'bg-emerald-500',
      borderColor: 'border-emerald-400',
      glowColor: 'bg-emerald-400',
      icon: <Check className="w-2.5 h-2.5 text-zinc-950 stroke-[3]" />,
      ringColor: 'ring-emerald-500/30',
    },
    incorrecto: {
      color: 'bg-red-500',
      borderColor: 'border-red-400',
      glowColor: 'bg-red-400',
      icon: <X className="w-2.5 h-2.5 text-white stroke-[3]" />,
      ringColor: 'ring-red-500/30',
    },
    advertencia: {
      color: 'bg-amber-500',
      borderColor: 'border-amber-400',
      glowColor: 'bg-amber-400',
      icon: <AlertCircle className="w-2.5 h-2.5 text-zinc-950 stroke-[3]" />,
      ringColor: 'ring-amber-500/30',
    },
  }[estado];

  return (
    <div
      className="absolute flex items-center justify-center cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
      onClick={(e) => {
        e.stopPropagation(); // Avoid triggering any container click
        onClick(hotspot);
      }}
    >
      {/* Click target helper box (visible on hover to show hot area) */}
      <div className="absolute inset-0 rounded-lg border border-dashed border-white/0 group-hover:border-white/10 group-hover:bg-white/3 transition-all duration-200" />

      {/* Visual Indicator Dot */}
      <motion.div
        className={cn(
          "relative w-6 h-6 rounded-full border flex items-center justify-center shadow-lg transition-all duration-300 z-10",
          config.borderColor,
          config.color,
          isActive ? "scale-125 ring-4" : "scale-100",
          config.ringColor
        )}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse halo animation */}
        <span className={cn("absolute -inset-1.5 rounded-full opacity-60 animate-ping pointer-events-none", config.glowColor)} style={{ animationDuration: '2s' }} />
        
        {/* Core Icon */}
        {config.icon}
      </motion.div>
    </div>
  );
}
