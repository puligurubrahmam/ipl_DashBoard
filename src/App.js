import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id/" component={TeamMatches} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
