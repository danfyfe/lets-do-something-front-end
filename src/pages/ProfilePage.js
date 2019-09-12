import React from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'


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

    const { currentUser, history } = this.props

    return(
      <>
        <Header user={currentUser} history={history}/>
        <div className='med-padding d-flex flex-column'>
          <h3 className=''>Your Profile</h3>
          <UserInfoContainer user={currentUser}/>
        </div>
        <Footer/>
      </>
    )

  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)