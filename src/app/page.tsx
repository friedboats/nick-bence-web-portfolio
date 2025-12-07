import HomePageClient from '@/components/HomePageClient';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomePageClient />
    </Suspense>
  );
}
