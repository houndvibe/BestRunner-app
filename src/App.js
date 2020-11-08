import "./App.css";
import Nav from "./components/Nav/Nav";
import Container from "./components/container/Container";
import WorkoutsPage from "./components/WorkoutsPage/WorkoutsPage";
import InfoPage from "./components/InfoPage/InfoPage";
import { Route, Switch } from "react-router-dom";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={() => <InfoPage></InfoPage>} />
      <Route path="/workouts" render={() => <WorkoutsPage></WorkoutsPage>} />
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
