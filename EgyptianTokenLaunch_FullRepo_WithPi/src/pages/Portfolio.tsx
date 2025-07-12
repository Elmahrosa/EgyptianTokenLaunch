import React, { useEffect, useState } from 'react';
import { getPiWalletBalance } from '../api/piNetwork';

const wallet = "pi_djOasmd81923kjasdljZzm";

export default function Portfolio() {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    getPiWalletBalance(wallet).then(setBalance);
  }, []);

  return (
    <div className="text-left p-6">
      <h2 className="text-2xl font-semibold mb-4">📊 Portfolio</h2>
      <p><strong>Wallet:</strong> {wallet}</p>
      <p><strong>Pi Balance:</strong> {balance !== null ? `${balance} π` : 'Loading...'}</p>
    </div>
  );
}