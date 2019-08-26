import React from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

// import '../css/ProfilePage.css';

import Header from '../containers/Header.js'
import UserInfoContainer from '../containers/UserInfoContainer.js'
import Footer from '../containers/Footer.js'

class ProfilePage extends React.Component {

    componentDidMount(){
      fetch(`${API_ENDPOINT}/profile`, {
        method: 'POST',
        headers: {
          Authorization:  localStorage.getItem("token")
        }
      }).then(resp=>resp.json())
      .then(user => {
        this.props.setCurrentUser(user.user)
      })
    }


  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }
    return(
      <>
        <Header user={this.props.state.currentUser} history={this.props.history}/>
        <div className='profile-page-container'>
          <h3>Your Profile</h3>
          <UserInfoContainer user={this.props.state.currentUser}/>
        </div>
        <Footer/>
      </>
    )

  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)