import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
