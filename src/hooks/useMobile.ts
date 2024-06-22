import { useEffect, useState } from "react";

const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(mobileMediaQuery.matches);
  useEffect(() => {
    mobileMediaQuery.addEventListener('change', (e) => {
      setIsMobile(e.matches);
    });
  }, []);

  return isMobile;
};