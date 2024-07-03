// src/App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="app">
          <Header />
          <SearchInput />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
