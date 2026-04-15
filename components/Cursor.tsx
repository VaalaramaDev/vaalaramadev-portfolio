'use client';

import {useEffect} from 'react';

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = document.createElement('div');
    const ring = document.createElement('div');

    const baseStyles = {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '99999',
      transform: 'translate(-50%, -50%)',
      left: '0px',
      top: '0px'
    };

    Object.assign(dot.style, baseStyles, {
      width: '8px',
      height: '8px',
      background: '#0f0f0d',
      borderRadius: '50%',
      transition: 'transform 0.15s ease'
    });

    Object.assign(ring.style, baseStyles, {
      width: '32px',
      height: '32px',
      border: '1.5px solid #0f0f0d',
      background: 'transparent',
      borderRadius: '50%',
      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s'
    });

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    const mouse = {x: 0, y: 0};
    const ringPos = {x: 0, y: 0};
    let isHovering = false;
    let frameId = 0;

    const updateHoverStyles = () => {
      dot.style.transform = `translate(-50%, -50%) scale(${isHovering ? 0.5 : 1})`;
      ring.style.transform = `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
      ring.style.borderColor = '#0f0f0d';
    };

    const handleMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      dot.style.left = `${mouse.x}px`;
      dot.style.top = `${mouse.y}px`;
    };

    const handleOver = (event: Event) => {
      const element = event.target as HTMLElement | null;
      isHovering = Boolean(element?.closest('a, button, [data-cursor="hover"]'));
      updateHoverStyles();
    };

    const handleOut = (event: Event) => {
      const related = (event as MouseEvent).relatedTarget as HTMLElement | null;
      isHovering = Boolean(related?.closest('a, button, [data-cursor="hover"]'));
      updateHoverStyles();
    };

    const animateRing = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.1);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.1);
      ring.style.left = `${ringPos.x}px`;
      ring.style.top = `${ringPos.y}px`;
      frameId = window.requestAnimationFrame(animateRing);
    };

    updateHoverStyles();
    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    frameId = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      window.cancelAnimationFrame(frameId);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
