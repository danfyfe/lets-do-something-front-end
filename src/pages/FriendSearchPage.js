import React from 'react'
import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import FriendSearchContainer from '../containers/FriendSearchContainer.js'
import Footer from '../containers/Footer.js'

class FriendSearchPage extends React.Component {

  componentDidMount(){
    fetch(`${API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp => resp.json())
    .then(user => {
      this.props.setCurrentUser(user.user)
    }).then(this.props.fetched())
  }


  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }

    return(<>
      <Header
        user={this.props.state.currentUser}
        history={this.props.history}/>

        <div className='d-flex flex-column'>
          <span className='font-weight-bold med-font med-padding m-auto'>Search for a friend!</span>
          <FriendSearchContainer
            user={this.props.state.currentUser}
          />
        </div>
      <Footer/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'}),
    setCurrentEvent: event => dispatch({type:'SET_CURRENT_EVENT', event})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendSearchPage)