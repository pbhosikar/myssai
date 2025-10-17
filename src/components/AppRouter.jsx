'use client';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '@/components/pages/HomeView';
import MyHRView from '@/components/pages/MyHRView';
import CompanyView from '@/components/pages/CompanyView';
import OmBahethiView from '@/components/pages/OmBahethiView';
import NotFoundView from '@/components/pages/NotFoundView';
import UnderDevelopmentView from '@/components/pages/UnderDevelopmentView';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/my-hr" element={<MyHRView />} />
      <Route path="/company" element={<CompanyView />} />
      <Route path="/om-bahethi" element={<OmBahethiView />} />
      <Route path="/under-development" element={<UnderDevelopmentView />} />
      {/* Fallback to NotFound for unmatched routes */}
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}