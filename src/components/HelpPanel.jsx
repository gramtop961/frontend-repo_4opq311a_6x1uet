import React, { useState } from 'react'
import { HelpCircle } from 'lucide-react'

export default function HelpPanel() {
  const [open, setOpen] = useState(false)

  return (
    <section id="help" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 shadow-sm hover:bg-slate-50"
        >
          <HelpCircle className="h-5 w-5 text-blue-600" />
          {open ? 'Hide help' : 'How astra.ai works'}
        </button>

        {open && (
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900">Phase 1: Generator</h4>
              <p className="mt-2 text-sm text-slate-600">
                A guided, minimal Q&A creates: 1) monetizable problems, 2) solution ideas, and 3) a product blueprint with GTM tactics. Answers become context for future chats.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900">Phase 2: Chat</h4>
              <p className="mt-2 text-sm text-slate-600">
                A specialized chat remembers your niche and product. It answers with concrete, actionable guidance, reducing fluff and hallucinations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900">Data & Admin</h4>
              <p className="mt-2 text-sm text-slate-600">
                The system grows its own knowledge base of problems, niches, and solutions. Admins can import, export, and extend data to refine AI output quality.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
