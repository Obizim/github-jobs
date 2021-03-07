import "./styles/App.scss";
import Home from "./pages/Home";
import FetchDataContext from "./context/FetchDataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <FetchDataContext>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/position/:id" component={JobDetail} />
        </Switch>
      </Router>
    </FetchDataContext>
  );
}

export default App;
