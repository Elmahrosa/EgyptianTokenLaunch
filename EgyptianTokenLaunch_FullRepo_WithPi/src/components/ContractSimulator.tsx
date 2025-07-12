import React, { useState } from 'react';

export default function ContractSimulator() {
  const [launched, setLaunched] = useState(false);

  const simulateLaunch = () => {
    setTimeout(() => {
      setLaunched(true);
    }, 1000);
  };

  return (
    <div className="bg-white text-black p-4 rounded shadow-md mt-8">
      <h2 className="text-xl font-bold mb-2">Simulate Token Launch</h2>
      <button onClick={simulateLaunch} className="bg-green-500 text-white px-4 py-2 rounded">
        Launch Token
      </button>
      {launched && <p className="mt-3 text-green-700">🎉 Token successfully launched on Pi Network!</p>}
    </div>
  );
}