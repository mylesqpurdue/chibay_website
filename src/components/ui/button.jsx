// src/components/ui/button.jsx
import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={
        `px-5 py-2 rounded-2xl font-semibold transition ` +
        `bg-indigo-600 hover:bg-indigo-500 text-white ` +
        className
      }
    >
      {children}
    </button>
  );
}
