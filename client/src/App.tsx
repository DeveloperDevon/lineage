import { Router } from "./Router";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
