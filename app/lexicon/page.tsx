"use client";

import Header from '../components/Header';

interface LexEntry {
  term: string;
  note?: string;
}

export default function LexiconPage() {
  // Example data for Q2 2025 (fake list)
  const q2_2025: LexEntry[] = [
    { term: 'sym-link', note: 'symbolic linkage between artifacts and meaning' },
    { term: 'soft-scan', note: 'light-touch audit; vibe and posture read' },
    { term: 'covenanting', note: 'forming durable mutualism; beyond contracts' },
    { term: 'latency tax', note: 'cost of delayed decision energy' },
    { term: 'signal nurse', note: 'keeper of comms hygiene and cadence' },
    { term: 'quiet executor', note: 'builds without surface-noise' },
    { term: 'civic OS', note: 'minimum viable coordination between peers' },
  ];

  return (
    <>
      <Header />
      <main>
        <h1 className="text-2xl mb-2" style={{ color: 'var(--accent)' }}>lexicon</h1>
        <p className="text-xs mb-6 opacity-80">curated vocabulary, tracked by quarter</p>

        <section className="w-full">
          <h2 className="text-sm mb-3" style={{ color: 'var(--accent)' }}>Q2 2025</h2>
          <ul className="space-y-2 text-xs">
            {q2_2025.map((entry, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="font-semibold">{entry.term}</span>
                {entry.note && <span className="opacity-70"> — {entry.note}</span>}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 text-xs opacity-70">
          add a new quarter by appending a section like above; entries are simple objects of {`{ term, note }`}
        </div>
      </main>
    </>
  );
}
