'use client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/components/AppRouter';
import LocationSync from '@/components/LocationSync';

export default function ClientRouterRoot() {
  return (
    <BrowserRouter>
      <LocationSync />
      <AppRouter />
    </BrowserRouter>
  );
}