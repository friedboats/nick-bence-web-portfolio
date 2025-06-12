'use client';

import usePageNavigationStore from '@/stores';
import { useEffect } from 'react';

const GlobalStateInit = () => {
  const setPageNames = usePageNavigationStore((s) => s.setPageNames);

  useEffect(() => {
    setPageNames([
      '/starbucks',
      '/dynatrace-nav',
      '/dynatrace-platform',
      '/nathans',
    ]);
  }, [setPageNames]);

  return null; // nothing rendered, just sets state
};

export default GlobalStateInit;
