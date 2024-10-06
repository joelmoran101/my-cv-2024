'use client';
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './button';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="fixed top-4 right-4 z-10"
    >
      {language === 'en' ? 'Deutsch' : 'English'}
    </Button>
  );
};