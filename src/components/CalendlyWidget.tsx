'use client';

import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button
        onClick={() => {
          (window as any).Calendly.initPopupWidget({
            url: 'https://calendly.com/alikashef27/30min',
          });
        }}      >
        Schedule time with me
      </button>
    </>
  );
};

export default CalendlyWidget;
