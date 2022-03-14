import { createContext, FunctionComponent, useCallback, useContext, useState } from "react"
import { Language } from '../interface/Language';

interface ILanguageContext {
    language: Language;
    updateLanguage: (language: Language) => void;
  }

export const LanguageContext = createContext<ILanguageContext>({
    language: 'eng',
    updateLanguage: () => null,
  });

export const LanguageProvider: FunctionComponent = ({ children }): JSX.Element => {
    const [language, setLanguage] = useState<Language>('tr');

    const updateLanguage = useCallback((language: Language) => {
        setLanguage(language);
      }, []);
    
    return (
        <LanguageContext.Provider value={{ language, updateLanguage }}>{children}</LanguageContext.Provider>
    )
}

export function useLanguage(): ILanguageContext {
    return useContext(LanguageContext);
  }
