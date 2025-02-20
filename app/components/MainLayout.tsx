"use client";

import React, { useState, useEffect } from 'react';
import PageLoader from './PageLoader';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null;
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = navEntry.type === 'reload';

    if (isFirstVisit || isReload) {
      setLoading(true);
      localStorage.setItem('isFirstVisit', 'false');

      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        children
      )}
    </>
  );
};

export default MainLayout; 