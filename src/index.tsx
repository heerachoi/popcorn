import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import React from 'react';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        <App />
      </QueryClientProvider>
    </React.Suspense>
  </RecoilRoot>,
);

reportWebVitals();
