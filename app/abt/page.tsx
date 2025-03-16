'use client';

import Header from '../components/Header';

export default function AboutPage() {
    return (
        <div className="terminal-box">
            <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20 font-[family-name:Akkurat-Mono] bg-black text-white">
                <Header />
                <main className="flex flex-col row-start-2 items-start max-w-lg">
                    <div>
                        <h1 className="text-2xl font-[scientificaItalic] text-[#ca9ae5]">maisyworld</h1>
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
                </main>
            </div>
        </div>
    );
}
