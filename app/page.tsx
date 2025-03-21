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
            <Header />
            <main className="flex flex-col row-start-2 items-start max-w-lg pb-24">
              <div>
                <h1 className="text-2xl font-scientifica italic text-[#ca9ae5]">maisy</h1>
                <p>
                  <a href="https://x.com/awhmaisy" className="text-xs hover:underline">@awhmaisy</a> / <a href="mailto:m@mach012.com" className="text-xs hover:underline">m@mach012.com</a> ⊹⁎⁺ ✧ ♡
                </p>
              </div>
              <br />
              <div className="text-xs font-akkurat">
                <p className="mb-6">
                  hi! i&apos;m a social media producer + manager, with expertise in relational engineering && cult building.
                </p>
                <p className="mb-6">
                  i dropped out in 3rd grade to homeschool, commit to side quests and observe product/graphic design at <a href="https://www.artcenter.edu/" style={{ color: '#ca9ae5' }}>ACCD</a>. i was configuring a degree at <a href="https://iovine-young.usc.edu/" style={{ color: '#ca9ae5' }}>USC&apos;s iovine and young academy</a> but have since received callings to industrialize zones in ████ + convalesce!
                </p>
                <p>
                  currently manufacturing exclusively US-made garments for technical companies. mostly in the form of branded merch, but high interest in the fashion industry as a whole.
                </p>
                <br />
                <p>────୨ৎ────</p>
                <br />
                <p>
                  current fascinations
                </p>
                <ul className="list-none space-y-1">
                  <li>been making things <a href="https://are.na/mei-higashi/bymei" className="hover:underline text-[#ca9ae5]">in ps/ai</a></li>
                  <li>extremely basic propulsion</li>
                  <li>psyops in the perception of winning</li>
                  <li>garment distribution & retail experimentation</li>
                  <li>conversational AI development as a medium to challenge the interplay between human and machine</li>
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
