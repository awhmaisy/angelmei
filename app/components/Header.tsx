'use client';

import Link from 'next/link';

export default function Header() {

  return (
    <nav className="flex flex-col justify-center items-center my-2.5">
      <div className="text-center text-xs font-[Geist] text-[#ca9ae5]">
        ( -_•)︻デ═一 ---- ✧˖°⋆ﾟ⊹⁎⁺˳✧༚♡
      </div>
      <div className="flex gap-2 text-[20px] font-[Creep] text-[#ca9ae5]">
        <Link href="/" className="nav-link">hi</Link> / 
        <Link href="/linky" className="nav-link">linky</Link> / 
        <Link href="/abt" className="nav-link">fun</Link> / 
        <button className="nav-link" onClick={() => {
          const existingPopup = document.querySelector('.popup-message');
          if (existingPopup) {
            document.body.removeChild(existingPopup);
          }
          const popup = document.createElement('div');
          popup.className = 'popup-message';
          const messages = [
            'love you forever <3',
            'ଘ(੭ˊᵕˋ)੭ 𓈒♡ ݁ .',
            '/ᐠ ˵> ⩊ <˵マ',
            'why not?',
            'big kisses!',
            '/ᐠ - ⩊ -マ₊˚⊹♡₊ ⊹',
            'wanna play a game?',
            'see you soon!'
          ];
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          popup.textContent = randomMessage;
          popup.style.position = 'fixed';
          popup.style.top = '0px';
          popup.style.left = '50%';
          popup.style.transform = 'translateX(-50%)';
          popup.style.backgroundColor = 'var(--background-light)';
          popup.style.color = '#ea9ae5';
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
