'use client';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LocationSync() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build a search string from Next's searchParams
  const search = searchParams.toString();
  const nextUrl = search ? `${pathname}?${search}` : pathname;
  const currentUrl = `${location.pathname}${location.search}`;

  useEffect(() => {
    // If Next changed the URL, sync React Router to match
    if (nextUrl && nextUrl !== currentUrl) {
      navigate(nextUrl, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextUrl]);

  return null;
}