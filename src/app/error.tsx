'use client';

import { useEffect } from 'react';
import ErrorLayoutPage from '@/components/ErrorLayoutPage';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorLayoutPage/>
  );
}
