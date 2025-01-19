'use client'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { matchRoutes } from 'react-router-dom';

export const TitleManager = ({ routes }) => {
  const location = useLocation();

  useEffect(() => {
    const matchingRoutes = matchRoutes(routes, location.pathname);
    const title = matchingRoutes?.[0]?.route?.title || 'Социальная сеть';
    document.title = title;
  }, [location, routes]);

  return null;
};