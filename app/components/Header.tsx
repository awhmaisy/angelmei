'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex flex-col justify-center items-center my-2.5">
      <div className="text-center text-xs font-[Geist] text-[var(--accent)]">
        ( -_•)︻デ═一 ---- ✧˖°⋆ﾟ⊹⁎⁺˳✧༚♡
      </div>
      <div className="flex gap-2 text-[20px] font-[Creep] text-[var(--accent)]" style={{ alignItems: 'baseline' }}>
        <Link href="/" className="nav-link" style={{ display: 'inline-block' }}>hi</Link> / 
        <Link href="/linky" className="nav-link" style={{ display: 'inline-block' }}>linky</Link> / 
        <Link href="/abt" className="nav-link" style={{ display: 'inline-block' }}>fun</Link> / 
        <button 
          className="nav-link" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', paddingBottom: '2px' }}
        >
          <span style={{ fontSize: '0.6em', display: 'inline-block', transform: 'translateY(2px)' }}>{theme === 'dark' ? '電気つけて！' : '電気消して！'}</span>
        </button> / 
        <button className="nav-link" style={{ display: 'inline-block' }} onClick={() => {
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
          popup.style.fontFamily = 'Garmin10';
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
