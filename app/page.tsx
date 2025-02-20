"use client";

import React, { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Header from "./components/Header";
export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null;
    const isReload = performance.getEntriesByType('navigation')[0].type === 'reload';

    if (isFirstVisit || isReload) {
      setLoading(true);
      localStorage.setItem('isFirstVisit', 'false');

      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (

        <div className="terminal-box">
          <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20 font-[family-name:Akkurat-Mono] bg-black text-white">
            <Header />
            <main className="flex flex-col row-start-2 items-start max-w-lg">
              <div>
                <h1 className="text-2xl font-[scientificaItalic] text-[#ca9ae5]">maisy</h1>
                <p>
                  <a href="https://x.com/awhmaisy" className="text-xs hover:underline">@awhmaisy</a> / <a href="mailto:m@mach012.com" className="text-xs hover:underline">m@mach012.com</a> ⊹⁎⁺ ✧ ♡
                </p>
              </div>
              <br />
              <div className="text-xs font-[Akkurat-Mono]">
                <p className="mb-6">
                  hi! i'm an ex-social media producer + manager, with expertise in relational engineering && cult building.
                </p>
                <p className="mb-6">
                  i dropped out in 3rd grade to research nanotech at <a href="https://www.ucla.edu/" style={{ color: '#ca9ae5' }}>ucla BSC</a> and observe product/graphic design at <a href="https://www.artcenter.edu/" style={{ color: '#ca9ae5' }}>ACCD</a>. i was configuring a degree at <a href="https://iovine-young.usc.edu/" style={{ color: '#ca9ae5' }}>USC's iovine and young academy</a> for a year but dropped out after receiving prophetic callings to industrialize zones in ████ + convalesce!
                </p>
                <p>
                  currently manufacturing exclusively US-made garments for technical companies at <a href="https://mach012.com" style={{ color: '#ca9ae5' }}>MACH-12</a>. mostly in the form of branded merch, but i'm always up for a limited collection! aaaand retail soon :)
                </p>
                <br />
                <p>────୨ৎ────</p>
                <br />
                <p>
                  current fascinations
                </p>
                <ul className="list-none space-y-1">
                  <li>been making things <a href="https://are.na/mei-higashi/bymei" className="hover:underline text-[#ca9ae5]">in ps/ai</a></li>
                  <li>various methods of punitive deterrence</li>
                  <li>extremely basic propulsion</li>
                  <li>psyops in the perception of winning</li>
                  <li>more psyops in market dominance and conglomeracy</li>
                  <li>mischeviously making cpg/gen consumer products</li>
                  <li>metallurgy, particularly in pretty objects but machinery too</li>
                  <li>cognition judgement in context of military acuity</li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
