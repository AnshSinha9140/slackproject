import { auth, createOrgetUserProfileDocument } from "../firebase";
import React, { Component, createContext } from "react";

const initialUserState = { user: null, loading: false };

export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;

  componentDidMount() {
    //will be fired when you login to logout or vice-versa
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createOrgetUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
    });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
