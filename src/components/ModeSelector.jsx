import React from 'react'
import { Lightbulb, Hammer, ListChecks } from 'lucide-react'

const modes = [
  {
    id: 'problems',
    title: 'Identify monetizable problems',
    description:
      'Discover pain points in your niche that people will pay to solve.',
    icon: Lightbulb,
    accent: 'from-amber-400 to-yellow-500',
  },
  {
    id: 'solutions',
    title: 'Create solution ideas',
    description:
      'Turn validated problems into digital products and services.',
    icon: Hammer,
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'blueprint',
    title: 'Generate a product blueprint',
    description:
      'Step-by-step plan with monetization and go-to-market tactics.',
    icon: ListChecks,
    accent: 'from-violet-500 to-purple-600',
  },
]

export default function ModeSelector({ selected, onSelect }) {
  return (
    <section id="modes" className="relative py-10 lg:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
          Choose a mode
        </h2>
        <p className="mt-2 text-slate-600">
          Answer a few strategic questions. We keep it minimal and focused.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {modes.map((m) => {
            const Icon = m.icon
            const active = selected === m.id
            return (
              <button
                key={m.id}
                onClick={() => onSelect(m.id)}
                className={`group text-left rounded-2xl border transition-all p-5 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  active ? 'border-blue-500 ring-2 ring-blue-300' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 rounded-xl p-2 text-white bg-gradient-to-br ${m.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{m.description}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
