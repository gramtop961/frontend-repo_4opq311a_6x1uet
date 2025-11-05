import React, { useMemo, useState } from 'react'
import { ArrowRight, ArrowLeft, Rocket, MessageCircle } from 'lucide-react'

const baseQuestions = [
  { key: 'niche', label: 'What niche do you want to focus on?', placeholder: 'e.g., indie game dev tools, fitness creators, Etsy sellers' },
  { key: 'audience', label: 'Who is your target audience?', placeholder: 'e.g., solo founders, creators with 10k-100k audience' },
  { key: 'goal', label: 'What outcome do they want most?', placeholder: 'e.g., save time, increase revenue, reduce churn' },
]

const modeSpecific = {
  problems: [
    { key: 'constraints', label: 'Any constraints or resources?', placeholder: 'e.g., $0 budget, 10 hrs/week, strong SEO skills' },
  ],
  solutions: [
    { key: 'format', label: 'Preferred product format?', placeholder: 'e.g., SaaS, Notion template, API, course, micro tool' },
  ],
  blueprint: [
    { key: 'price', label: 'Target price point?', placeholder: 'e.g., $9/mo, $49 one-time, $299 course' },
  ],
}

function Summary({ mode, data }) {
  const titleByMode = {
    problems: 'Monetizable problem hypotheses',
    solutions: 'Solution concepts you can build next',
    blueprint: 'Product blueprint and GTM outline',
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-slate-900">
        <Rocket className="h-5 w-5 text-blue-600" />
        <h4 className="font-semibold">{titleByMode[mode]}</h4>
      </div>
      <div className="mt-3 space-y-3 text-sm text-slate-700">
        {mode === 'problems' && (
          <ul className="list-disc pl-5 space-y-1">
            <li>Time sinks for {data.audience || 'your audience'} in {data.niche || 'your niche'} → prioritize by frequency and spend.</li>
            <li>Acquisition bottlenecks (traffic → signups) → provide templates and automations.</li>
            <li>Activation gaps (signups → first value) → onboarding wizards, checklists, and examples.</li>
          </ul>
        )}
        {mode === 'solutions' && (
          <ul className="list-disc pl-5 space-y-1">
            <li>{(data.format || 'SaaS')} that auto-detects and fixes top 3 friction points for {data.audience || 'your audience'}.</li>
            <li>Template bundle tailored to {data.niche || 'your niche'} with proven copy, flows, and metrics.</li>
            <li>Micro-service API that handles a painful, repetitive task with simple pricing.</li>
          </ul>
        )}
        {mode === 'blueprint' && (
          <div className="space-y-2">
            <p className="font-medium">Positioning</p>
            <p>For {data.audience || 'your audience'} in {data.niche || 'your niche'} who want {data.goal || 'measurable outcomes'}, we offer a focused solution priced around {data.price || '$19-$99'}.</p>
            <p className="font-medium mt-3">MVP in 2 weeks</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Week 1: validate top 3 jobs-to-be-done; ship a clickable demo; collect 10 qual calls.</li>
              <li>Week 2: build smallest valuable slice; set up landing, payments, and onboarding.</li>
            </ul>
            <p className="font-medium mt-3">GTM and monetization</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Audience-first: publish 3 high-signal threads/posts solving real pain with screenshots.</li>
              <li>Partnerships: swap promos with 3 creators; offer rev-share affiliates.</li>
              <li>Pricing: simple starter tier + higher-touch plan for power users.</li>
            </ul>
          </div>
        )}
      </div>
      <div className="mt-4 text-xs text-slate-500 flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        Answers adapt in the chat interface using this context.
      </div>
    </div>
  )
}

export default function ConversationalWizard({ mode }) {
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)
  const questions = useMemo(() => {
    const specifics = modeSpecific[mode] || []
    return [...baseQuestions, ...specifics]
  }, [mode])

  const [data, setData] = useState({})

  const canNext = step < questions.length && (data[questions[step]?.key]?.trim()?.length > 0)

  function onChange(key, value) {
    setData((d) => ({ ...d, [key]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate a short thinking delay; in production, call backend.
    await new Promise((r) => setTimeout(r, 600))
    setResult({ mode, data })
    setSubmitting(false)
  }

  if (!mode) {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center text-slate-600">
          Pick a mode above to begin.
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-slate-900 font-semibold">Step {Math.min(step + 1, questions.length)} of {questions.length}</div>
          <div className="h-2 w-40 bg-slate-100 rounded">
            <div
              className="h-2 rounded bg-blue-600 transition-all"
              style={{ width: `${((Math.min(step, questions.length - 1)) / (questions.length - 1 || 1)) * 100}%` }}
            />
          </div>
        </div>

        {!result ? (
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {step < questions.length ? (
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  {questions[step].label}
                </label>
                <input
                  type="text"
                  value={data[questions[step].key] || ''}
                  onChange={(e) => onChange(questions[step].key, e.target.value)}
                  placeholder={questions[step].placeholder}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            ) : (
              <div className="text-slate-700">
                Review and generate results.
              </div>
            )}

            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>

              {step < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => canNext && setStep((s) => Math.min(questions.length - 1, s + 1))}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {submitting ? 'Generating…' : 'Generate'} <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        ) : (
          <Summary mode={mode} data={data} />
        )}
      </div>
    </section>
  )
}
