// import { Header, Aside } from "@layout"
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./route";
import { Header } from "../layouts/header";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routing />
    </Router>
  );
};
