import {ReactNode, ChangeEvent} from 'react';

export interface LanguageContextType {
    handleLanguage: (e: ChangeEvent<HTMLSelectElement>) => void;
    text: {
      headerTitle: string;
      headerSubtitle: string;
      mainContent: string;
      footerTitle: string;
      textAbout: string;
      textContact: string;
    };
  }

export interface LanguageProviderProps {
    children: ReactNode;
  }  

export interface TranslationType {
    headerTitle: string;
    headerSubtitle: string;
    mainContent: string;
    footerTitle: string;
    textAbout: string;
    textContact: string;
  }  