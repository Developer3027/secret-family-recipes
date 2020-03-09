import React from 'react';
import { Switch, Route } from "react-router-dom";
import HeaderLogin from './components/headerLogin/headerLogin.component';
import LoginPanel from './pages/loginPanel.page';
import Home from './pages/Home.page';
import { auth, createUserProfileDocument } from './firebase/firebase.utilis';

import './css/App.css';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }) // ,() => {console.log(this.state)} - put this in between the curly and perenth

        });
      }else{
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
          <HeaderLogin currentUser={this.state.currentUser}/>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPanel} />
        </Switch>
      </div>
    );
  }
}

export default App;
