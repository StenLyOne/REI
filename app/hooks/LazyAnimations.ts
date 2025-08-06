'use client';

import { useEffect } from 'react';

export function LazyAnimations() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/animations.css';
    link.media = 'all';
    document.head.appendChild(link);
  }, []);

  return null;
}
