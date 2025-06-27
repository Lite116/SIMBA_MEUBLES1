"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PromoBannerContextType {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

const PromoBannerContext = createContext<PromoBannerContextType | undefined>(undefined);

export function usePromoBanner() {
  const ctx = useContext(PromoBannerContext);
  if (!ctx) throw new Error("usePromoBanner must be used within PromoBannerProvider");
  return ctx;
}

export function PromoBannerProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const closed = localStorage.getItem('promoBannerClosed');
      if (closed === 'true') setVisible(false);
    }
  }, []);

  return (
    <PromoBannerContext.Provider value={{ visible, setVisible }}>
      {children}
    </PromoBannerContext.Provider>
  );
} 