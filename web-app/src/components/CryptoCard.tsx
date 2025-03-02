import React from 'react';
import Image from 'next/image';
import { CryptoCurrency } from '../services/api';

interface CryptoCardProps {
  crypto: CryptoCurrency;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const priceChangeColor = crypto.price_change_percentage_24h >= 0 
    ? 'text-green-600' 
    : 'text-red-600';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 relative mr-3">
          <Image
            src={crypto.image}
            alt={crypto.name}
            width={40}
            height={40}
          />
        </div>
        <div>
          <h3 className="text-gray-800 font-bold">{crypto.name}</h3>
          <p className="text-gray-500 text-sm uppercase">{crypto.symbol}</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-gray-800">{formatCurrency(crypto.current_price)}</p>
        <p className={`${priceChangeColor} font-medium`}>
          {crypto.price_change_percentage_24h > 0 ? '↑' : '↓'} 
          {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        Market Cap: {formatCurrency(crypto.market_cap)}
      </div>
      
      <div className="mt-1 text-xs text-gray-400">
        Last updated: {new Date(crypto.last_updated).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default CryptoCard;