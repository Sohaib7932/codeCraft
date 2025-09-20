"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { InlineWidget } from "react-calendly"
import { X, Calendar } from "lucide-react"

interface CalendlyWidgetProps {
  isOpen: boolean
  onClose: () => void
  url?: string
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  isOpen, 
  onClose, 
  url = "https://calendly.com/hr-codekraft/30min" 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Schedule a Call</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Calendly Widget */}
            <div className="h-full pb-20">
              <InlineWidget
                url={url}
                styles={{
                  height: "100%",
                  border: "none"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CalendlyWidget

// Hook for using Calendly
export const useCalendly = (url?: string) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCalendly = () => setIsOpen(true)
  const closeCalendly = () => setIsOpen(false)

  const CalendlyComponent = () => (
    <CalendlyWidget 
      isOpen={isOpen} 
      onClose={closeCalendly} 
      url={url} 
    />
  )

  return {
    isOpen,
    openCalendly,
    closeCalendly,
    CalendlyComponent
  }
}
