import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import Loading from './components/Loading'
import Users from './components/Users'
import Addresses from './components/Addresses'

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    showAddresses: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({users: res.data})
    console.log('this is the data', res.data)
    this.setState({loading: false})
  }
  render() {
    
    const {loading, users, showAddresses} = this.state

    const changeStateOfAddress = () => {
      if(!showAddresses) {
      this.setState({showAddresses: true})
      } else {
      this.setState({showAddresses: false})
      }
    }
    
    if(loading) {
      return (
      <Loading />
      )
    }

    if(showAddresses) {
      return (
      <div>
        <Users 
        users={users}
        changeStateOfAddress={changeStateOfAddress}
        showAddresses={showAddresses}
        />
      </div>
      )
    }
    
    return (
    <div className="App">
      <Users users={users} changeStateOfAddress={changeStateOfAddress}/>
      {/* completed */}{/* Make state of loading, users, showAdress */}
      {/* completed */}{/* Make componentdidmount that reaches out to https://jsonplaceholder.typicode.com/users*/}
      {/* completed */}{/* Set the users state with data you get back */}
      {/* completed */}{/* Set loading to true while data is being fetched and render loading component */}
      {/* completed */}{/* when loading is false (conditional rendering) render the users component that loops through props of users and renders userItem component */}
      {/* completed */}{/* Look at data you get back. Notice what you have access to */}
      {/* create a button in the users component that allows change in the showAddress(boolean) state */}
      {/* If the showaddress boolean is true, show all addresses of users */}
      </div>
    );
  }
}
export default App;
