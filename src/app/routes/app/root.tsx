import { Outlet } from 'react-router';

import { DashboardLayout } from '@/components/layouts';
import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { ErrorBoundary } from 'react-error-boundary';


// export const ErrorBoundary = () => {
//   return <div>Something went wrong!</div>;
// };

const AppRoot = () => {
  return (
     <DashboardLayout>
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <ErrorBoundary
          key={location.pathname}
          fallback={<div>Something went wrong!</div>}
        >
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </DashboardLayout>
  );
};

export default AppRoot;