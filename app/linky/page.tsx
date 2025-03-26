'use client';

import Header from '../components/Header';



export default function LinkyPage() {

  return (
    <div className="terminal-box">
      <div className="inner-content items-center justify-items-center min-h-screen px-8 sm:px-20 font-[family-name:Akkurat-Mono]" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <Header />
        <main className="flex flex-col row-start-2 items-start max-w-lg">
          <div>
            <h1 className="text-2xl font-[scientificaItalic]" style={{ color: 'var(--accent)' }}>links</h1>
          </div>
          <br />
          <div className="text-xs font-[Akkurat-Mono]">
            <p>
              send transmissions via pm or email: <a href="mailto:m@mach012.com" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>m@mach012.com</a>
            </p>
            <br />
            <p>
              otherwise, find me on <a href="https://www.twitter.com/awhmaisy/" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>x</a> and <a href="https://www.instagram.com/awhmaisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>instagram (ew).</a> i&apos;d love to hear what you&apos;re building / learning as of late!
            </p>
            <br />
            <p>i do like to write</p>
            <ul className="list-none space-y-1">
              <li>
                <a href="https://awhmaisy.substack.com/" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>on substack (temp)</a>
              </li>
            </ul>
            <br />
            <p>and embed myself into music genres</p>
            <ul className="list-none">
              <li>
                on <a href="https://open.spotify.com/user/msf84l3xh0uyy5vvf1nn0idon?si=0c35b2db8e264064" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>spotify</a>
              </li>
              <li>
                and <a href="https://soundcloud.com/awhmaisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>soundcloud</a>
              </li>
              <li>
                on <a href="https://factory.fm/u/meow" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>factory.fm</a> (afk)
              </li>
            </ul>
            <br />
            <p>and collect images</p>
            <ul className="list-none">
              <li>
                on are.na <a href="https://are.na/mei-higashi" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>@mei-higashi</a>
              </li>
              <li>
                on pinterest <a href="https://www.pinterest.com/awhmaisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>@awhmaisy</a>
              </li>
              <li>
                on cosmos <a href="https://www.cosmos.so/maisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>@maisy</a>
              </li>
              <li>
                and a lil on zora <a href="https://www.zora.co/maisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>@maisy</a> (afk)
              </li>
            </ul>
            <br />
            <p>and ive recently begun to collect links</p>
            <ul className="list-none space-y-1">
              <li>
                on pinboard <a href="https://pinboard.in/u:maisy" target="_blank" className="hover:underline" style={{ color: 'var(--accent)' }}>@maisy</a>
              </li>
            </ul>
            <br />
            <p>
              && lil fun fact, my name is mei higashi :) maisy jay is my stage name and primary handle; so peepl began to call me maisy :0 no preference!
            </p>
          </div>
  
        </main>
        
      </div>
    </div>
  );
}
