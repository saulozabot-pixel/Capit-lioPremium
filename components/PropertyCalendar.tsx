'use client'

import { useState, useEffect } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'
import { parseISO } from 'date-fns'
import 'react-day-picker/dist/style.css'

interface OccupiedRange {
  from: string
  to: string
}

interface PropertyCalendarProps {
  slug: string
  selectedRange?: DateRange
  onSelectRange?: (range: DateRange | undefined) => void
  mode?: 'view' | 'range'
  className?: string
}

export default function PropertyCalendar({ 
  slug, 
  selectedRange, 
  onSelectRange, 
  className = ''
}: PropertyCalendarProps) {
  const [occupiedRanges, setOccupiedRanges] = useState<OccupiedRange[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAvailability() {
      try {
        const res = await fetch(`/api/properties/${slug}/availability`)
        if (res.ok) {
          const data = await res.json()
          setOccupiedRanges(data)
        }
      } catch (error) {
        console.error('Error fetching availability:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAvailability()
  }, [slug])

  // Desabilitar datas ocupadas
  const disabledDays = occupiedRanges.map(range => ({
    from: parseISO(range.from),
    to: parseISO(range.to)
  }))

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
        <div className="w-6 h-6 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl p-2 border border-blue-50 shadow-sm ${className}`}>
      <style>{`
        .rdp {
          --rdp-accent-color: #22c55e;
          --rdp-background-color: #f0fdf4;
          margin: 0;
        }
        .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover {
          background-color: var(--rdp-accent-color) !important;
          color: white !important;
        }
        .rdp-day_selected.rdp-day_range_middle {
          background-color: #dcfce7 !important;
          color: #166534 !important;
        }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background-color: var(--rdp-background-color);
        }
        /* Style for occupied dates */
        .rdp-day_occupied:not(.rdp-day_selected) {
          background-color: #fee2e2 !important;
          color: #991b1b !important;
          text-decoration: line-through;
          cursor: not-allowed;
          opacity: 0.8;
          border-radius: 4px;
        }
      `}</style>
      <DayPicker
        mode="range"
        selected={selectedRange}
        onSelect={onSelectRange}
        locale={ptBR}
        disabled={[{ before: new Date() }, ...disabledDays]}
        modifiers={{ occupied: disabledDays }}
        showOutsideDays
      />
      <div className="mt-4 px-2 flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
          <span>Selecionado</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <span>Ocupado</span>
        </div>
      </div>
    </div>
  )
}
