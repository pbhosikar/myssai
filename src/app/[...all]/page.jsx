'use client';
import dynamic from 'next/dynamic';

const ClientRouterRoot = dynamic(() => import('@/components/ClientRouterRoot'), {
  ssr: false,
});

export default function CatchAllRootPage() {
  return <ClientRouterRoot />;
}