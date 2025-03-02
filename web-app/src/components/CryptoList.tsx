import React from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import CryptoCard from './CryptoCard';
import LoadingIndicator from './LoadingIndicator';

interface CryptoListProps {
  searchTerm: string;
}

const CryptoList: React.FC<CryptoListProps> = ({ searchTerm }) => {
  const { data, isLoading, isError, error, refetch } = useCryptoData(20);

  const filteredData = data?.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-800 font-semibold text-xl">Cryptocurrency Prices</h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Refresh Prices
        </button>
      </div>

      {isLoading && <LoadingIndicator />}
      
      {isError && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          Error: {error.message}
        </div>
      )}

      {!isLoading && !isError && (
        <>
          {filteredData && filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map(crypto => (
                <CryptoCard key={crypto.id} crypto={crypto} />
              ))}
            </div>
          ) : (
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              No cryptocurrencies found matching &quot;{searchTerm}&quot;
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CryptoList;
