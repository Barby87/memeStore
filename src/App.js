import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Login from './containers/login/Login';
import MemesList from './containers/memesList/MemesList';
import NavBar from './containers/navBar/NavBar';

function App() {
  const isLogin = useSelector(state => state.login.success)
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <PrivateRoute path="/memes-list" isLogin={isLogin} component={MemesList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
