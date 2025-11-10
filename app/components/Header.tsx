'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex flex-col justify-center items-center my-2.5">
      <div className="flex gap-4 text-sm font-msgothic text-white">
        <Link href="/" className="nav-link hover:underline">hai</Link>
        <Link href="/linky" className="nav-link hover:underline">linky</Link>
        <Link href="/lexicon" className="nav-link hover:underline">lexicon</Link>
        <button 
          className="nav-link hover:underline" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontSize: '0.8em' }}>{theme === 'dark' ? '電気つけて！' : '電気消して！'}</span>
        </button>
        <button className="nav-link hover:underline" onClick={() => {
          const existingPopup = document.querySelector('.popup-message');
          if (existingPopup) {
            document.body.removeChild(existingPopup);
          }
          const popup = document.createElement('div');
          popup.className = 'popup-message';
          const messages = [
            'ଘ(੭ˊᵕˋ)੭ 𓈒♡ ݁ .',
            '/ᐠ ˵> ⩊ <˵マ',
            '/ᐠ - ⩊ -マ₊˚⊹♡₊ ⊹',
            'see you soon!'
          ];
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          popup.textContent = randomMessage;
          popup.style.position = 'fixed';
          popup.style.top = '0px';
          popup.style.left = '50%';
          popup.style.transform = 'translateX(-50%)';
          popup.style.backgroundColor = 'var(--background)';
          popup.style.color = 'var(--accent)';
          popup.style.padding = '10px';
          popup.style.paddingTop = '100px';
          popup.style.zIndex = '1000';
          popup.style.fontFamily = 'var(--font-msgothic)';
          document.body.appendChild(popup);
          setTimeout(() => {
            if (document.body.contains(popup)) {
              document.body.removeChild(popup);
            }
          }, 2000);
        }}>click!</button>
      </div>
    </nav>
  );
}
