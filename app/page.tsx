"use client";

import React, { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Header from "./components/Header";



export default function Home() {
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null;
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = navEntry.type === 'reload';

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
          <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <Header />
            <main className="flex flex-col row-start-2 items-start max-w-lg pb-24">
              <div>
                <h1 className="text-2xl font-scientifica italic" style={{ color: 'var(--accent)' }}>maisy</h1>
                <p>
                  <a href="https://x.com/awhmaisy" className="text-xs hover:underline">@awhmaisy</a> / <a href="mailto:m@mach012.com" className="text-xs hover:underline">m@mach012.com</a> ⊹⁎⁺ ✧ ♡
                </p>
              </div>
              <br />
              <div className="text-xs font-akkurat">
                <p className="mb-6">
                  hi! i&apos;m a media producer, with expertise in relational engineering && cult building.
                </p>
                <p className="mb-6">
                  i dropped out in 3rd grade to homeschool, commit to side quests and observe product/graphic design at <a href="https://www.artcenter.edu/" style={{ color: 'var(--accent)' }}>ACCD</a>. i was configuring a degree at <a href="https://iovine-young.usc.edu/" style={{ color: 'var(--accent)' }}>USC&apos;s iovine and young academy</a> but have since received callings to industrialize zones in ████ + convalesce!
                </p>
                <p>
                  i also embed and manufacture exclusively US-made garments for technical companies at <a href="https://mach012.com" style={{ color: 'var(--accent)' }}>MACH-12</a>. 
                </p>
                <br />
                <p>────୨ৎ────</p>
                <br />
                <p>
                  current fascinations
                </p>
                <ul className="list-none space-y-1">
                  <li>baby ghostwriting on physics, science and some tech</li>
                  <li>quantum entanglement of many sorts</li>
                  <li>dabbling into my reading list</li>
                  <li>davinci resolve, premiere pro, color grading, oh my!</li>
                  <li>(still) playing chess - the interplay between human & machine</li>
                </ul>
              </div>
    
            </main>
          </div>
        </div>
      )}
    </>
  );
}
