'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; 

export const TitleManager = ({ routes }) => {
  const pathname = usePathname(); 

  useEffect(() => {
  
    const matchingRoute = routes.find((route) => route.path === pathname);
    const title = matchingRoute?.title || 'Социальная сеть'; 
    document.title = title;
  }, [pathname, routes]);

  return null;
};