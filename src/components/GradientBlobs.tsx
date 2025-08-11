"use client"

import { motion } from "framer-motion"

interface GradientBlobsProps {
  variant?: "default" | "blue" | "purple" | "green" | "orange"
}

export default function GradientBlobs({ variant = "default" }: GradientBlobsProps) {
  const getVariantColors = (variant: string) => {
    switch (variant) {
      case "blue":
        return {
          blob1: "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
          blob2: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600",
          blob3: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
        }
      case "purple":
        return {
          blob1: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
          blob2: "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",
          blob3: "bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500",
        }
      case "green":
        return {
          blob1: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
          blob2: "bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500",
          blob3: "bg-gradient-to-r from-teal-400 via-green-500 to-emerald-500",
        }
      case "orange":
        return {
          blob1: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500",
          blob2: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
          blob3: "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500",
        }
      default:
        return {
          blob1: "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
          blob2: "bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600",
          blob3: "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500",
        }
    }
  }

  const colors = getVariantColors(variant)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl ${colors.blob1}`}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "5%",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className={`absolute w-80 h-80 rounded-full opacity-25 blur-3xl ${colors.blob2}`}
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.7, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          top: "20%",
          right: "15%",
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className={`absolute w-72 h-72 rounded-full opacity-30 blur-3xl ${colors.blob3}`}
        animate={{
          x: [0, 60, -90, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{
          bottom: "15%",
          left: "20%",
        }}
      />

      {/* Blob 4 */}
      <motion.div
        className={`absolute w-64 h-64 rounded-full opacity-20 blur-3xl ${colors.blob1}`}
        animate={{
          x: [0, -40, 80, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.4, 0.6, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        style={{
          bottom: "25%",
          right: "10%",
        }}
      />

      {/* Blob 5 - Center */}
      <motion.div
        className={`absolute w-56 h-56 rounded-full opacity-15 blur-3xl ${colors.blob2}`}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 0.8, 1.2, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}
