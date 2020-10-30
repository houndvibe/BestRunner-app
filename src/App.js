import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/container/Container";
import WorkoutsPage from "./components/WorkoutsPage/WorkoutsPage";
import InfoPage from "./components/InfoPage/InfoPage";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={WorkoutsPage} />
      <Route path="/info" component={InfoPage} />
    </Switch>
  );

  return (
    <div className="App">
      <Nav />
      <Container>{routes}</Container>
    </div>
  );
}

export default App;
