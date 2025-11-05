import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[640px] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            astra.ai
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-slate-600">
            A niche-first AI co-founder for digital product creators. Generate monetizable problems, craft solutions, and ship a go-to-market blueprint—fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#modes"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Start exploring
            </a>
            <a
              href="#help"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-blue-700 font-medium border border-blue-200 hover:border-blue-300 shadow-sm"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
