import { useEffect } from "react";
import { Router } from "./Router";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "./lib/axios";

function App() {
  const queryClient = new QueryClient();
  // useEffect(() => {
  //   server.get("/members").then((a) => console.log(a.data));
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        {/* <AppBar /> */}
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
