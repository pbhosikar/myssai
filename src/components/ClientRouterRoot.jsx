'use client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/components/AppRouter';

export default function ClientRouterRoot() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}