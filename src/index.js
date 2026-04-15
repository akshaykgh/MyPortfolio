import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const MIN_SPLASH_MS = 720;
const MIN_SPLASH_MS_REDUCED = 200;

function dismissSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    splash.remove();
    return;
  }

  splash.classList.add('splash--exit');
  const fallback = window.setTimeout(() => splash.remove(), 550);
  splash.addEventListener(
    'transitionend',
    () => {
      window.clearTimeout(fallback);
      splash.remove();
    },
    { once: true }
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const splashStart = performance.now();
const minSplash =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? MIN_SPLASH_MS_REDUCED
    : MIN_SPLASH_MS;

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const elapsed = performance.now() - splashStart;
    const wait = Math.max(0, minSplash - elapsed);
    window.setTimeout(dismissSplash, wait);
  });
});



