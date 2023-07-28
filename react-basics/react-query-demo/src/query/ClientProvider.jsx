import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import toast from 'react-hot-toast'

const MAX_RETRIVAL_COUNT = 2;
const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.state.data !== undefined) {
          // toast.error(`Something went wrong: ${error.message}`)
        }
      },
    }),
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if((true && failureCount >= MAX_RETRIVAL_COUNT) || error.response?.status < 500){
            return false;
          }else{
            return true;
          }
        }
      }
    }
  });
  
  export const ClientProvider = ({children}) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  }