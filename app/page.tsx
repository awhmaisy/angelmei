"use client";

import React, { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Header from "./components/Header";
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  
  const projects: Project[] = [
    {
      title: "CHECKMATE",
      description: "early-edition @source_os. play chess with her.",
      url: "https://checkmate-xi.vercel.app/",
      imageUrl: "/checkmate-preview.jpeg" // You'll need to add this image to your public folder
    },
    {
      title: "MACH-12",
      description: "US-made garments and manufacturing for technical companies. retail site here.",
      url: "https://mach012.com",
      imageUrl: "/mach12-preview.png" // You'll need to add this image to your public folder
    }
    // Add more projects as needed
  ];

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
          <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20 bg-black text-white">
            <div className="fixed top-0 left-0 p-4 text-xs">
              <p className="font-akkurat">Akkurat Test</p>
              <p className="font-scientifica">Scientifica Test</p>
              <p className="font-creep">Creep Test</p>
              <p className="font-garmin">Garmin Test</p>
            </div>
            <Header />
            <main className="flex flex-col row-start-2 items-start max-w-lg">
              <div>
                <h1 className="text-2xl font-scientifica italic text-[#ca9ae5]">maisy</h1>
                <p>
                  <a href="https://x.com/awhmaisy" className="text-xs hover:underline">@awhmaisy</a> / <a href="mailto:m@mach012.com" className="text-xs hover:underline">m@mach012.com</a> ⊹⁎⁺ ✧ ♡
                </p>
              </div>
              <br />
              <div className="text-xs font-akkurat">
                <p className="mb-6">
                  hi! i&apos;m an ex-social media producer + manager, with expertise in relational engineering && cult building.
                </p>
                <p className="mb-6">
                  i dropped out in 3rd grade to research nanotech at <a href="https://www.ucla.edu/" style={{ color: '#ca9ae5' }}>ucla BSC</a> and observe product/graphic design at <a href="https://www.artcenter.edu/" style={{ color: '#ca9ae5' }}>ACCD</a>. i was configuring a degree at <a href="https://iovine-young.usc.edu/" style={{ color: '#ca9ae5' }}>USC&apos;s iovine and young academy</a> for a year but dropped out after receiving prophetic callings to industrialize zones in ████ + convalesce!
                </p>
                <p>
                  currently manufacturing exclusively US-made garments for technical companies at <a href="https://mach012.com" style={{ color: '#ca9ae5' }}>MACH-12</a>. mostly in the form of branded merch, but i&apos;m always up for a limited collection! aaaand retail soon :)
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
              
              <div className="mt-6">
                <p>────୨ৎ────</p>
                <br />
                <p className="text-xs mb-6">happy fun lovely things</p>
                
                <div className="grid grid-cols-1 gap-6">
                  {projects.map((project, index) => (
                    <a 
                      key={index} 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="block"
                    >
                      <div className="border border-[#ca9ae5] bg-black p-4">
                        <div className="relative w-full mb-4">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={1920}
                            height={1080}
                            style={{ width: '100%', height: 'auto' }}
                            className="object-left"
                            priority
                            unoptimized
                          />
                        </div>
                        <h3 className="text-[#ca9ae5] text-lg mb-2 font-[scientificaItalic]">
                          {project.title}
                        </h3>
                        <p className="text-xs opacity-70">
                          {project.description}
                        </p>
                        <div className="mt-2 text-xs text-[#ca9ae5] opacity-70">
                          ⊹⁎⁺ view project ✧ ♡
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
