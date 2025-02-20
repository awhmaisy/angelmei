"use client";

import React, { useState, useEffect } from 'react';
import PageLoader from './PageLoader';

const MainLayout: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null;

    if (isFirstVisit) {
      setLoading(true);
      localStorage.setItem('isFirstVisit', 'false');

      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {loading ? <PageLoader /> : children}
    </>
  );
};

export default MainLayout; 