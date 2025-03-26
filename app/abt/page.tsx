'use client';

import Header from '../components/Header';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export default function AboutPage() {
    const projects: Project[] = [
        {
            title: "CHECKMATE",
            description: "early-edition @source_os. play chess with her.",
            url: "https://checkmate-xi.vercel.app/",
            imageUrl: "/checkmate-preview.jpeg"
        },
        {
            title: "MACH-12",
            description: "US-made garments and manufacturing for technical companies. retail site here.",
            url: "https://mach012.com",
            imageUrl: "/mach12-preview.png"
        }
        // Add more projects as needed
    ];
    return (
        <div className="terminal-box">
            <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20 font-[family-name:Akkurat-Mono]" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                <Header />
                <main className="flex flex-col row-start-2 items-start max-w-lg">
                    <div>
                        <h1 className="text-2xl font-[scientificaItalic]" style={{ color: 'var(--accent)' }}>maisyworld</h1>
                    </div>
                    <br />
                    <div className="text-xs font-[Akkurat-Mono]">
                        <p className="mb-1">a few past lives, thus far</p>
                        <ul className="list-none space-y-1">
                            <li>
                                influencer.....
                            </li>
                            <li>
                                fine arts/performance journalist
                            </li>
                            <li>
                                marine biologist
                            </li>
                            <li>
                                nanotech researcher (appl. in oncology)
                            </li>
                            <li>
                                twitch streamer (cod, mw, csgo, val)
                            </li>
                            <li>
                                metaphysics + cognitive sublimination theorist
                            </li>
                            <li>
                                fun w/ distributed phygital hardware in web3
                            </li>
                            <li>
                                onboarding the creator economy to various L2 applications #sadge
                            </li>
                            <li>
                                also had a spinal fusion, but alive!
                            </li>
                        </ul>
                        <br />
                        <p>────୨ৎ────</p>
                        <br />
                        <p className="mb-1">things i will always be interested in</p>
                        <ul className="list-none space-y-1">
                            <li>
                                the american revolution
                            </li>
                            <li>
                                quad railing, better bore sighting
                            </li>
                            <li>
                                greek/roman mythology
                            </li>
                            <li>
                                typefaces and sniping woff files
                            </li>
                            <li>
                                ancient egypt (particular interest in preservation and canopic organ jars)
                            </li>
                        </ul>
                        <br />
                        <br />
                        <p>────୨ৎ────</p>
                        <br />
                        <p className="mb-1">misc texts ive sent myself recently</p>
                        <ul className="list-none space-y-1">
                            <li>
                                lore procurement mode
                            </li>
                            <li>
                                lower latency btwn squinting at phone && texting self at 2am
                            </li>
                            <li>
                                sleight of hand
                            </li>
                            <li>
                                the entire internet is retooling itself
                            </li>
                            <li>
                                category IV - rockets, SLVs, and missiles
                            </li>
                            <li>
                                incident reduction thru on demand cognitive monitoring
                            </li>
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
                                    <div className="border p-4" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)' }}>
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
                                        <h3 className="text-lg mb-2 font-[scientificaItalic]" style={{ color: 'var(--accent)' }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-xs opacity-70">
                                            {project.description}
                                        </p>
                                        <div className="mt-2 text-xs opacity-70" style={{ color: 'var(--accent)' }}>
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
    );
}
