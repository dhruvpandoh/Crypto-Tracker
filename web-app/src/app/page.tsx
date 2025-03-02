'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const queryClient = new QueryClient();

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <SearchBar onSearch={handleSearch} />
          </div>
          <CryptoList searchTerm={searchTerm} />
        </main>
      </div>
    </QueryClientProvider>
  );
}