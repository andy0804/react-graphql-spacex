import "./App.css";
import logo from "./logo.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Launches } from "./components/Launches";
import Launch from "./components/Launch";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flightnumber" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
