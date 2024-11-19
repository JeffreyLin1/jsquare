// src/components/UnityGame.tsx
import React from 'react';

const UnityGame: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="/JsquaredGame/index.html"
        style={{ border: 'none', width: '100%', height: '800px' }}
        allowFullScreen
      />
    </div>
  );
};

export default UnityGame;
