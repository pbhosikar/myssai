'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AppShell({ children }) {
  const pathname = usePathname()
  const hideChrome = pathname === '/login'

  return (
    <>
      {!hideChrome && <Header />}
      <main id="main-content" role="main" className="layout-content portlet-layout">
        {children}
      </main>
      {!hideChrome && <Footer />}
    </>
  )
}