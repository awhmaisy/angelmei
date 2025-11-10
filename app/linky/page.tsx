"use client";

import Header from '../components/Header';

export default function LinkyPage() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className="text-2xl mb-2" style={{ color: 'var(--accent)' }}>links</h1>
        </div>
        <br />
        <div className="text-xs">
          <p>
            send transmissions via pm or email: <a href="mailto:m@mach012.com" target="_blank">m@mach012.com</a>
          </p>
          <br />
          <p>
            otherwise, find me on <a href="https://www.twitter.com/awhmaisy/" target="_blank">x</a> and <a href="https://www.instagram.com/awhmaisy" target="_blank">instagram (ew).</a> i&apos;d love to hear what you&apos;re building / learning as of late!
          </p>
          <br />
          <p>i do like to write</p>
          <ul>
            <li>
              <a href="https://awhmaisy.substack.com/" target="_blank">on substack (temp)</a>
            </li>
          </ul>
          <br />
          <p>and embed myself into music genres</p>
          <ul>
            <li>
              on <a href="https://open.spotify.com/user/msf84l3xh0uyy5vvf1nn0idon?si=0c35b2db8e264064" target="_blank">spotify</a>
            </li>
            <li>
              and <a href="https://soundcloud.com/awhmaisy" target="_blank">soundcloud</a>
            </li>
            <li>
              on <a href="https://factory.fm/u/meow" target="_blank">factory.fm</a> (afk)
            </li>
          </ul>
          <br />
          <p>and collect images</p>
          <ul>
            <li>
              on are.na <a href="https://are.na/mei-higashi" target="_blank">@mei-higashi</a>
            </li>
            <li>
              on pinterest <a href="https://www.pinterest.com/awhmaisy" target="_blank">@awhmaisy</a>
            </li>
            <li>
              on cosmos <a href="https://www.cosmos.so/maisy" target="_blank">@maisy</a>
            </li>
            <li>
              and a lil on zora <a href="https://www.zora.co/maisy" target="_blank">@maisy</a> (afk)
            </li>
          </ul>
          <br />
          <p>and ive recently begun to collect links</p>
          <ul>
            <li>
              on pinboard <a href="https://pinboard.in/u:maisy" target="_blank">@maisy</a>
            </li>
          </ul>
          <br />
          <p>
            && lil fun fact, my name is mei higashi :) maisy jay is my stage name and primary handle; so peepl began to call me maisy :0 no preference!
          </p>
        </div>
      </main>
    </>
  );
}
