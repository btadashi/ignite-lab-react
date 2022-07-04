import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <SidebarDrawerProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </SidebarDrawerProvider>
    </ApolloProvider>
  );
}

export default App
