import "../index.css";
import type { AppProps } from "next/app";
import DefaultLayout from "../src/layout/DefaultLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
