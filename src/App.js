import "./App.css";
import Nav from "./components/Nav/Nav";
import Container from "./components/container/Container";
import WorkoutsPage from "./components/WorkoutsPage/WorkoutsPage";
import InfoPage from "./components/InfoPage/InfoPage";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ON_ADD, ON_SUB } from "./store/actions";

function App(props) {
  let routes = (
    <Switch>
      <Route path="/" exact render={() => <WorkoutsPage></WorkoutsPage>} />
      <Route path="/info" render={() => <InfoPage data={props}></InfoPage>} />
    </Switch>
  );

  return (
    <div className="App">
      <Nav />
      <Container>{routes}</Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(ON_ADD),
    onSub: () => dispatch(ON_SUB),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
