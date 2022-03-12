import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { PhotobookPage } from "./pages/PhotobookPage";
import FlowersImagePage from "./pages/FlowersImagePage";
import AnimalsImagePage from "./pages/AnimalsImagePage";
import PeopleImagePage from "./pages/PeopleImagePage";
import OthersImagePage from "./pages/OthersImagePage";

function App() {
  let history = useHistory();
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/my-photobook" exact component={PhotobookPage} />
        <Route path="/my-photobook/others" exact component={OthersImagePage} />
        <Route
          path="/my-photobook/animals"
          exact
          component={AnimalsImagePage}
        />
        <Route
          path="/my-photobook/flowers"
          exact
          component={FlowersImagePage}
        />
        <Route path="/my-photobook/people" exact component={PeopleImagePage} />

        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
