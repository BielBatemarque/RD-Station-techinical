import React from 'react';

function ClearRecomendationsButton({ text, onClick }) {
  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ClearRecomendationsButton;
