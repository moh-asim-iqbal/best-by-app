import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {ItemsList, ItemsInsert, ItemsUpdate} from '../pages'
import SummaryBox from "../components/summaryTable/SummaryBox";
import './app.scss'
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="sections"> 
          <Switch>
            <Route path="/" exact component={SummaryBox} />
            <Route path="/items/list" exact component={ItemsList} />
            <Route path="/items/create" exact component={ItemsInsert} />
            <Route path="/items/update/:id" exact component={ItemsUpdate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

