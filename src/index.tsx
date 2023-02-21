import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
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
        <App />
      </QueryClientProvider>
    </React.Suspense>
  </RecoilRoot>,
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
