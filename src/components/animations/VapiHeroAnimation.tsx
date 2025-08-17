'use client'

import { useEffect, useState, useRef } from 'react'

interface VapiHeroProps {
  mainText: string
  cyclingWords: string[]
  subtext: string
  soundWaveSpeed?: number
}

export default function VapiHeroAnimation({ 
  mainText, 
  cyclingWords, 
  subtext, 
  soundWaveSpeed = 2.2 
}: VapiHeroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const waveRef = useRef<HTMLDivElement>(null)

  // Text cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [cyclingWords.length])

  // Fixed heights to avoid hydration issues
  const barHeights = [25, 45, 35, 50, 30, 40, 55, 25, 45, 35, 50, 30]

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      {/* Main Headline with Cycling Text */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          {mainText}
        </h1>
        <div className="h-16 md:h-20 flex items-center justify-center">
          <span 
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ${
              isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {cyclingWords[currentWordIndex]}
          </span>
        </div>
      </div>

      {/* Sound Wave Visualization */}
      <div 
        ref={waveRef}
        className="flex items-end justify-center space-x-1 h-16"
      >
{barHeights.map((height, i) => (
          <div
            key={i}
            className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-full sound-wave-bar"
            style={{
              width: '4px',
              height: `${height}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${1 / soundWaveSpeed}s`,
            }}
          />
        ))}
      </div>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
        {subtext}
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
          Get Started
        </button>
        <button className="px-8 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}