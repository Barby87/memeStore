import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Login from './containers/login/Login';
import MemeCreate from './containers/memeCreate/MemeCreate';
import MemeDelete from './containers/memeDelete/MemeDelete';
import MemesList from './containers/memesList/MemesList';
import MyList from './containers/myList/MyList';
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
          <Route path="/memes-list" exact>
            <MemesList/>
          </Route>
          {/* <PrivateRoute path="/memes-list" isLogin={isLogin} component={MemesList} /> */}
          <PrivateRoute path="/my-list" isLogin={isLogin} component={MyList}/>
          <PrivateRoute path="/meme/create" isLogin={isLogin} component={MemeCreate}/>
          <PrivateRoute path="/meme/remove/:id" isLogin={isLogin} component={MemeDelete}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
