"use client";

import React, { useState } from 'react';
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col px-8 sm:px-20 bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="flex-1 flex flex-col justify-center">
        <main className="flex flex-col items-start max-w-lg mx-auto font-msgothic">
          <div>
            <h1 className="text-2xl font-msgothic text-[#ca9ae5] mb-2">maisy</h1>
            <p className="text-xs">
              <a href="mailto:m@mach012.com" className="text-[#ca9ae5] hover:underline">m@mach012.com</a> / <a href="https://x.com/awhmaisy" className="text-[#ca9ae5] hover:underline">x.com/awhmaisy</a>
            </p>
          </div>
          <br />
          <div className="text-xs font-msgothic">
            <p className="mb-6">
              hi! i&apos;m an ex-social media producer + manager, with expertise in relational engineering && cult building.
            </p>
            <p className="mb-6">
              i dropped out in 3rd grade to homeschool, commit to side quests and observe product/graphic design at <a href="https://www.artcenter.edu/" className="text-[#ca9ae5] hover:underline">ACCD</a>. i was configuring a degree at <a href="https://iovine-young.usc.edu/" className="text-[#ca9ae5] hover:underline">USC&apos;s iovine and young academy</a> but have since received callings to industrialize zones in ████ + convalesce!
            </p>
            <p>
              i also embed and manufacture exclusively US-made garments for technical companies at <a href="https://mach012.com" className="text-[#ca9ae5] hover:underline">MACH-12</a>. 
            </p>
            <br />
            <p>────୨ৎ────</p>
            <br />
            <p className="mb-2">
              current fascinations
            </p>
            <ul className="list-none space-y-1">
              <li>hmm..mystery</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
