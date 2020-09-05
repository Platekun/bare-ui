import React from 'react';

export function getColorBlock(color: React.CSSProperties['backgroundColor']) {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: color,
      }}
    />
  );
}
