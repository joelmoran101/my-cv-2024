// 

import EnhancedCVTemplate from '@/components/enhanced-cv-template'
import { LanguageProvider } from '@/components/LanguageContext'
import { LanguageToggle } from '@/components/LanguageToggle'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen p-4 relative">
        <LanguageToggle />
        <EnhancedCVTemplate />
      </main>
    </LanguageProvider>
  )
}