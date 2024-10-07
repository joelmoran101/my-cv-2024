'use client';
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './button';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      // className="fixed top-4 right-4 z-10"
      className="bg-accent-dark py-0 px-3 fixed top-5 right-5 z-10 "
    >
      {language === 'en' ? 'Deutsch' : 'English'}
    </Button>
  );
};