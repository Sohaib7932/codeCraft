"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  /** The target value to count up to */
  value: number
  /** Duration of the animation in milliseconds */
  duration?: number
  /** Number of decimal places to show */
  decimals?: number
  /** Prefix to add before the number (e.g., '$') */
  prefix?: string
  /** Suffix to add after the number (e.g., '%', '+', 'ms') */
  suffix?: string
  /** Custom formatting function */
  formatter?: (value: number) => string
  /** Delay before starting animation when in view */
  delay?: number
  /** Whether to start animation immediately or wait for in view */
  startImmediately?: boolean
  /** CSS classes to apply */
  className?: string
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  formatter,
  delay = 0,
  startImmediately = false,
  className = ''
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(counterRef, { once: true, margin: '-50px' })
  
  useEffect(() => {
    const shouldStart = startImmediately || isInView
    
    if (shouldStart && !hasStarted) {
      setHasStarted(true)
      
      const startTime = Date.now() + delay
      const startValue = 0
      const endValue = value
      
      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        
        if (elapsed < 0) {
          requestAnimationFrame(animate)
          return
        }
        
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        
        const currentValue = startValue + (endValue - startValue) * easedProgress
        setDisplayValue(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(endValue)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, delay, hasStarted, startImmediately])

  const formatNumber = (num: number): string => {
    if (formatter) {
      return formatter(num)
    }
    
    const rounded = Number(num.toFixed(decimals))
    
    // Handle special cases for common patterns
    if (suffix === '+' && rounded === value) {
      // For values like "500+" show the + only at the end
      return rounded.toString()
    }
    
    return rounded.toString()
  }

  const formattedValue = formatNumber(displayValue)

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}

// Specialized components for common use cases
export function PercentageCounter({ 
  value, 
  decimals = 1, 
  ...props 
}: Omit<AnimatedCounterProps, 'suffix'>) {
  return (
    <AnimatedCounter 
      value={value} 
      decimals={decimals} 
      suffix="%" 
      {...props} 
    />
  )
}

export function PlusCounter({ 
  value, 
  ...props 
}: Omit<AnimatedCounterProps, 'suffix'>) {
  return (
    <AnimatedCounter 
      value={value} 
      suffix="+" 
      {...props} 
    />
  )
}

export function TimeCounter({ 
  value, 
  unit = 'ms',
  prefix = '<',
  ...props 
}: Omit<AnimatedCounterProps, 'suffix' | 'prefix'> & { unit?: string, prefix?: string }) {
  return (
    <AnimatedCounter 
      value={value} 
      prefix={prefix} 
      suffix={unit} 
      {...props} 
    />
  )
}
