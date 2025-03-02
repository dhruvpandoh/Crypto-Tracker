import { useQuery } from '@tanstack/react-query';
import { fetchCryptocurrencies, CryptoCurrency } from '../services/api';

export const useCryptoData = (limit = 10) => {
  return useQuery<CryptoCurrency[], Error>({
    queryKey: ['cryptoData', limit],
    queryFn: () => fetchCryptocurrencies(limit),
    refetchInterval: 60000, 
    staleTime: 30000, 
  });
};